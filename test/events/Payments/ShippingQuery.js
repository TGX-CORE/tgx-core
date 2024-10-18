const { Event, ShippingOptions, ShippingOption, LabeledPrices, LabeledPrice, ClientEvent } = require('tgx-core')

class ShippingQuery extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.ShippingQuery
        })
    }

    async run(shipping) {
        await shipping.ok(new ShippingOptions(
            ShippingOption('fedex', 'FedEx',
                new LabeledPrices(
                    LabeledPrice('Shipping', '1820')
            ))
        ))
    }

}

module.exports = ShippingQuery