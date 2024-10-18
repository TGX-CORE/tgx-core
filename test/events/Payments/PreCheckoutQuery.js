const { Event, ClientEvent } = require('tgx-core')

class PreCheckoutQuery extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.PreCheckoutQuery
        })
    }

    async run(precheckout) {
        precheckout.ok()
    }

}

module.exports = PreCheckoutQuery