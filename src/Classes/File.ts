import type { AnimationFilePacket, AudioFilePacket, DocumentFilePacket, FilePacket, PhotoSizeFilePacket, StickerFilePacket, VideoFilePacket, VideoNoteFilePacket, VoiceFilePacket } from '../Types/File'
import type { Stream } from 'node:stream'

import { defaults, EnvironmentVariables } from '../Internals/shared'
import { Rest } from './Rest'

import { createReadStream, createWriteStream, type ReadStream } from 'node:fs'
import { isAbsolute, normalize, parse } from 'node:path'
import FormData from 'form-data'

/**
 * If there is no token set, it will get Token from your environment variables {@link EnvironmentVariables}.
 * 
 * @property client The client will only be availble if the class is passed by tgx-core itself.
 */
export class File implements Omit<FilePacket, 'token'|'rest'> {

    private _token?: string
    private _rest: Rest

    public file_id?: string
    public file_path?: string

    public path?: string 
    public options?: FormData.AppendOptions

    /**
     * @param packet The packet metadata of the file.
     */
    public constructor(packet: FilePacket)

    /**
     * @param file_id The id of the file.
     */
    public constructor(file_id: string)

    /**
     * @param path The absolute path to the file to attach.
     * @param options Additional append options for uploading file, can be empty.
     */
    public constructor(path: string, options?: FormData.AppendOptions)
    public constructor(packet: FilePacket|string, options?: FormData.AppendOptions){
        if(typeof packet === 'string'){
            if(isAbsolute(packet) || normalize(packet) === packet){
                this.path = packet
                this.options = options
            } else {
                this.file_id = packet
            }
        } else {
            if(packet.rest){
                this._rest = packet.rest
                delete packet.rest
            }

            this.setToken(packet.token!)
            delete packet.token

            defaults(packet, this)
        }

        this._rest ??= new Rest()
    }

    /**
     * Fetches the file, ensure that you have set the token or otherwise it will return the same instance.
     */
    public async fetch(): Promise<this> {
        let response, { file_id, token } = this
        if(token && file_id && (response = await this.rest.fetchFile(file_id, false))){
            defaults(response, this, false, true)
            return this
        }
        return this
    }

    /**
     * Downloads the file, must have a token.
     * 
     * @param path The absolute path to a file where you want to write the data.
     */
    public async download(path?: string): Promise<Stream|boolean> {
        let response, { token, file_path } = this

        await this.fetch()
        if(token && (response = await this.rest.request(`/${file_path}`, null, { file: true, responseType: 'stream', data: true }))){
            if(!path) return response

            let writer = createWriteStream(path)
            response.pipe(writer)

            return new Promise((resolve, reject) => {
                writer.on('finish', () => resolve(true))
                writer.on('error', () => reject(false))
            })
        }
        return false
    }

    /**
     * Returns an array that you can use to append to a FormData.
     */
    public get form(): [string, ReadStream, FormData.AppendOptions|string]{
        const parsed = parse(this.path!)
        return [parsed.name, createReadStream(this.path!), this.options ?? parsed.base]
    }

    /**
     * Wether the file is fetched. The link is valid for 1 hour after fetching.
     */
    public get partial(){
        return Boolean(this.file_path)
    }

    /**
     * Returns the id of the file or the attach of the attached file.
     */
    public get id(){
        const parsed = parse(this.path!)
        return this.file_id ?? `attach://${parsed.name}`
    }

    private get token(){
        return this._token ?? process.env[EnvironmentVariables.Token]
    }

    private get rest(){
        return this._rest.ready ? this._rest : this._rest.setToken(this.token!)
    }

    /**
     * Returns the id of the file or the attach of the attached file.
     */
    public parse(){
        return this.id
    }

    /**
     * Sets the token for fetching and downloading.
     * 
     * @param token The token to set, this is exclusive to this class.
     */
    public setToken(token: string){
        this._token = token
        return this
    }

}

/**
 * @inheritdoc
 */
export class Animation extends File implements AnimationFilePacket {
    
}

/**
 * @inheritdoc
 */
export class Audio extends File implements AudioFilePacket {
    
}

/**
 * @inheritdoc
 */
export class Document extends File implements DocumentFilePacket {
    
}

/**
 * @inheritdoc
 */
export class PhotoSize extends File implements PhotoSizeFilePacket {

}

/**
 * @inheritdoc
 */
export class Sticker extends File implements StickerFilePacket  {
    
}

/**
 * @inheritdoc
 */
export class Video extends File implements VideoFilePacket {
    
}

/**
 * @inheritdoc
 */
export class VideoNote extends File implements VideoNoteFilePacket {
    
}

/**
 * @inheritdoc
 */
export class Voice extends File implements VoiceFilePacket {
    
}