const { Event, ClientEvent } = require('tgx-core')

class ForumTopicCreated extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.ForumTopicCreated
        })
    }

    async run(forum) {
        console.log('forum-', forum)
    }

}

module.exports = ForumTopicCreated