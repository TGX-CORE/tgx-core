const { Event, ClientEvent } = require('tgx-core')

class Ready extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.Ready,
            once: true
        })
    }

    async run(client) {

        // console.log(client.extensions.get('Registries'))

        // client.me.setName('TGX-CORE')

        // client.me.setDescription('You limit is your imagination, powered by the most powerful tgx-core liblary to interact with the Telegram API.')
        
        // client.me.setShortDescription('Powered by the most powerful tgx-core liblary.')

    }

}

module.exports = Ready