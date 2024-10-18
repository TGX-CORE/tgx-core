const { Event, ClientEvent } = require('tgx-core')

class ChosenInlineQuery extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.ChosenInlineResult
        })
    }

    async run(chosenInline) {
        
    }

}

module.exports = ChosenInlineQuery