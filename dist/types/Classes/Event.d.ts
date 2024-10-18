import type { EventsRegistry } from '../Client/Registry/EventsRegistry';
import type { ClientEvent } from '../Types/Client';
import type { PieceContext } from './Piece';
import { Piece } from './Piece';
export interface EventMeta {
    name: ClientEvent;
    once?: boolean;
    emitter?: any;
    event?: string;
}
/**
 * An event piece.
 */
export declare abstract class Event extends Piece<EventMeta> {
    name: ClientEvent;
    once: boolean;
    emitter: any;
    event: string;
    registry: EventsRegistry;
    private utilizer;
    constructor(context_piece: PieceContext, context_metadata: EventMeta);
    /**
     * @hidden
     */
    onLoad(): undefined;
    abstract run(...args: unknown[]): unknown;
    /**
     * @hidden
     */
    _run(...args: unknown[]): void;
    /**
     * @hidden
     */
    _runOnce(...args: unknown[]): void;
}
//# sourceMappingURL=Event.d.ts.map