import type { AbstractCtor } from '@sapphire/utilities';
/**
 * Checks whether the array has the matched value or passes the function.
 *
 * @param array The array that contains the value.
 * @param value The value to check or the validator.
 */
export declare function has(array: any[] | undefined, value: any | ((value: any) => any)): boolean;
/**
 * Checks whether the value is an abstract constructor.
 *
 * @param value The value to check.
 */
export declare function isAbstract(value: unknown): value is AbstractCtor;
/**
 * Checks whether the value is a class.
 *
 * @param value The value to check.
 */
export declare function isClass(value: unknown): boolean;
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
 * @param defaults The default values.
 * @param context The context to replace with defaults.
 * @param topLayer Pass true to ignore nested objects.
 * @returns context
 */
export declare function defaults(defaults: any, context?: any, topLayer?: boolean): any;
export interface Nesting {
    top?: boolean;
}
/**
 * Reads an object including nested objects but ignores classes and arrays.
 *
 * @param object The object to read.
 * @param additional Additional options on how to read the object.
 * @param fn The callback function to call whenever a key and value has been read.
 */
export declare function nest(object: any, additional: Nesting, fn: (id: any, value: any) => any): void;
