"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voice = exports.VideoNote = exports.Video = exports.Sticker = exports.PhotoSize = exports.Document = exports.Audio = exports.Animation = exports.File = void 0;
const node_fs_1 = require("node:fs");
const shared_1 = require("../Internals/shared");
const path_1 = require("path");
const node_path_1 = require("node:path");
/**
 * @property client The client will only be availble if the class is passed by tgx-core itself.
 */
class File {
    /**
     * Always check the path to be correct or it will be set as the id of the file.
     *
     * @param packet The packet, the filel_id, or absolute path to the file to read.
     */
    constructor(packet) {
        if (typeof packet === 'string') {
            if ((0, path_1.isAbsolute)(packet) || (0, path_1.normalize)(packet) === packet) {
                this.path = packet;
            }
            else {
                this.file_id = packet;
            }
        }
        else {
            (0, shared_1.defaults)(packet, this);
            Object.defineProperty(this, 'client', { value: packet.client });
        }
    }
    /**
     * The id of the file or 'attach://<id>' of the reading file.
     */
    get id() {
        const parsed = (0, node_path_1.parse)(this.path);
        return this.file_id ?? `attach://${parsed.name}`;
    }
    /**
     * Returns a tuple value for form appending.
     */
    get form() {
        const parsed = (0, node_path_1.parse)(this.path);
        return [parsed.name, (0, node_fs_1.createReadStream)(this.path), parsed.base];
    }
    /**
     * Fetch the file from Telegram, this is required for downloading the file.
     */
    async fetch() {
        if (!this.client)
            return false;
        let { file_id } = this;
        let data = await this.client.api.getFile(null, {
            params: { file_id },
            lean: true,
            result: true
        });
        return data ? (0, shared_1.defaults)(data, this) : data;
    }
    /**
     * Fetches the file and downloads it.
     *
     * @param path Leave empty if you want a stream, or an absolute path to the file where you want to write the Stream.
     */
    async download(path) {
        if (!await this.fetch())
            return false;
        let response = await this.client?.api.request(`${this.client.api.options.files}/${this.client.api.token}/${this.file_path}`, 'get', {
            responseType: 'stream'
        });
        if (response) {
            if (!path)
                return response.data;
            let writer = (0, node_fs_1.createWriteStream)(path);
            response.data.pipe(writer);
            return new Promise((resolve) => {
                writer.on('finish', () => { resolve(true); });
                writer.on('error', (error) => {
                    this.client?.logger.error(error);
                    resolve(false);
                });
            });
        }
        return false;
    }
}
exports.File = File;
/**
 * @inheritdoc
 */
class Animation extends File {
}
exports.Animation = Animation;
/**
 * @inheritdoc
 */
class Audio extends File {
}
exports.Audio = Audio;
/**
 * @inheritdoc
 */
class Document extends File {
}
exports.Document = Document;
/**
 * @inheritdoc
 */
class PhotoSize extends File {
}
exports.PhotoSize = PhotoSize;
/**
 * @inheritdoc
 */
class Sticker extends File {
}
exports.Sticker = Sticker;
/**
 * @inheritdoc
 */
class Video extends File {
}
exports.Video = Video;
/**
 * @inheritdoc
 */
class VideoNote extends File {
}
exports.VideoNote = VideoNote;
/**
 * @inheritdoc
 */
class Voice extends File {
}
exports.Voice = Voice;
//# sourceMappingURL=File.js.map