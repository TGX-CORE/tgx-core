const { Event, InlineQueryResult, InlineQueryResults, InlineQueryResultButton, LabeledPrices, LabeledPrice, Input, InlinequeryResultButton, ClientEvent, QueryResult } = require('tgx-core')

class InlineQuery extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.InlineQuery
        })
    }

    async run(inlineQuery) {
        inlineQuery.answer(new InlineQueryResults(
            new QueryResult.Article({
                id: 'article-1',
                title: `Dynamic Article Result - ${inlineQuery.query}`,
                input_message_content: {
                    message_text: `Your query is ${inlineQuery.query}`,
                }
            }),
            new QueryResult.Article({
                id: 'poll',
                title: `Test Poll`,
                input_message_content: {
                    message_text: 'Poll request.'
                }
            }),
            new QueryResult.Article({
                id: 'invoice',
                title: 'Text Invoice',
                input_message_content: new Input.Invoice(this.client.invoices.generate('invoice_id_1'))
            }),
            new QueryResult.CachedPhoto({
                id: 'photo-result',
                title: 'Field Residences',
                photo_file_id: 'AgACAgUAAxkDAAIDo2birhVDdqtZ6s3Oe0yVNrMRUo8SAAL3vzEbuH4ZV4wn9GoxzBvxAQADAgADbQADNgQ'
            })
        ), new InlineQueryResultButton.Start('TGX-Core', 'start'))
    }

}

module.exports = InlineQuery