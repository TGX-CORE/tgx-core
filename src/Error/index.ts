import { ErrorCodes, type ErrorCode } from './Codes'
import { ErrorMessage } from './Messages'

function generate(Base: ErrorConstructor){
    return class TGXError extends Base {
        public code: ErrorCode
        public constructor(code: ErrorCode, ...args: any[]){
            super(message(code, ...args))
            this.code = code
        }

        public get name(){
            return `${super.name} [${this.code}]`
        }
    }
}

function message(code: ErrorCode, ...args: any[]){
    let message
    if(!((code) = ErrorCodes[code])) throw new Error('An unknown error was encountered.')
    if(!(message = ErrorMessage[code])) throw new Error(`Encountered an unknown ${code} error, contact the developer as there is no message.`)
    if(typeof message === 'function') return (message as (...args: any[]) => any)(...args)
    if(!args.length) return message
    args.unshift(message)
    return String(...args)
}

export const TGXError = generate(Error)
export const TGXTypeError = generate(TypeError)
export const TGXRangeError = generate(RangeError)

export { ErrorCodes, type ErrorCode } from './Codes'
export { ErrorMessage } from './Messages'