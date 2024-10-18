import { Piece } from '../../Classes/Piece';
import { Registry } from './Registry';
export declare class Strategy<T extends Piece<any>> {
    supportedExtensions: string[];
    private readonly filterDtsFiles;
    constructor();
    filter(path: string): any;
    preload(file: any): Promise<any>;
    load(registry: Registry<T>, file: any): AsyncIterableIterator<any>;
}
