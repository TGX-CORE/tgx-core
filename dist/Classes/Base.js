"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const node_events_1 = require("node:events");
const shared_1 = require("../Internals/shared");
class Base extends node_events_1.EventEmitter {
    constructor() {
        super({ captureRejections: true });
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
    static nest(object, additional, fn) {
        for (let [key, value] of Object.entries(object)) {
            if ((0, shared_1.isJson)(value)) {
                if (additional.top) {
                    fn(key, value);
                    continue;
                }
                object[key] = this.nest(value, additional, fn);
            }
            else {
                object[key] = fn(key, value) ?? value;
            }
        }
        return object;
    }
}
exports.Base = Base;
//# sourceMappingURL=Base.js.map