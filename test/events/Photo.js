const { Event, ClientEvent } = require('tgx-core')

class Photo extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.Photo,
        })
    }

    run(message) {
        message.replyMessage('Photo received!')
    }

}

module.exports = Photo