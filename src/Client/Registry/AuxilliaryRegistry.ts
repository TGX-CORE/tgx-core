import { Registries, Auxiliaries } from '../../Types/Client'
import { Auxiliary } from '../../Classes/Auxiliary'
import { Registry } from './Registry'
import { Client } from '../Client'

export class AuxiliariesRegistry extends Registry<Auxiliary> {

    public declare client: Client

    public id: Registries = Registries.Auxiliaries

    public constructor(client: Client){
        super(client, Auxiliary, { name: 'auxiliaries' })
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