import type  { AnimationFilePacket, AudioFilePacket, DocumentFilePacket, FilePacket, PhotoSizeFilePacket, StickerFilePacket, VideoFilePacket, VideoNoteFilePacket, VoiceFilePacket } from '../Types/File'
import type { Client } from '../Client/Client'
import type { Stream } from 'node:stream'

import { createReadStream, createWriteStream, type ReadStream } from 'node:fs'
import { defaults } from '../Internals/shared'
import { isAbsolute, normalize } from 'path'
import { parse } from 'node:path'

/**
 * @property client The client will only be availble if the class is passed by tgx-core itself.
 */
export class File implements FilePacket {

    public file_id?: string
    public file_path?: string
    
    public path?: string 

    public readonly client?: Client

    /**
     * Always check the path to be correct or it will be set as the id of the file.
     * 
     * @param packet The packet, the filel_id, or absolute path to the file to read.
     */
    public constructor(packet?: FilePacket|string){
        if(typeof packet === 'string'){
            if(isAbsolute(packet) || normalize(packet) === packet){
                this.path = packet
            } else {
                this.file_id = packet
            }
        } else {
            defaults(packet, this)

            Object.defineProperty(this, 'client', { value: packet!.client })
        }
    }

    /**
     * The id of the file or 'attach://<id>' of the reading file.
     */
    public get id(){
        const parsed = parse(this.path!)
        return this.file_id ?? `attach://${parsed.name}`
    }

    /**
     * Returns a tuple value for form appending.
     */
    public get form(): [string, ReadStream, string] {
        const parsed = parse(this.path!)
        return [parsed.name, createReadStream(this.path!), parsed.base]
    }

    /**
     * Fetch the file from Telegram, this is required for downloading the file.
     */
    public async fetch(): Promise<this|boolean> {
        if(!this.client) return false

        let { file_id } = this
        let data = await this.client.api.getFile(null, {
            params: { file_id },
            lean: true,
            result: true
        })

        return data ? defaults(data, this) : data
    }

    /**
     * Fetches the file and downloads it.
     * 
     * @param path Leave empty if you want a stream, or an absolute path to the file where you want to write the Stream.
     */
    public async download(path: string): Promise<Stream|boolean> {
        if(!await this.fetch()) return false
        let response = await this.client?.api.request(`${this.client.api.options.files}/${this.client.api.token}/${this.file_path}`, 'get', {
            responseType: 'stream'
        })

        if(response){
            if(!path) return response.data

            let writer = createWriteStream(path)
            response.data.pipe(writer)

            return new Promise((resolve) => {
                writer.on('finish', () => { resolve(true) })
                writer.on('error', (error) => {
                    this.client?.logger.error(error)
                    resolve(false)
                })
            })

        } 
        return false
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