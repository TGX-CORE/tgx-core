"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryResult = void 0;
var QueryResult;
(function (QueryResult) {
    /**
     * @param payload The payload for the article query result.
     */
    function Article(payload) {
        return { ...payload, type: 'article' };
    }
    QueryResult.Article = Article;
    /**
     * @param payload The payload for the audio query result.
     */
    function Audio(payload) {
        return { ...payload, type: 'audio' };
    }
    QueryResult.Audio = Audio;
    /**
     * @param payload The payload for the contact query result.
     */
    function Contact(payload) {
        return { ...payload, type: 'contact' };
    }
    QueryResult.Contact = Contact;
    /**
     * @param payload The payload for the cached audio query result.
     */
    function CachedAudio(payload) {
        return { ...payload, type: 'audio' };
    }
    QueryResult.CachedAudio = CachedAudio;
    /**
     * @param payload The payload for the cached document query result.
     */
    function CachedDocument(payload) {
        return { ...payload, type: 'document' };
    }
    QueryResult.CachedDocument = CachedDocument;
    /**
     * @param payload The payload for the cached GIF query result.
     */
    function CachedGif(payload) {
        return { ...payload, type: 'gif' };
    }
    QueryResult.CachedGif = CachedGif;
    /**
     * @param payload The payload for the cached MPEG-4 GIF query result.
     */
    function CachedMpeg4Gif(payload) {
        return { ...payload, type: 'mpeg4_gif' };
    }
    QueryResult.CachedMpeg4Gif = CachedMpeg4Gif;
    /**
     * @param payload The payload for the cached photo query result.
     */
    function CachedPhoto(payload) {
        return { ...payload, type: 'photo' };
    }
    QueryResult.CachedPhoto = CachedPhoto;
    /**
     * @param payload The payload for the cached sticker query result.
     */
    function CachedSticker(payload) {
        return { ...payload, type: 'sticker' };
    }
    QueryResult.CachedSticker = CachedSticker;
    /**
     * @param payload The payload for the cached video query result.
     */
    function CachedVideo(payload) {
        return { ...payload, type: 'video' };
    }
    QueryResult.CachedVideo = CachedVideo;
    /**
     * @param payload The payload for the cached voice query result.
     */
    function CachedVoice(payload) {
        return { ...payload, type: 'voice' };
    }
    QueryResult.CachedVoice = CachedVoice;
    /**
     * @param payload The payload for the document query result.
     */
    function Document(payload) {
        return { ...payload, type: 'document' };
    }
    QueryResult.Document = Document;
    /**
     * @param payload The payload for the game query result.
     */
    function Game(payload) {
        return { ...payload, type: 'game' };
    }
    QueryResult.Game = Game;
    /**
     * @param payload The payload for the GIF query result.
     */
    function Gif(payload) {
        return { ...payload, type: 'gif' };
    }
    QueryResult.Gif = Gif;
    /**
     * @param payload The payload for the location query result.
     */
    function Location(payload) {
        return { ...payload, type: 'location' };
    }
    QueryResult.Location = Location;
    /**
     * @param payload The payload for the MPEG-4 GIF query result.
     */
    function Mpeg4Gif(payload) {
        return { ...payload, type: 'mpeg4_gif' };
    }
    QueryResult.Mpeg4Gif = Mpeg4Gif;
    /**
     * @param payload The payload for the photo query result.
     */
    function Photo(payload) {
        return { ...payload, type: 'photo' };
    }
    QueryResult.Photo = Photo;
    /**
     * @param payload The payload for the button query result.
     */
    function Button(payload) {
        return { ...payload };
    }
    QueryResult.Button = Button;
    /**
     * @param payload The payload for the venue query result.
     */
    function Venue(payload) {
        return { ...payload, type: 'venue' };
    }
    QueryResult.Venue = Venue;
    /**
     * @param payload The payload for the video query result.
     */
    function Video(payload) {
        return { ...payload, type: 'video' };
    }
    QueryResult.Video = Video;
    /**
     * @param payload The payload for the voice query result.
     */
    function Voice(payload) {
        return { ...payload, type: 'voice' };
    }
    QueryResult.Voice = Voice;
})(QueryResult || (exports.QueryResult = QueryResult = {}));
//# sourceMappingURL=InlineQueryResult.js.map