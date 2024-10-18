const { Command } = require('tgx-core')

class Test extends Command {

    constructor(context, metadata){
        super(context, {
            ...metadata,
            name: 'test',
            description: 'This is a text command!'
        })
    }

    run(message){
        message.replyText('Command received!')
    }

}

module.exports = Test