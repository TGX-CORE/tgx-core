import type { InputMediaAnimationPayload, InputMediaAudioPayload, InputMediaDocumentPayload, InputMediaPhotoPayload, InputMediaVideoPayload } from '../Types/InputMedia';
import { Builder } from './Builder';
export declare class InputMediaBuilder extends Builder {
    constructor(...medias: (InputMedia.Animation | InputMedia.Audio | InputMedia.Document | InputMedia.Photo | InputMedia.Video)[]);
}
export declare namespace InputMedia {
    class Animation extends Builder {
        constructor(payload: InputMediaAnimationPayload);
    }
    class Audio extends Builder {
        constructor(payload: InputMediaAudioPayload);
    }
    class Document extends Builder {
        constructor(payload: InputMediaDocumentPayload);
    }
    class Photo extends Builder {
        constructor(payload: InputMediaPhotoPayload);
    }
    class Video extends Builder {
        constructor(payload: InputMediaVideoPayload);
    }
}
//# sourceMappingURL=InputMedia.d.ts.map