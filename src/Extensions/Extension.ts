import type { Client } from '../Client/Client'

import { defaults } from '../Internals/shared'

export interface ExtensionMetadata<T> {
    name?: string
    options: T

    clientExtension?: 'database'
}

export abstract class Extension<T> {

    public readonly declare metadata: ExtensionMetadata<T>
    public readonly declare client: Client

    public constructor(client: Client, metadata: ExtensionMetadata<T>){
        Object.defineProperties(this, {
            client: {
                value: client
            },

            metadata: {
                value: defaults({
                    
                }, metadata)
            }
        })
    }

    public async onLoad(): Promise<void> { return }

}