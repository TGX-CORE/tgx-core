import type { AuxiliariesRegistry } from '../../dist/Registry/AuxilliaryRegistry'
import type { Auxiliaries } from '../Types/Client'
import type { PieceContext } from './Piece'

import { Piece } from './Piece'

export interface AuxiliaryMeta {
    name: Auxiliaries
}

export abstract class Auxiliary extends Piece<AuxiliaryMeta> {

    public declare registry: AuxiliariesRegistry

    public constructor(context_piece: PieceContext, context_metadata: AuxiliaryMeta){
        super(context_piece, context_metadata)
    }

    public abstract load(...args: unknown[]): void

}