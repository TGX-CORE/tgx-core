import type { EventsRegistry } from '../Client/Registry/EventsRegistry'
import type { ClientEvent } from '../Types/ClientEvent'
import type { PieceContext } from './Piece'

import { Piece } from './Piece'

export interface EventMeta {
    name: ClientEvent
    event: ClientEvent
    once?: boolean
    emitter?: any
}

/**
 * An event piece.
 */
export abstract class Event extends Piece<EventMeta> {

    public declare name: ClientEvent

    public once: boolean

    public emitter: any

    public event: string

    public declare registry: EventsRegistry

    private utilizer: ((...args: any[]) => void) | null

    public constructor(context_piece: PieceContext, context_metadata: EventMeta){
        context_metadata.name = context_metadata.event ?? context_metadata.name
        super(context_piece, context_metadata)
        
        this.event = context_metadata.event ?? this.name
        this.once = context_metadata.once ?? false
        this.emitter = context_metadata.emitter ?? this.client

        this.utilizer = this.emitter && this.event ? (this.once ? this._runOnce.bind(this) : this._run.bind(this)) : null
        if(!this.emitter && !this.utilizer) this.enabled = false
    }

    /**
     * Activates or resumes the listener, this is activated on load.
     */
    public listen(){
        if(this.utilizer){
            const maxListeners = this.emitter.getMaxListeners()
			if (maxListeners !== 0) this.emitter.setMaxListeners(maxListeners + 1)

			this.emitter[this.once ? 'once' : 'on'](this.event, this.utilizer)
        }
    }

    /**
     * Stops the listener.
     */
    public stop(){
        this.emitter.removeListener(this.event, this.utilizer)
    }

    /**
     * @hidden
     */
    public override onLoad() {
        this.listen()
        return super.onLoad()
    }

    public abstract run(...args: unknown[]): unknown;

    /**
     * @hidden
     */
    public _run(...args: unknown[]){
        this.run(...args)
    }

    /**
     * @hidden
     */
    public _runOnce(...args: unknown[]){
        this.run(...args)
        this.registry.unload(this)
    }

}