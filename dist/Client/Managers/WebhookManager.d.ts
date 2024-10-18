import type { Client } from '../Client';
import { BaseManager } from './BaseManager';
import { AllowedUpdates } from './PollManager';
import { File } from '../../Classes/File';
/**
 * @property url Must be set with your current host, e.g: https://example.com -> https://example.com/webhook
 * @property endpoint The endpoint of the path the client will listen in e.g: /webhook -> https://example.com/webhook
 * @property port Set the port, it is randomized if empty, min 1024, max 65535.
 * @property certificate Set the relative path to the file to set as your public key certificate.
 *
 * @reference https://core.telegram.org/bots/api#setwebhook
 */
export interface WebhookManagerOptions {
    url?: string;
    endpoint?: string;
    port?: number;
    update?: boolean;
    secret_token?: string;
    ip_address?: string;
    drop_pending_updates?: boolean;
    max_connections?: number;
    certificate?: string | File;
}
/**
 * The information about a webhook.
 *
 * @reference https://core.telegram.org/bots/api#webhookinfo
 */
export interface WebhookInfo {
    url: string;
    has_custom_certificate: boolean;
    pending_update_count: number;
    ip_address?: string;
    last_error_date?: number;
    last_error_message?: string;
    last_synchronization_error_date?: number;
    max_connections?: number;
    allowed_updates?: AllowedUpdates[];
}
export declare class WebhookManager extends BaseManager<WebhookManagerOptions> {
    express: any;
    static min: number;
    static max: number;
    constructor(client: Client);
    /**
     * Gets the webhook information from Telegram.
     */
    get(): Promise<WebhookInfo | boolean>;
    /**
     * Deletes the webhook from Telegram.
     *
     * @param drop_pending_updates Pass True to drop all pending updates
     */
    delete(drop_pending_updates?: boolean): Promise<boolean>;
    /**
     * Updates the webhook on the Telegram api.
     *
     * The following values are taken from options: drop_pending_updates, secret_token, max_connections, ip_address, certificate.
     */
    set(options?: WebhookManagerOptions): Promise<boolean>;
    intialize(): Promise<void>;
    /**
     * Gets the full endpoint.
     */
    get endpoint(): string;
}
