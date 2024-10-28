import { Auxiliary } from '../../Classes/Auxiliary'
import { Auxiliaries } from '../../Types/Client'
import { Registries } from '../Registries'
import { Registry } from './Registry'

export interface AuxiliariesRegistryOptions { 
    load?: boolean
    path?: string
}

export class AuxiliariesRegistry extends Registry<string, Auxiliary> {

    public cache: any = [ ]

    public constructor(registry: Registries, options?: AuxiliariesRegistryOptions){
        super(registry, Auxiliary, {
            name: 'auxiliaries'
        })

        if(options?.load) this.register(options?.path ?? `${registry.root}/auxiliaries`)
    }

    public override async loadAll(): Promise<void> {
        await super.loadAll()

        this.each((auxiliary: Auxiliary) => {
            switch(auxiliary.name) {
                case Auxiliaries.Invoices:
                    auxiliary.load(this.client.invoices)
                    break
            }
        })
    }

}