const { Auxiliary, Auxiliaries, Invoice } = require('tgx-core')

class Invoices extends Auxiliary {

    constructor(context_piece, context_metadata){
        super(context_piece, {
            ...context_metadata,
            name: Auxiliaries.Invoices
        })
    }

    load(invoices){

        invoices.create('invoice_1', 
            new Invoice(
                'Limited Edition Chibi',
                'Get this limited adition chibi!',
                'usd'
            )
            .addPrice('Chibi', '1480')
            .addPrice('Tax', '180')
        )
        
    }

}

module.exports = Invoices