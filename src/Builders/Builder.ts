import { defaults, isClass, isJson, nest } from '../Internals/shared'

export class Builder {

    /**
     * @hidden
     */
    public value?: any

    /**
     * @hidden
     */
    public parseVal?: boolean

    /** 
     * @hidden
    */
    public parseArray?: boolean

    public constructor(packet: any){
        defaults(packet, this, true)
    }

    /**
     * @hidden
     */
    public parse({ parseVal, parseArray, returnValue, value }: any = this): any { 
        if(returnValue) return value
        if(Array.isArray(value)){
            value.map((v) => this.parse({ parseArray, value: v }))
            return parseVal||parseArray ? JSON.stringify(value) : value
        } else if(isJson(value)){
            nest(value, { merge: true, array: true }, (type, key, v) => {
                return this.parse({ parseArray, value: v })
            })
            return parseVal ? JSON.stringify(value) : value
        }
        return value instanceof Builder ? value.parse() : value
    }
   
}