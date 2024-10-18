const { Event, ClientEvent } = require('tgx-core')

class ChatJoinRequest extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.ChatJoinRequest
        })
    }

    async run(request) {
        
    }

}

module.exports = ChatJoinRequest