"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsManager = exports.ClientAction = void 0;
const shared_1 = require("../../Internals/shared");
const BaseManager_1 = require("./BaseManager");
var ClientAction;
(function (ClientAction) {
    ClientAction["All"] = "all";
    ClientAction[ClientAction["EditedBusinessMessage"] = require('../Actions/EditedBusinessMessage').EditedBusinessMessageAction] = "EditedBusinessMessage";
    ClientAction[ClientAction["ForumTopicEdited"] = require('../Actions/Message/ForumTopicsEdited').ForumTopicEdited] = "ForumTopicEdited";
    ClientAction[ClientAction["ForumTopicCreated"] = require('../Actions/Message/ForumTopicCreated').ForumTopicCreatedAction] = "ForumTopicCreated";
    ClientAction[ClientAction["ForumTopicReopened"] = require('../Actions/Message/ForumTopicsReopened').ForumTopicReopened] = "ForumTopicReopened";
    ClientAction[ClientAction["ForumTopicClosed"] = require('../Actions/Message/ForumTopicClosed').ForumTopicClosedAction] = "ForumTopicClosed";
    ClientAction[ClientAction["SuccessfulPayment"] = require('../Actions/Message/SuccessfulPayment').SuccessfulPaymenAction] = "SuccessfulPayment";
    ClientAction[ClientAction["MessageReactionCount"] = require('../Actions/MessageReactionCount').MessageReactionCountAction] = "MessageReactionCount";
    ClientAction[ClientAction["ChosenInlineResult"] = require('../Actions/ChosenInlineResult').ChosenInlineresultAction] = "ChosenInlineResult";
    ClientAction[ClientAction["ChatMemberUpdate"] = require('../Actions/ChatMemberUpdated').ChatMemeberUpdateAction] = "ChatMemberUpdate";
    ClientAction[ClientAction["PreCheckoutQuery"] = require('../Actions/PreCheckoutQuery').PreCheckoutQueryAction] = "PreCheckoutQuery";
    ClientAction[ClientAction["ChatBoostRemoved"] = require('../Actions/ChatBoostRemoved').ChatBoostRemovedAction] = "ChatBoostRemoved";
    ClientAction[ClientAction["BusinessMessage"] = require('../Actions/BusinessMessage').BusinessMessageAction] = "BusinessMessage";
    ClientAction[ClientAction["MessageReaction"] = require('../Actions/MessageReaction').MessageReactionAction] = "MessageReaction";
    ClientAction[ClientAction["ChatJoinRequest"] = require('../Actions/ChatJoinRequest').ChatJoinRequestAction] = "ChatJoinRequest";
    ClientAction[ClientAction["ShippingQuery"] = require('../Actions/ShippingQuery').ShippingQueryAction] = "ShippingQuery";
    ClientAction[ClientAction["EditedMessage"] = require('../Actions/EditedMessage').EditedMessageAction] = "EditedMessage";
    ClientAction[ClientAction["CallbackQuery"] = require('../Actions/CallbackQuery').CallbackQueryAction] = "CallbackQuery";
    ClientAction[ClientAction["InlineQuery"] = require('../Actions/InlineQuery').InlineQueryAction] = "InlineQuery";
    ClientAction[ClientAction["PollAnswer"] = require('../Actions/PollAnswer').PollAnswerAction] = "PollAnswer";
    ClientAction[ClientAction["ChatBoost"] = require('../Actions/ChatBoost').ChatBoostAction] = "ChatBoost";
    ClientAction[ClientAction["Message"] = require('../Actions/Message').MessageAction] = "Message";
    ClientAction[ClientAction["Poll"] = require('../Actions/Poll').PollAction] = "Poll";
})(ClientAction || (exports.ClientAction = ClientAction = {}));
class ActionsManager extends BaseManager_1.BaseManager {
    constructor(client) {
        super(client, 'actions', {
            load: ClientAction.All
        });
        if (this.options.load === ClientAction.All) {
            for (let action of Object.values(ClientAction)) {
                if (action === ClientAction.All || !(0, shared_1.isClass)(action))
                    continue;
                this.register(action);
            }
        }
        else if (Array.isArray(this.options.load)) {
            for (let action of this.options.load) {
                if (action === ClientAction.All || !(0, shared_1.isClass)(action))
                    continue;
                this.register(action);
            }
        }
    }
    register(context_piece) {
        this[(context_piece.pointer ?? context_piece.name.replace(/Action$/, '').toLowerCase())] = new context_piece(this.client);
    }
}
exports.ActionsManager = ActionsManager;
//# sourceMappingURL=ActionsManager.js.map