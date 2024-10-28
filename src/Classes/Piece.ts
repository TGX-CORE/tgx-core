import { Registry } from '../../dist/Registry/Registry'
import type { Client } from '../Client/Client'

export interface PieceContext {
    registry: InstanceType<typeof Registry>
    root: string
    path: string
    name: string
}

export interface PieceMeta {
    name?: string
    enabled?: boolean
}

export abstract class Piece<Meta extends PieceMeta> {

    public name?: string

    public registry: InstanceType<typeof Registry>

    public readonly client: Client

    public constructor(context_piece: PieceContext, context_metadata: Meta){
        this.name = context_metadata.name
        this.registry = context_piece.registry
        this.client = context_piece.registry.client
    }

    public onLoad() {
        return undefined
    }

    public abstract get enabled(): boolean;

}