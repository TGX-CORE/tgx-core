import type { EventsRegistry } from '../Client/Registry/EventsRegistry';
import type { ClientEvent } from '../Types/ClientEvent';
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
     * Activates or resumes the listener, this is activated on load.
     */
    listen(): void;
    /**
     * Stops the listener.
     */
    stop(): void;
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
