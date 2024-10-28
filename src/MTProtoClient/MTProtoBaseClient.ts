import { Environment, type MTProtoClientOptions } from '../Types/MTProtoClient'

import { Base } from '../Classes/Base'

export class MTProtoBaseClient extends Base {

    public options: MTProtoClientOptions

    public constructor(options: MTProtoClientOptions){
        super()

        this.options = this.defaults<MTProtoClientOptions>({
            environment: Environment.Testing,
            dc: 1
        }, options)

    }
    
}
