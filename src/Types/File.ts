import type { File, PhotoSize } from '../Classes/File'
import type { Rest } from '../Classes/Rest'

export interface FilePacket {
    file_id?: string
    file_unique_id?: string
    file_size?: number

    file_path?: string
    rest?: Rest
    token?: string
}

export interface MediaFilePacket {
    duration?: number
    mime_type?: string
    file_name?: string
}

export interface AnimationFilePacket extends Omit<FilePacket, 'token'|'rest'>, MediaFilePacket, PhotoSizeFilePacket {
    thumbnail?: PhotoSize
}

export interface AudioFilePacket extends Omit<FilePacket, 'token'|'rest'>, MediaFilePacket {
    performer?: string
    title?: string
}

export interface DocumentFilePacket extends Omit<FilePacket, 'token'|'rest'>, Omit<MediaFilePacket,'duration'> {
    thumbnail?: PhotoSize
}

export interface PhotoSizeFilePacket extends Omit<FilePacket, 'token'|'rest'> {
    width?: number
    height?: number
}

export interface StickerFilePacket extends Omit<FilePacket, 'token'|'rest'>, PhotoSizeFilePacket {
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

export interface VideoFilePacket extends Omit<FilePacket, 'token'|'rest'>, PhotoSizeFilePacket, MediaFilePacket {

}

export interface VideoNoteFilePacket extends Omit<FilePacket, 'token'|'rest'> {
    length?: number
    thumbnail?: PhotoSize
}

export interface VoiceFilePacket extends Omit<FilePacket, 'token'|'rest'>, Omit<MediaFilePacket,'file_name'> {

}