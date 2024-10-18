"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parseables = exports.PartialTypes = exports.Auxiliaries = exports.Endpoint = exports.Registries = void 0;
/**
 * Available registries for loading.
 *
 * @property All Register all the available registries.
 * @property Events Register the events registry.
 * @property Commands Register the commands registry.
 * @property Auxiliaries Register the auxiliries registry.
 */
var Registries;
(function (Registries) {
    Registries[Registries["All"] = 0] = "All";
    Registries[Registries["Auxiliaries"] = 1] = "Auxiliaries";
    Registries[Registries["Commands"] = 2] = "Commands";
    Registries[Registries["Events"] = 3] = "Events";
})(Registries || (exports.Registries = Registries = {}));
/**
 * Available methods for parsing and receiving updates from Telegram.
 *
 * @property Poll Default long polling method.
 * @property Webhook Instead of long polling, opens a webhook endpoint to receive updates.
 * @property UpdatePacket If you have your own method of receiving updates, you can manually send updates to the client instead.
 */
var Endpoint;
(function (Endpoint) {
    Endpoint[Endpoint["Poll"] = 0] = "Poll";
    Endpoint[Endpoint["Webhook"] = 1] = "Webhook";
    Endpoint[Endpoint["UpdatePacket"] = 2] = "UpdatePacket";
})(Endpoint || (exports.Endpoint = Endpoint = {}));
/**
 * Available registries for auxiliaries. The parameters are enclosed inside the codeblocks.
 *
 * @property Invoices Preload and store invoices for generation: `(client.invoices)`.
 */
var Auxiliaries;
(function (Auxiliaries) {
    Auxiliaries["Invoices"] = "invoices";
})(Auxiliaries || (exports.Auxiliaries = Auxiliaries = {}));
/**
 * Wether to cache partial datas even if it's not complete and to be fetched.
 *
 * @property Chat Cache partial chats.
 * @property Member Cache partial members.
 */
var PartialTypes;
(function (PartialTypes) {
    PartialTypes[PartialTypes["Chat"] = 0] = "Chat";
    PartialTypes[PartialTypes["Member"] = 1] = "Member";
})(PartialTypes || (exports.PartialTypes = PartialTypes = {}));
/**
 * The client will parse the corresponding object for you.
 *
 * @property UnhandledService The client will emit 'unhandled' for all events that has been ignored instead of a warning.
 * @property MessageService Parse message services that was sent by telegram e.g: NewChatMembers, ForumTopicCreated, SuccessfulPayment, etc.
 */
var Parseables;
(function (Parseables) {
    Parseables[Parseables["UnhandledService"] = 0] = "UnhandledService";
    Parseables[Parseables["MessageService"] = 1] = "MessageService";
})(Parseables || (exports.Parseables = Parseables = {}));
//# sourceMappingURL=Client.js.map