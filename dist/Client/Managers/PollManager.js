"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollManager = exports.AllowedUpdates = void 0;
const AllowedOptions_1 = require("../../Builders/AllowedOptions");
const BaseManager_1 = require("./BaseManager");
const ClientEvent_1 = require("../../Types/ClientEvent");
var AllowedUpdates;
(function (AllowedUpdates) {
    AllowedUpdates["All"] = "all";
    AllowedUpdates["Poll"] = "poll";
    AllowedUpdates["PollAnswer"] = "poll_answer";
    AllowedUpdates["Message"] = "message";
    AllowedUpdates["EditedMessage"] = "edited_message";
    AllowedUpdates["ChatMember"] = "chat_member";
    AllowedUpdates["ChatJoinRequest"] = "chat_join_request";
    AllowedUpdates["InlineQuery"] = "inline_query";
    AllowedUpdates["CallbackQuery"] = "callback_query";
    AllowedUpdates["ChosenInlineResult"] = "chosen_inline_result";
    AllowedUpdates["ChannelPost"] = "channel_post";
    AllowedUpdates["EditedChannelPost"] = "edited_channel_post";
    AllowedUpdates["MessageReaction"] = "message_reaction";
    AllowedUpdates["MessageReactionCount"] = "message_reaction_count";
})(AllowedUpdates || (exports.AllowedUpdates = AllowedUpdates = {}));
class PollManager extends BaseManager_1.BaseManager {
    constructor(client) {
        super(client, 'poll', {
            limit: 100,
            timeout: 0,
            delay: 5,
            allowed_updates: new AllowedOptions_1.AllowedUpdatesOptions(AllowedUpdates.Message),
            ignore_self: true,
            ignore_bots: true,
            ignore_sender_chats: false
        });
        this.active = false;
    }
    /**
     * Enable or disable the poll manager.
     */
    switch() {
        this.active = !this.active;
        clearTimeout(this.interluder);
    }
    /**
     * Handles an incoming update packet from Telegram.
     *
     * @param update The packet response from Telegram.
     */
    handle(update) {
        if (Array.isArray(update)) {
            for (let data of update) {
                this.handle(data);
            }
        }
        else {
            for (let pointer in update) {
                this.offset = update.update_id;
                if (!Object.values(ClientEvent_1.ClientEvent).includes(pointer))
                    continue;
                this.client.emit(ClientEvent_1.ClientEvent.Raw, pointer, update[pointer]);
                if (this.client.actions[pointer])
                    this.client.actions[pointer].handle(update[pointer]);
                else
                    this.client.emit(ClientEvent_1.ClientEvent.Unhandled, update);
            }
        }
    }
    async initialize() {
        this.client.logger.debug('Client is ready, PollManager is preparing to start.');
        this.active = true;
        this.interlude();
    }
    async interlude() {
        var message = await this.poll();
        if (message)
            this.handle(message);
        this.interluder = setTimeout(() => {
            this.active ?
                this.interlude()
                : null;
        }, this.options.delay * 1000);
    }
    async poll() {
        var { limit, allowed_updates, timeout } = this.options, { offset } = this;
        return this.client.api.getUpdates(null, {
            params: {
                limit, allowed_updates, timeout, offset
            },
            lean: true,
            result: true
        });
    }
}
exports.PollManager = PollManager;
//# sourceMappingURL=PollManager.js.map