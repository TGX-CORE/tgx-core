import { BaseClass } from './BaseClass';
import { Client } from '../Client/Client';
import { UserProfilePhotos } from 'src/Types/User';
export interface ChatBoost {
    boost_id: string;
    add_date: number;
    expiration_date: number;
    source: any;
}
export interface User {
    id: number;
    is_bot?: boolean;
    username?: string;
    first_name?: string;
    last_name?: string;
    language_code?: string;
    is_premium?: boolean;
    has_main_web_app?: boolean;
    can_connect_to_business?: boolean;
    added_to_attachment_menu?: boolean;
    can_read_all_group_messages?: boolean;
    supports_inline_queries?: boolean;
}
export declare class User extends BaseClass<User> {
    constructor(client: Client, packet: User);
    boosts(chat_id: number): Promise<Array<ChatBoost> | boolean>;
    getProfilePhotos(offset?: number, limit?: number): Promise<UserProfilePhotos>;
}
//# sourceMappingURL=User.d.ts.map