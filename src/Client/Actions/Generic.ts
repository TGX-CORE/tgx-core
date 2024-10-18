import type { Message } from '../../Classes/Message'
import type { Client } from '../Client'

import { ClientEvent, MessageService } from '../../Types/ClientEvent'
import { PartialTypes, Parseables } from '../../Types/Client'
import { has } from '../../Internals/shared'

export class GenericAction {

    public client: Client
    public constructor(client: Client ){
        this.client = client
    }

    public handleMessage(packet: any): any {
        return packet
    }

    public handle(packet: any): any {
        return packet
    }

    protected emitMessage(event: ClientEvent|false, message: Message, emit: boolean = true): any[]|any {
        let bot = (message.user?.is_bot && this.client.options.poll?.ignore_bots) && (message.sender_chat && this.client.options.poll?.ignore_sender_chats)
        let client = (message.user?.id === this.client.me.id && this.client.options.poll?.ignore_self)

        if(!(bot||client) && emit) this.emit(ClientEvent.Message, message)

        for(let pointer in ( event ? { [event]: true } : message)){
            if(!Object.values(ClientEvent).includes(pointer as ClientEvent)) continue
            if(this.client.actions[pointer]){
                this.client.actions[pointer].handleMessage(message)
            } else {
                let service = Object.values(MessageService).includes(pointer as MessageService)
                if(service ? true : !client||!bot && emit){
                    this.emit(pointer as ClientEvent, message)
                }
            }
        }
        
        return message
    }

    protected emit(event: ClientEvent, ...parameters: any[]): any[]|any {
        if(!this.client.listeners(event).length){
            if(has(this.client.options.parseables, Parseables.UnhandledService)) this.emit(ClientEvent.Unhandled, ...parameters)
            else this.client.logger.warn(`A "${event}" event has been received; it has been ignored since there are no listeners.`)
        } else this.client.emit(event, ...parameters)
        return parameters.length === 1 ? parameters[0] : parameters
    }

    public prepack(packet: any){
        let current = packet.user ?? packet.from ?? packet.source
        let user = this.client.users.cache.get(current.id)
        let chat = false, partial

        if(user){
            user._patch(current)
        } else {
            this.client.users._add(current, true)
        }

        if( packet.source ){
            packet._source = current.id
            delete packet.source
        }

        if( packet.user ){
            packet._user = current.id
            delete packet.user
        }

        if( packet.from ){
            packet._from = current.id
            delete packet.from
        }

        if( packet.chat ){
            let _partial = this.partials.chat(packet.chat)
            packet._chat = packet.chat.id

            chat = true
            partial = _partial

            delete packet.chat
        }

        if( packet.voter_chat ){
            this.partials.chat(packet.voter_chat)

            packet._voter_chat = packet.voter_chat.id
            delete packet.voter_chat
        } 

        if( packet.sender_chat ){
            this.partials.chat(packet.sender_chat)

            packet._sender_chat = packet.sender_chat.id
            delete packet.sender_chat
        }

        if( packet.message ){
            packet._message = packet.message.id
            packet._message_chat = packet.message.chat.id
            delete packet.message
        }

        return chat ?
          [partial, packet]
        : false
    }

    public get partials(){
        return {
            chat: (packet: any): any => {
                return this.payload(packet, this.client.chats, packet.id, PartialTypes.Chat)
            },
            member: (packet: any, chat_id: any): any => {
                return this.payload(packet, this.client.chats.cache.get(chat_id)!.members, packet.id, PartialTypes.Member)
            }
        }
    }

    public parsable(parseable: Parseables): boolean {
        return this.client.options.parseables?.some(( value: Parseables ): boolean => value === parseable ) ?? false
    }

    public payload(packet: any, manager: any, id: any, partial_type: PartialTypes, optionals?: any): any {
        return manager._add(packet, this.client.options.partials?.some((partial: any ) => partial === partial_type), { id, ...optionals })
    }
    
}