import type { BotCommand, CommandScopeType } from '../../Types/Command'

import { BaseManager } from './BaseManager'

export interface CommandsPayload {
    commands: string
    scope?: string
    language_code?: string
}

export class CommandsManager extends BaseManager {

    public async set(payload: CommandsPayload): Promise<boolean> {
        return this.client.api.setMyCommands(null, {
            params: payload,
            returnOk: true
        })

    }

    public async get(scope?: CommandScopeType, language_code?: string): Promise<BotCommand[]|boolean> {
        return this.client.api.getMyCommands(null, {
            params: { scope, language_code },
            lean: true,
            result: true
        })
    }

    public async delete(scope?: CommandScopeType, language_code?: string): Promise<boolean> {
        return this.client.api.deleteMyCommands(null, {
            params: { scope, language_code },
            lean: true,
            result: true
        })
    }

}