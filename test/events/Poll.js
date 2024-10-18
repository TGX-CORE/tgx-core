const { Event, ClientEvent } = require('tgx-core')

class raw extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.Poll,
        })
    }

    async run(poll) {
        console.log(poll)
    }

}
  
module.exports = raw