import type { AbstractCtor } from '@sapphire/utilities';
/**
 * Checks whether the array has the matched value or passes the function.
 *
 * @param array The array that contains the value.
 * @param value The value to check or the validator.
 */
export declare function has(array: any[] | undefined, value: any | ((value: any) => any)): boolean;
/**
 * Checks whether the value is a class or an instance of a class.
 *
 * @param value The value to check.
 */
export declare function isClass(value: any): boolean;
/**
 * Checks whether the value is a JSON.
 *
 * @param value The value to check.
 */
export declare function isJson(value: unknown): boolean;
export declare function classExtends<T extends AbstractCtor>(value: AbstractCtor, base: T): value is T;
/**
 * Sets the default values of the default object to the context
 *
 * @param _defaults The default values.
 * @param context The context to replace with defaults.
 * @param topLayer Pass true to ignore nested objects.
 * @returns context
 */
export declare function defaults(_defaults: any, context?: any, topLayer?: boolean): any;
/**
 * @property top Whether to only nest the top layer.
 * @property merge Whether to modify the original object.
 * @property array Wheter to map arrays.
 */
export interface Nesting {
    top?: boolean;
    merge?: boolean;
    array?: boolean;
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
export type NestCallback = (param1: any, param2: any, param3?: any) => any;
/**
 * Reads an object including nested objects but ignores classes, Return the duplicated and modified object.
 *
 * @param object The object to read and nest.
 * @param additional Additional options on how to read the object.
 * @param fn The callback function to call whenever a key and value has been read. Additional information is available.
 */
export declare function nest(object: any, additional: Nesting, fn: NestCallback): any;
