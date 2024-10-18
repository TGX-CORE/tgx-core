import type { BusinessConnection } from '../../Types/BusinessConnection';
import type { ChatAdministratorRights } from '../../Types/ReplyMarkups';
import type { ChatMenuButton } from '../../Types/MenuButton';
import type { User } from '../../Classes/User';
import type { Client } from '../Client';
import { BaseClass } from '../../Classes/BaseClass';
export declare class MeManager extends BaseClass<MeManager, User> {
    id?: number;
    is_bot?: boolean;
    first_name?: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    added_to_attachment_menu?: boolean;
    can_join_groups?: boolean;
    can_read_all_group_messages?: boolean;
    supports_inline_queries?: boolean;
    can_connect_to_business?: boolean;
    has_main_web_app?: boolean;
    name?: string;
    description?: string;
    short_description?: string;
    adminsitrator_rights: {
        channels?: ChatAdministratorRights;
        default?: ChatAdministratorRights;
    };
    constructor(client: Client);
    update(): Promise<boolean>;
    setName(name: string, language_code?: string): Promise<boolean>;
    setDescription(description: string, language_code?: string): Promise<boolean>;
    setShortDescription(short_description: string, language_code?: string): Promise<boolean>;
    setMenuButton(chat_id?: number, menu_button?: ChatMenuButton): Promise<boolean>;
    getBusinessConnection(business_connection_id: string): Promise<BusinessConnection>;
    getMenuButton(chat_id?: number): Promise<ChatMenuButton>;
    setMyDefaultAdministratorRights(rights: ChatAdministratorRights, for_channels: boolean): Promise<boolean>;
}
//# sourceMappingURL=MeManager.d.ts.map