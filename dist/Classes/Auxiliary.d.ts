import type { AuxiliariesRegistry } from '../Client/Registry/AuxilliaryRegistry';
import type { Auxiliaries } from '../Types/Client';
import type { PieceContext } from './Piece';
import { Piece } from './Piece';
export interface AuxiliaryMeta {
    name: Auxiliaries;
}
export declare abstract class Auxiliary extends Piece<AuxiliaryMeta> {
    registry: AuxiliariesRegistry;
    constructor(context_piece: PieceContext, context_metadata: AuxiliaryMeta);
    abstract load(...args: unknown[]): void;
}
