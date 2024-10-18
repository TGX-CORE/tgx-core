import type { AnimationFilePacket, AudioFilePacket, DocumentFilePacket, FilePacket, PhotoSizeFilePacket, StickerFilePacket, VideoFilePacket, VideoNoteFilePacket, VoiceFilePacket } from '../Types/File';
import type { Client } from '../Client/Client';
import type { Stream } from 'node:stream';
import { type ReadStream } from 'node:fs';
/**
 * @property client The client will only be availble if the class is passed by tgx-core itself.
 */
export declare class File implements FilePacket {
    file_id?: string;
    file_path?: string;
    path?: string;
    readonly client?: Client;
    /**
     * Always check the path to be correct or it will be set as the id of the file.
     *
     * @param packet The packet, the filel_id, or absolute path to the file to read.
     */
    constructor(packet?: FilePacket | string);
    /**
     * The id of the file or 'attach://<id>' of the reading file.
     */
    get id(): string;
    /**
     * Returns a tuple value for form appending.
     */
    get form(): [string, ReadStream, string];
    /**
     * Fetch the file from Telegram, this is required for downloading the file.
     */
    fetch(): Promise<this | boolean>;
    /**
     * Fetches the file and downloads it.
     *
     * @param path Leave empty if you want a stream, or an absolute path to the file where you want to write the Stream.
     */
    download(path: string): Promise<Stream | boolean>;
}
/**
 * @inheritdoc
 */
export declare class Animation extends File implements AnimationFilePacket {
}
/**
 * @inheritdoc
 */
export declare class Audio extends File implements AudioFilePacket {
}
/**
 * @inheritdoc
 */
export declare class Document extends File implements DocumentFilePacket {
}
/**
 * @inheritdoc
 */
export declare class PhotoSize extends File implements PhotoSizeFilePacket {
}
/**
 * @inheritdoc
 */
export declare class Sticker extends File implements StickerFilePacket {
}
/**
 * @inheritdoc
 */
export declare class Video extends File implements VideoFilePacket {
}
/**
 * @inheritdoc
 */
export declare class VideoNote extends File implements VideoNoteFilePacket {
}
/**
 * @inheritdoc
 */
export declare class Voice extends File implements VoiceFilePacket {
}
