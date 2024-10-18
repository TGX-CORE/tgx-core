import type { Message } from '../../../Classes/Message'
import { ClientEvent } from '../../../Types/ClientEvent'

import { GenericAction } from '../Generic'

export class NewChatMembersAction extends GenericAction {

    public static pointer: ClientEvent = ClientEvent.NewChatMembers

    public handleMessage(message: Message){
        let packed: any[] = this.prepack(message) as any[]

        if(packed[0]){
            let { new_chat_members } = packed[1]
            for(let member of new_chat_members){
                this.client.users._add(member)

                member = this.partials.member({
                    id: member.id,
                    user: member
                }, packed[0].id)

                this.emit(NewChatMembersAction.pointer, member)
            }
        }
    }

}