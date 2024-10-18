const { Event, ClientEvent } = require('tgx-core')

class CallbackQuery extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.CallbackQuery
        })
    }

    async run(callbackQuery) {
        callbackQuery.message.replyText('hey')
    }

}

module.exports = CallbackQuery