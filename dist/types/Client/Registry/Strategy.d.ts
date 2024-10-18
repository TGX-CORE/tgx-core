import { Registry } from './Registry';
import { Piece } from '../../Classes/Piece';
export declare class Strategy<T extends Piece<any>> {
    supportedExtensions: string[];
    private readonly filterDtsFiles;
    constructor();
    filter(path: string): any;
    preload(file: any): Promise<any>;
    load(registry: Registry<T>, file: any): AsyncIterableIterator<any>;
}
//# sourceMappingURL=Strategy.d.ts.map