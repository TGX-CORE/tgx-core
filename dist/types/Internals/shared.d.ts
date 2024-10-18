import type { AbstractCtor } from '@sapphire/utilities';
export declare function has(array: any[] | undefined, value: any): boolean;
export declare function isClass(value: unknown): value is AbstractCtor;
export declare function classExtends<T extends AbstractCtor>(value: AbstractCtor, base: T): value is T;
export declare function getEnumKeyByValue<T extends object>(enumObj: T, value: string): keyof T | undefined;
export declare function reverse<T extends Record<string, string>>(inputEnum: T): Record<string, keyof T>;
export declare function mapToSelf<T extends Record<string, string>>(inputEnum: T): Record<T[keyof T], T[keyof T]>;
//# sourceMappingURL=shared.d.ts.map