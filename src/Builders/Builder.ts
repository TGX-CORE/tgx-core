import { defaults } from '../Internals/shared'

export class Builder<Payload extends object = any> {

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

    public constructor(packet: Payload){
        defaults(packet, this, true)
    }

    /**
     * @hidden
     */
    public parse({ parseVal, parseArray, returnValue, value }: any = this): any { 
        let parsed: any
        if(returnValue) return value
        if(Array.isArray(value)){
            parsed = [ ]
            for(let val of value){
                if(Array.isArray(val)){
                    parsed.push(this.parse({ value: val }))
                    continue
                }
                if(val instanceof Builder){
                    parsed.push(val.parse())
                    continue
                }
                parsed.push(val)
            }
            return parseVal || parseArray ? JSON.stringify(parsed) : parsed
        } else {
            parsed = { }
            for(let val in value){
                if(value[val] instanceof Builder){
                    parsed[val] = value[val].parse()
                } else {
                    if(Array.isArray(value[val])){
                        parsed[val] = this.parse({ parseArray, value: value[val] })
                        continue
                    }
                    parsed[val] = value[val]
                }
            }
            return parseVal ? JSON.stringify(parsed) : parsed
        }
    }

}