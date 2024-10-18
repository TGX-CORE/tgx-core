const { Command, CommandScopeType } = require('tgx-core')

class TestChats extends Command {

    constructor(context, metadata){
        super(context, {
            ...metadata,
            name: 'testchats',
            description: 'This is a text command!',
            scope: CommandScopeType.Chat,
            chat_ids: [-4554623391]
        })
    }

    run(message){
        message.replyText('Command received!')
    }

}

module.exports = TestChats