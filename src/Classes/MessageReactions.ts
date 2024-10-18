import type { MessageReaction } from './MessageReaction'
import type { Client } from '../Client/Client'

export class MessageReactions {

    public client: Client
    public records: { [key: string]: MessageReaction[] } = { }
    public count_records: { [key: string]: number } = { }

    public constructor(client: Client){
        this.client = client
    }

    public add(reaction: MessageReaction): void {
        const resolved: string = this.client.actions.message_reaction.resolve(reaction)
        this.records[resolved] ??= [ ]
        this.records[resolved].push(reaction)
    }

    public remove(reaction: string, sender_id: number): void {
        const index = this.records[reaction]?.findIndex((reaction) => reaction.id === sender_id) ?? -1
        if(index !== -1) this.records[reaction]?.splice(index, 1)
    }

    public count(reaction: string){
        return this.count_records[reaction] ?? 0
    }

    public has(reaction: string, sender_id: number): MessageReaction|boolean {
        return this.records[reaction]?.find((reaction) => reaction.id === sender_id) ?? false
    }

}