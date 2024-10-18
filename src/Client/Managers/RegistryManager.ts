import { Piece } from '../../Classes/Piece'
import { Registry } from '../Registry/Registry'
import { scanRoot } from '../../Internals/scanner'

import { Collection } from '@discordjs/collection'
import { join } from 'path'
import { CommandsRegistry } from '../Registry/CommandsRegistry'
import { EventsRegistry } from '../Registry/EventsRegistry'

type k = keyof Registries
type v = Registries[k]

export class RegistryManager extends Collection<string, any> {

	public constructor(){
		super()
	}

    public register<T extends Piece<any>>(store: Registry<T>): this {
		this.set(store.name as k, store as unknown as v)
		return this
	}

    public deregister<T extends Piece<any>>(store: Registry<T>): this {
		this.delete(store.name as k)
		return this
	}

	public registerPath(root: string = scanRoot().root): void {
		for(const store of this.values() as IterableIterator<Registry<Piece<any>>>){
			store.register(join(root, store.name))
		}
	}

}

export interface Registries {
	events: EventsRegistry,
	commands: CommandsRegistry
}