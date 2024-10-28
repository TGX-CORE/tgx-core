import { isJson, nest, defaults } from '../Internals/shared'
import { EventEmitter } from 'node:events'

export abstract class Base extends EventEmitter {

    public constructor(){
        super({ captureRejections: true })
    }

    public get isJson(){
      return isJson
    }

    public get nest(){
      return nest
    }

    public get defaults(){
      return defaults
    }

}