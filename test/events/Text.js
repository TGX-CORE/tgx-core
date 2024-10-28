const { Event, ClientEvent, MessagePayloadMethod, PaidMedia, Reactions, Emoji, File, FormDataBuilder, ReplyKeyboardRemove, KeyboardButton, PollOptions, ReplyKeyboardMarkup, ReplyButton, InlineKeyboardMarkup, ForceReply, InputPaidMediaBuilder, InputMedia } = require('tgx-core')
const { join } = require('path')

class Message extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.Text
        })
    }

    async run(message) {

        // await message.pin()
        // await message.unpin()

        await message.setReaction(new Reactions(Emoji.Emoji('👍')))

        // await message.replyText('Message received!')

        // await message.user.sendText('This is a test!')

        // await message.topic.sendText('This is a test!')

        // await message.reply(
        //     MessagePayloadMethod.PaidMedia, 
        //     {
        //         star_count: 1,
        //         media: new InputPaidMediaBuilder(PaidMedia.Photo('attach://field_residences'))
        //     },
        //     new FormDataBuilder().append('field_residences', join(__dirname, '../media/field_residences.png'), 'field_residences.png')
        // )

        // const collector = message.chat.createMessageCollector({ max: 1 })

        // collector.on('collect', (message) => {
        //     console.log('collected', message)
        // })

        // collector.once('end', (Collection, reason) => {
        //     console.log(Collection, reason)
        // })

        // await message.reply(
        //     MessagePayloadMethod.Photo ,
        //     {
        //         photo: 'attach://field_residences'
        //     },
        //     new FormDataBuilder().append('field_residences', join(__dirname, '../media/field_residences.png'), 'field_residences.png')
        // )

        let reply = await message.reply(
            MessagePayloadMethod.Photo,
            {
                photo: new File(join(__dirname, '../media/field_residences.png'))
            }
        )
        
        console.log(await reply.photo[1].download('./test/media/test.jpg'))
        
        // const reply = await message.reply(MessagePayloadMethod.Text, {
        //     text: 'This is a text.',
        //     // reply_markup: new ReplyKeyboardRemove(),

        //     // reply_markup: new ForceReply(),

        //     reply_markup: new InlineKeyboardMarkup()
        //         .addrow(KeyboardButton.CallbackData('Button 1', 'test'), KeyboardButton.CallbackData('Button 2', 'test 2'))
        //         .addrow(KeyboardButton.Url('Test', 'https://www.google.com')),

        //     // reply_markup: new ReplyKeyboardMarkup(false, false, true)
        //     //  .addRow(new ReplyButton.Text('Button 1'), new ReplyButton.Text('Button 2')),

        // })
        
        // const collector = reply.createCallbackCollector({ max: 1 })

        // collector.on('collect', (query) => {
        //     console.log('collected', query)
        // })

        // collector.once('end', (Collection, reason) => {
        //     console.log(Collection, reason)
        // })

        // await message.reply(MessagePayloadMethod.Poll, {
        //     question: 'test',
        //     options: new PollOptions()
        //         .add('Test Option 1')
        //         .add('Test Option 2'),
        //     is_anonymous: false
        // })

        // await message.replyText('Message received!')

        // AgACAgUAAxkDAAIDo2birhVDdqtZ6s3Oe0yVNrMRUo8SAAL3vzEbuH4ZV4wn9GoxzBvxAQADAgADbQADNgQ
        // attach://field_residences field_residences.png 
        
        // console.log(message.edited)

        //await message.chat.administrators())
        
        // message.forward(-4083238685)

        // await message.chat.fetch()
        
        // message.member.ban()

        // setTimeout(() => {
        //     message.discussion.members.unban(message.from.id)
        // }, 1000)

    }

}

module.exports = Message