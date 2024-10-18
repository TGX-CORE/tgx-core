"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.has = has;
exports.isAbstract = isAbstract;
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
 * Checks whether the value is an abstract constructor.
 *
 * @param value The value to check.
 */
function isAbstract(value) {
    return typeof value === 'function' && typeof value.prototype === 'object';
}
/**
 * Checks whether the value is a class.
 *
 * @param value The value to check.
 */
function isClass(value) {
    return typeof value === "object" && (/^(object|array)$/i.test(value.constructor.name) === false);
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
 * @param defaults The default values.
 * @param context The context to replace with defaults.
 * @param topLayer Pass true to ignore nested objects.
 * @returns context
 */
function defaults(defaults, context = {}, topLayer) {
    for (const key in defaults) {
        const descriptor = Object.getOwnPropertyDescriptor(context, key);
        if (descriptor && (typeof descriptor.get === 'function' || !descriptor.configurable || !descriptor.writable))
            continue;
        if (context[key] === undefined || context[key] === null) {
            context[key] = defaults[key];
        }
        else {
            if (typeof defaults[key] === 'object') {
                if (isJson(defaults[key]) && !topLayer) {
                    context[key] = defaults(defaults[key], context[key]);
                }
                else {
                    context[key] = defaults[key];
                }
            }
            else {
                if (typeof context[key] === typeof defaults[key]) {
                    context[key] === defaults[key];
                }
            }
        }
    }
    return context;
}
/**
 * Reads an object including nested objects but ignores classes and arrays.
 *
 * @param object The object to read.
 * @param additional Additional options on how to read the object.
 * @param fn The callback function to call whenever a key and value has been read.
 */
function nest(object, additional, fn) {
    for (let [key, value] of Object.entries(object)) {
        if (isJson(value)) {
            if (additional.top) {
                fn(key, value);
                continue;
            }
            object[key] = nest(value, additional, fn);
        }
        else {
            object[key] = fn(key, value) ?? value;
        }
    }
    return;
}
//# sourceMappingURL=shared.js.map