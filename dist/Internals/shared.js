"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.has = has;
exports.isClass = isClass;
exports.isJson = isJson;
exports.classExtends = classExtends;
exports.defaults = defaults;
exports.nest = nest;
/**
 * Checks whether the array has the matched value or passes the function.
 *
 * @param array The array that contains the value.
 * @param value The value to check or the validator.
 */
function has(array = [], value) {
    return typeof value === 'function' ?
        array.some(value)
        : array.some((v) => v === value);
}
/**
 * Checks whether the value is a class or an instance of a class.
 *
 * @param value The value to check.
 */
function isClass(value) {
    return typeof value === 'object' && value !== null && Object.getPrototypeOf(value) !== Object.prototype ||
        typeof value === 'function' && typeof value.prototype === 'object';
}
/**
 * Checks whether the value is a JSON.
 *
 * @param value The value to check.
 */
function isJson(value) {
    return typeof value === 'object' && !Array.isArray(value) && !isClass(value);
}
function classExtends(value, base) {
    let ctor = value;
    while (ctor !== null) {
        if (ctor === base)
            return true;
        ctor = Object.getPrototypeOf(ctor);
    }
    return false;
}
/**
 * Sets the default values of the default object to the context
 *
 * @param _defaults The default values.
 * @param context The context to replace with defaults.
 * @param topLayer Pass true to ignore nested objects.
 * @returns context
 */
function defaults(_defaults, context = {}, topLayer) {
    for (let [key, value] of Object.entries(_defaults)) {
        const descriptor = Object.getOwnPropertyDescriptor(context, key);
        if (descriptor && (typeof descriptor.get === 'function' || !descriptor.configurable || !descriptor.writable))
            continue;
        if (value === undefined || value === null) {
            context[key] = value;
        }
        else {
            if (typeof value === 'object' && isJson(value) && !topLayer) {
                context[key] = defaults(value, context[key]);
            }
            else {
                if (typeof value !== typeof context[key]) {
                    context[key] = value;
                }
            }
        }
    }
    return context;
}
/**
 * Reads an object including nested objects but ignores classes, Return the duplicated and modified object.
 *
 * @param object The object to read and nest.
 * @param additional Additional options on how to read the object.
 * @param fn The callback function to call whenever a key and value has been read. Additional information is available.
 */
function nest(object = {}, additional, fn) {
    let output = additional.merge ? object : {}, returned;
    for (let [key, value] of Object.entries(object)) {
        if (isJson(value)) {
            if (!additional.top) {
                additional.array ? fn('json', key, value) : fn(key, value);
                output[key] = nest(value, additional, fn);
                continue;
            }
            returned = additional.array ? fn('json', key, value) : fn(key, value);
            output[key] = returned !== undefined ? returned : value;
            continue;
        }
        else if (Array.isArray(value) && additional.array) {
            output[key] = value.map((v, i) => fn('array', i, v) ?? v);
            continue;
        }
        returned = additional.array ? fn('json', key, value) : fn(key, value);
        output[key] = returned !== undefined ? returned : value;
    }
    return output;
}
//# sourceMappingURL=shared.js.map