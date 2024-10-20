"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIManager = void 0;
const Builder_1 = require("../../Builders/Builder");
const shared_1 = require("../../Internals/shared");
const BaseManager_1 = require("./BaseManager");
const axios_1 = __importDefault(require("axios"));
const node_https_1 = __importDefault(require("node:https"));
const node_http_1 = __importDefault(require("node:http"));
class APIManager extends BaseManager_1.BaseManager {
    constructor(client) {
        super(client, 'api', {
            base: 'https://api.telegram.org',
            files: 'https://api.telegram.org/file'
        });
        this.acknowledge('setWebhook');
        this.acknowledge('deleteWebhook');
        this.acknowledge('getWebhookInfo');
        this.acknowledge('getFile');
        this.acknowledge('getChat');
        this.acknowledge('getChatMember');
        this.acknowledge('getChatMemberCount');
        this.acknowledge('getUpdates');
        this.acknowledge('getUserChatBoosts');
        this.acknowledge('getMe');
        this.acknowledge('getMyName');
        this.acknowledge('getMyDescription');
        this.acknowledge('getMyShortDescription');
        this.acknowledge('getBusinessConnection');
        this.acknowledge('setMyName');
        this.acknowledge('setMyDescription');
        this.acknowledge('setMyShortDescription');
        this.acknowledge('sendAction');
        this.acknowledge('sendAnimation');
        this.acknowledge('sendAudio');
        this.acknowledge('sendChatAction');
        this.acknowledge('sendContact');
        this.acknowledge('sendDocument');
        this.acknowledge('sendDice');
        this.acknowledge('sendInvoice');
        this.acknowledge('sendLocation');
        this.acknowledge('sendMediaGroup');
        this.acknowledge('sendMessage');
        this.acknowledge('sendMessageReaction');
        this.acknowledge('sendPaidMedia');
        this.acknowledge('sendPhoto');
        this.acknowledge('sendPoll');
        this.acknowledge('sendVideo');
        this.acknowledge('sendVideoNote');
        this.acknowledge('sendVoice');
        this.acknowledge('sendVenue');
        this.acknowledge('stopPoll');
        this.acknowledge('getUserProfilePhotos');
        this.acknowledge('answerInlineQuery');
        this.acknowledge('answerPreCheckoutQuery');
        this.acknowledge('answerShippingQuery');
        this.acknowledge('setChatMenuButton');
        this.acknowledge('getChatMenuButton');
        this.acknowledge('banChatMember');
        this.acknowledge('promoteChatMember');
        this.acknowledge('unbanChatMember');
        this.acknowledge('restrictChatMember');
        this.acknowledge('copyMessages');
        this.acknowledge('pinChatMessage');
        this.acknowledge('forwardMessages');
        this.acknowledge('unpinChatMessage');
        this.acknowledge('unpinAllChatMessages');
        this.acknowledge('deleteMessage');
        this.acknowledge('deleteMessages');
        this.acknowledge('editMessageText');
        this.acknowledge('editMessageCaption');
        this.acknowledge('editMessageMedia');
        this.acknowledge('editMessageLiveLocation');
        this.acknowledge('stopMessageLiveLocation');
        this.acknowledge('editMessageReplyMarkup');
        this.acknowledge('setMessageReaction');
        this.acknowledge('leaveChat');
        this.acknowledge('setChatTitle');
        this.acknowledge('setChatPhoto');
        this.acknowledge('deleteChatPhoto');
        this.acknowledge('setChatDescription');
        this.acknowledge('getChatAdministrators');
        this.acknowledge('setChatAdministratorCustomTitle');
        this.acknowledge('setMyDefaultAdministratorRights');
        this.acknowledge('getMyDefaultAdministratorRights');
        this.acknowledge('approveChatJoinRequest');
        this.acknowledge('declineChatJoinRequest');
        this.acknowledge('deleteMyCommands');
        this.acknowledge('getMyCommands');
        this.acknowledge('setMyCommands');
        this.acknowledge('createForumTopic');
        this.acknowledge('closeForumTopic');
        this.acknowledge('deleteForumTopic');
        this.acknowledge('editForumTopic');
        this.acknowledge('reopenForumTopic');
        this.acknowledge('unpinAllForumTopicMessages');
        this.acknowledge('editGeneralForumTopic');
        this.acknowledge('closeGeneralForumTopic');
        this.acknowledge('reopenGeneralForumTopic');
        this.acknowledge('hideGeneralForumTopic');
        this.acknowledge('unhideGeneralForumTopic');
        this.acknowledge('unpinAllGeneralForumTopicMessages');
        this.acknowledge('refundStarPayment');
        this.acknowledge('createInvoiceLink');
        this.acknowledge('exportChatInviteLink');
        this.acknowledge('createChatInviteLink');
        this.acknowledge('editChatInviteLink');
        this.acknowledge('createChatSubscriptionInviteLink');
        this.acknowledge('editChatSubscriptionInviteLink');
        this.acknowledge('revokeChatInviteLink');
        this.acknowledge('setChatStickerSet');
        this.acknowledge('deleteChatStickerSet');
        this.axios = axios_1.default.create({
            httpsAgent: new node_https_1.default.Agent({
                keepAlive: true,
                timeout: 10000,
                scheduling: 'fifo'
            }),
            httpAgent: new node_http_1.default.Agent({
                keepAlive: true,
                timeout: 10000,
                scheduling: 'fifo'
            })
        });
    }
    acknowledge(method) {
        this[method] = async function (...argumants) {
            return this.request(this.generate(method), 'post', ...argumants);
        };
    }
    generate(method) {
        return [this.options.base, this.token, method]
            .map((sequence, index) => [0].includes(index) ? sequence : '/' + sequence)
            .join('');
    }
    async request(URL, method, ...argumants) {
        return new Promise((resolve) => {
            argumants[1] = (0, shared_1.defaults)({
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            }, (0, shared_1.nest)(argumants[1], { array: true }, (type, key, value) => {
                if (value instanceof Builder_1.Builder) {
                    return value.parse();
                }
                return value;
            }));
            this.axios[method](URL, ...argumants)
                .then((response) => {
                const options = argumants[1];
                if (options.returnOk)
                    return resolve(response.data.ok);
                if (options.lean) {
                    options.result ?
                        resolve(response.data.result)
                        : resolve(response.data);
                }
                resolve(response);
            })
                .catch((error) => {
                this.client.logger.error(`[API MANAGER - ${error.response?.statusText ?? error.code ?? '0000'}] An internal api error was encountered:`, '\n', `(${error.response?.data?.error_code ?? error.code ?? 'unknown'}) ${error.response?.data?.description ?? error.cause ?? 'No descrption was provided.'}`);
                resolve(false);
            });
        });
    }
    setToken(token) {
        this._token = token;
    }
    get token() {
        return `bot` + this._token;
    }
}
exports.APIManager = APIManager;
//# sourceMappingURL=ApiManager.js.map