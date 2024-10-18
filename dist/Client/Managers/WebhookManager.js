"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookManager = void 0;
const BaseManager_1 = require("./BaseManager");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
class WebhookManager extends BaseManager_1.BaseManager {
    constructor(client) {
        super(client, 'webhook', {
            port: Math.floor(Math.random() * (WebhookManager.max - WebhookManager.min + 1)) + WebhookManager.min,
            endpoint: '/webhook',
            update: true
        });
        this.express = (0, express_1.default)();
        this.express.use(body_parser_1.default.json());
    }
    /**
     * Gets the webhook information from Telegram.
     */
    async get() {
        return this.client.api.getWebhookInfo(null, { lean: true, result: true });
    }
    /**
     * Deletes the webhook from Telegram.
     *
     * @param drop_pending_updates Pass True to drop all pending updates
     */
    async delete(drop_pending_updates) {
        return this.client.api.deleteWebhook(null, { params: { drop_pending_updates }, returnOk: true });
    }
    /**
     * Updates the webhook on the Telegram api.
     *
     * The following values are taken from options: drop_pending_updates, secret_token, max_connections, ip_address, certificate.
     */
    async set(options = this.options) {
        const { drop_pending_updates, secret_token, max_connections, ip_address, certificate } = options;
        return this.client.api.setWebhook(null, {
            params: {
                url: this.endpoint, max_connections, ip_address,
                allowed_updates: this.client.options.poll?.allowed_updates,
                drop_pending_updates, secret_token, certificate
            },
            returnOk: true
        });
    }
    async intialize() {
        this.client.logger.debug('Webhook manager is preparing to start.');
        this.express.get(this.options.endpoint, (req, res) => {
            res.sendStatus(200);
        });
        this.express.post(this.options.endpoint, (req, res) => {
            this.client.poll.handle(req.body);
            res.sendStatus(200);
        });
        this.express.listen(this.options.port, async () => {
            if (this.options.update) {
                let success;
                if (success = await this.set()) {
                    this.client.logger.debug(`Webhook has been updated on the Telegram API.`);
                }
                else {
                    this.client.logger.error(`There was an error encountered when updating the webhook.`);
                }
            }
            this.client.logger.debug(`Webhook manager is ready, running on port ${this.options.port}`);
        });
    }
    /**
     * Gets the full endpoint.
     */
    get endpoint() {
        return `${this.options.url}${this.options.endpoint}`;
    }
}
exports.WebhookManager = WebhookManager;
WebhookManager.min = 1024;
WebhookManager.max = 65535;
//# sourceMappingURL=WebhookManager.js.map