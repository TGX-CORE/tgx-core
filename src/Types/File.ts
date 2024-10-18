import type { Client } from '../Client/Client'
import type { File, PhotoSize } from '../Classes/File'

export interface FilePacket {
    file_id?: string
    file_unique_id?: string
    file_size?: number

    file_path?: string
    client?: Client
}

export interface MediaFilePacket {
    duration?: number
    mime_type?: string
    file_name?: string
}

export interface AnimationFilePacket extends FilePacket, MediaFilePacket, PhotoSizeFilePacket {
    thumbnail?: PhotoSize
}

export interface AudioFilePacket extends FilePacket, MediaFilePacket {
    performer?: string
    title?: string
}

export interface DocumentFilePacket extends FilePacket, Omit<MediaFilePacket,'duration'> {
    thumbnail?: PhotoSize
}

export interface PhotoSizeFilePacket extends FilePacket {
    width?: number
    height?: number
}

export interface StickerFilePacket extends FilePacket, PhotoSizeFilePacket {
    type?: 'regular'|'maks'|'custom_emoji'
    thumbnail?: PhotoSizeFilePacket
    is_animated?: boolean
    is_video?: boolean
    emoji?: string
    set_name?: string
    premium_animation?: FilePacket|File
    mask_position?: MaskPosition
    custom_emoji_id?: string
    needs_repainting?: true
}

export interface MaskPosition {
    point: string
    x_shift: number
    y_shift: number
    scale: number
}

export interface VideoFilePacket extends FilePacket, PhotoSizeFilePacket, MediaFilePacket {

}

export interface VideoNoteFilePacket extends FilePacket {
    length?: number
    thumbnail?: PhotoSize
}

export interface VoiceFilePacket extends FilePacket, Omit<MediaFilePacket,'file_name'> {

}