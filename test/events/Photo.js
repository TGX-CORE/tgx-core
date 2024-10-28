const { Event, ClientEvent } = require('tgx-core')

class Photo extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.Photo,
        })
    }

    run(message) {
        message.replyText('Photo received!')
    }

}

module.exports = Photo