import EventEmitter from 'node:events'

export class MTProtoBaseClient extends EventEmitter {

    public constructor(){
        super({ captureRejections: true })
    }
    
}
