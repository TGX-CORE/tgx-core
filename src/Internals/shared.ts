export type AbstractConstructor<T = any> = abstract new (...args: any[]) => T;
export type Constructor<T = any> = new (...args: any) => T;

/**
 * Here is an enumeration for which key are read for the coresponding variables.
 * 
 * @property Token Your Telegram bot token.
 * @property ProviderToken Your Telegram payment provider token.
 * @property Api Your Telegram app api id.
 * @property Hash Your Telegram app api hash.
 */
export enum EnvironmentVariables {
	Token = 'TELEGRAM_TOKEN',
	ProviderToken = 'TELEGRAM_PAYMENT_PROVIDER_TOKEN',
	Api = 'TELEGRAM_API_ID',
	Hash = 'TELEGRAM_API_HASH'
}

/**
 * Checks whether the array has the matched value or passes the function.
 * 
 * @param array The array that contains the value.
 * @param value The value to check or pass a function.
 */
export function has(array: any[] = [], value: any|((value: any) => any)): boolean {
	return typeof value === 'function' ?
	  array.some(value)
	: array.some((v) => v === value )
}

/**
 * Checks whether the value is a class or an instance of a class.
 * 
 * @param value The value to check.
 */
export function isClass(value: any): boolean {
	return typeof value === 'object' && value !== null && Object.getPrototypeOf(value) !== Object.prototype	||
		   typeof value === 'function' && typeof value.prototype === 'object'
}

/**
 * Checks whether the value is a JSON.
 * 
 * @param value The value to check.
 */
export function isJson(value: unknown): boolean {
	return typeof value === 'object' && !Array.isArray(value) && !isClass(value)
}

export function classExtends<T extends AbstractConstructor>(value: unknown, base: T): value is T {
	if(typeof value !== 'function') return false
	let constructor = value.prototype
	while (constructor) {
        if (constructor === base.prototype) return true
        constructor = Object.getPrototypeOf(constructor);
    }
	return false
}

/**
 * Sets the default values of the default object to the context
 * 
 * @param _defaults The default values.
 * @param context The context to replace with defaults.
 * @param topLayer Pass true to ignore nested objects.
 * @returns context
 */
export function defaults<T = any>(_defaults: T, context: any = { }, topLayer?: boolean, force?: boolean): T {
	for(let [key, value] of Object.entries(_defaults as any)){
		const descriptor = Object.getOwnPropertyDescriptor(context, key)

		if(descriptor && (typeof descriptor.get === 'function' || !descriptor.configurable || !descriptor.writable)) continue
		if(value === undefined || value === null){
			context[key] = value
		} else {
			if(typeof value === 'object' && isJson(value) && !topLayer){
				context[key] = defaults(value, context[key])
			} else {
				if(typeof value !== typeof context[key]||force){
					context[key] = value
				}
			}
		}
	}
	return context
}

/**
 * @property top Whether to only nest the top layer.
 * @property merge Whether to modify the original object.
 * @property array Wheter to map arrays.
 */
export interface Nesting {
	top?: boolean
	merge?: boolean
	array?: boolean
}

/**
 * Returning a value or null will replace the old value, returning void or undefined will skip the current iteration.
 * 
 * if Nesting.array is **true**:
 * `(type: 'array', index: number, value: any) => any`
 * `(type: 'json', key: any, value: any) => any`
 * 
 * Otherwise it is:
 * `(key: any, value: any) => any`
 */
export type NestCallback = (param1: any, param2: any, param3?: any) => any

/**
 * Reads an object including nested objects but ignores classes, Return the duplicated and modified object.
 * 
 * @param object The object to read and nest.
 * @param additional Additional options on how to read the object.
 * @param fn The callback function to call whenever a key and value has been read. Additional information is available.
 */
export function nest<T = any>(object: any = { }, additional: Nesting, fn: NestCallback): T {
	let output: any = additional.merge ? object : { }, returned
	for(let [key, value] of Object.entries(object)){
		if(isJson(value)){
			if(!additional.top){
				additional.array ? fn('json', key, value) : fn(key, value)
				output[key] = nest(value, additional, fn)
				continue
			}
			returned = additional.array ? fn('json', key, value) : fn(key, value)
			output[key] = returned !== undefined ? returned: value
			continue
		} else if(Array.isArray(value) && additional.array){
			output[key] = value.map((v, i) => fn('array', i, v) ?? v)
			continue
		}
		returned = additional.array ? fn('json', key, value) : fn(key, value)
		output[key] = returned !== undefined ? returned: value
	}
	return output
}