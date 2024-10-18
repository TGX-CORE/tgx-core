const { Event, ClientEvent } = require('tgx-core')

class Raw extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.Raw,
        })
    }

    async run(pointer, packet) {
        console.log('raw-' + pointer, packet)
    }

}
  
module.exports = Raw