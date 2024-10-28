import { Registry } from '../Client/Registry/Registry'
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

export class Piece<Meta extends PieceMeta> {

    public name?: string

    public enabled: boolean

    public registry: InstanceType<typeof Registry>

    public readonly client: Client

    public constructor(context_piece: PieceContext, context_metadata: Meta){
        
        this.name = context_metadata.name

        this.enabled = context_metadata.enabled ?? true

        this.registry = context_piece.registry

        this.client = context_piece.registry.client

    }

    public onLoad() {
        return undefined
    }

}