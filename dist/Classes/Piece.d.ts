import { Registry } from '../Client/Registry/Registry';
import type { Client } from '../Client/Client';
export interface PieceContext {
    registry: InstanceType<typeof Registry>;
    root: string;
    path: string;
    name: string;
}
export interface PieceMeta {
    name: string;
    enabled?: boolean;
}
export declare class Piece<Meta extends PieceMeta> {
    name: string;
    enabled: boolean;
    registry: InstanceType<typeof Registry>;
    readonly client: Client;
    constructor(context_piece: PieceContext, context_metadata: Meta);
    onLoad(): undefined;
}
