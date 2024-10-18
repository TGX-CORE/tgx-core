const { Event, ClientEvent } = require('tgx-core')

class SuccessfulPayment extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.SuccessfulPayment
        })
    }

    async run(payment) {
        console.log(payment)
    }

}

module.exports = SuccessfulPayment