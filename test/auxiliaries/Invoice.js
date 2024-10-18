const { Auxiliary, Auxiliaries, LabeledPrices } = require('tgx-core')

class Invoices extends Auxiliary {

    constructor(context_piece, context_metadata){
        super(context_piece, {
            ...context_metadata,
            name: Auxiliaries.Invoices
        })
    }

    load(invoices){

        invoices.create('invoice_id_1', {
            payload: 'invoice_id_1',
            title: 'Test Product',
            description: 'This is a test product for sending invoices.',
            currency: 'USD',
            prices: new LabeledPrices()
                .add('Price', '1480') // $14.80
        })
        
    }

}

module.exports = Invoices