import type { SuperGroupChat } from '../../Classes/SuperGroupChat';
import { ForumTopic } from '../../Classes/ForumTopic';
import { CachedManager } from './CachedManager';
export declare class TopicsManager extends CachedManager<number, ForumTopic> {
    readonly chat: SuperGroupChat;
    constructor(chat: SuperGroupChat);
    create(name: string, icon_color?: number, icon_custom_emoji_id?: string): Promise<ForumTopic | boolean>;
    edit(message_thread_id: number, name?: string, icon_custom_emoji_id?: string): Promise<boolean>;
    editGeneral(name: string): Promise<boolean>;
    close(message_thread_id: number): Promise<boolean>;
    closeGeneral(): Promise<boolean>;
    reopen(message_thread_id: number): Promise<boolean>;
    reopenGeneral(): Promise<boolean>;
    hideGeneral(): Promise<boolean>;
    unhideGeneral(): Promise<boolean>;
    delete(message_thread_id: number): Promise<boolean>;
    unpinAll(message_thread_id: number): Promise<boolean>;
    unpinAllGeneral(): Promise<boolean>;
}
