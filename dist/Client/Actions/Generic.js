"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericAction = void 0;
const ClientEvent_1 = require("../../Types/ClientEvent");
const Client_1 = require("../../Types/Client");
const shared_1 = require("../../Internals/shared");
class GenericAction {
    constructor(client) {
        this.client = client;
    }
    handleMessage(packet) {
        return packet;
    }
    handle(packet) {
        return packet;
    }
    emitMessage(event, message, emit = true) {
        let bot = (message.user?.is_bot && this.client.options.poll?.ignore_bots) && (message.sender_chat && this.client.options.poll?.ignore_sender_chats);
        let client = (message.user?.id === this.client.me.id && this.client.options.poll?.ignore_self);
        if (!(bot || client) && emit)
            this.emit(ClientEvent_1.ClientEvent.Message, message);
        for (let pointer in (event ? { [event]: true } : message)) {
            if (!Object.values(ClientEvent_1.ClientEvent).includes(pointer))
                continue;
            if (this.client.actions[pointer]) {
                this.client.actions[pointer].handleMessage(message);
            }
            else {
                let service = Object.values(ClientEvent_1.MessageService).includes(pointer);
                if (service ? true : !client || !bot && emit) {
                    this.emit(pointer, message);
                }
            }
        }
        return message;
    }
    emit(event, ...parameters) {
        if (!this.client.listeners(event).length) {
            if ((0, shared_1.has)(this.client.options.parseables, Client_1.Parseables.UnhandledService))
                this.emit(ClientEvent_1.ClientEvent.Unhandled, ...parameters);
            else
                this.client.logger.warn(`A "${event}" event has been received; it has been ignored since there are no listeners.`);
        }
        else
            this.client.emit(event, ...parameters);
        return parameters.length === 1 ? parameters[0] : parameters;
    }
    prepack(packet) {
        let current = packet.user ?? packet.from ?? packet.source;
        let user = this.client.users.cache.get(current.id);
        let chat = false, partial;
        if (user) {
            user._patch(current);
        }
        else {
            this.client.users._add(current, true);
        }
        if (packet.source) {
            packet._source = current.id;
            delete packet.source;
        }
        if (packet.user) {
            packet._user = current.id;
            delete packet.user;
        }
        if (packet.from) {
            packet._from = current.id;
            delete packet.from;
        }
        if (packet.chat) {
            let _partial = this.partials.chat(packet.chat);
            packet._chat = packet.chat.id;
            chat = true;
            partial = _partial;
            delete packet.chat;
        }
        if (packet.voter_chat) {
            this.partials.chat(packet.voter_chat);
            packet._voter_chat = packet.voter_chat.id;
            delete packet.voter_chat;
        }
        if (packet.sender_chat) {
            this.partials.chat(packet.sender_chat);
            packet._sender_chat = packet.sender_chat.id;
            delete packet.sender_chat;
        }
        if (packet.message) {
            packet._message = packet.message.id;
            packet._message_chat = packet.message.chat.id;
            delete packet.message;
        }
        return chat ?
            [partial, packet]
            : false;
    }
    get partials() {
        return {
            chat: (packet) => {
                return this.payload(packet, this.client.chats, packet.id, Client_1.PartialTypes.Chat);
            },
            member: (packet, chat_id) => {
                return this.payload(packet, this.client.chats.cache.get(chat_id).members, packet.id, Client_1.PartialTypes.Member);
            }
        };
    }
    parsable(parseable) {
        return this.client.options.parseables?.some((value) => value === parseable) ?? false;
    }
    payload(packet, manager, id, partial_type, optionals) {
        return manager._add(packet, this.client.options.partials?.some((partial) => partial === partial_type), { id, ...optionals });
    }
}
exports.GenericAction = GenericAction;
//# sourceMappingURL=Generic.js.map