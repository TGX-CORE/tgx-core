const { Command, CommandScopeType } = require('tgx-core')

class TestMembers extends Command {

    constructor(context, metadata){
        super(context, {
            ...metadata,
            name: 'testusers',
            description: 'This is a text command!',
            scope: CommandScopeType.ChatMember,
            chat_groups: {
                [-1002171986662]: [6015120845]
            }
        })
    }

    run(message){
        message.replyText('Command received!')
    }

}

module.exports = TestMembers