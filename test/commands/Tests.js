const { Command } = require('tgx-core')

class Test extends Command {

    constructor(context, metadata){
        super(context, {
            ...metadata,
            name: 'test',
            language_code: {
                'undefined': {
                    command: 'test',
                    description: 'This is a text command!'
                }
            }
        })
    }

    run(message){
        message.replyText('Command received!')
    }

}

module.exports = Test