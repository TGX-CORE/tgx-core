export declare function scanRoot(): PackageData;
export interface PackageData {
    root: string;
    type: 'ESM' | 'CommonJS';
}
