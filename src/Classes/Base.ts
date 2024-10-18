import { EventEmitter } from 'node:events'
import { isJson } from '../Internals/shared'

export abstract class Base extends EventEmitter {

    public constructor(){
        super({ captureRejections: true })
    }

    // /**
    //  * @hidden
    //  */
    // public static defaults(defaults: any, context: any = { }, top_layer?: boolean): any {
    //     for(const key in defaults){
    //         if(!Object.hasOwn(context, key) || context[key] === undefined){
    //             context[key] = defaults[key]
    //         } else if(context[key] === Object(context[key])){
    //             context[key] = this.defaults(defaults[key], context[key])
    //         }
    //     }
    //     return context
    // }

    // /**
    //  * @hidden
    //  */
    // public static defaults(defaults: any, context: any = this, top_layer: boolean = false): any {
    //     for(const key in defaults){
    //         const descriptor = Object.getOwnPropertyDescriptor(context, key)

    //         if(descriptor && (typeof descriptor.get === 'function' || !descriptor.configurable || !descriptor.writable)) continue
    //         if(context[key] === undefined || context[key] === null){
    //             context[key] = defaults[key]
    //         } else {
    //             if(typeof defaults[key] === 'object'){
    //             context[key] = !Base.isClass(defaults[key]) && !Array.isArray(defaults[key])
    //                             ?( top_layer ? defaults[key] : this.defaults(defaults[key], context[key]))
    //                             : defaults[key]
    //             } else {
    //             context[key] = typeof context[key] === typeof defaults[key] ? defaults[key] : context[key]
    //             }
    //         }
    //     }
    //     return context
    // } 

    /**
     * @hidden
     */
    public static nest(object: any, additional: any, fn: (id: any, value: any) => any){
        for(let [key, value] of Object.entries(object)){
          if(isJson(value)){
            if(additional.top){
              fn(key, value)
              continue
            }
            object[key] = this.nest(value, additional, fn)
          } else {
            object[key] = fn(key, value) ?? value
          }
        }
        return object
    }

}