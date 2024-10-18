const { Event, ClientEvent } = require('tgx-core')

class PinnedMessage extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.PinnedMessage
        })
    }

    async run(message) {
        
    }

}

module.exports = PinnedMessage