export interface BotCommand {
    command: string
    description: string
}

export interface CommandScope {
    type: CommandScopeType
    chat_id?: string|number
    user_id?: number
}

export enum CommandScopeType {
    Default = 'default',
    AllPrivateChats = 'all_private_chats',
    AllGroupChats = 'all_group_chats',
    AllChatAdministrators = 'all_chat_administrators',
    Chat = 'chat',
    ChatAdministrators = 'chat_administrators',
    ChatMember = 'chat_member'
}