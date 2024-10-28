import { join } from 'path'

export { Extension, type ExtensionMetadata } from './Extension'

export type { RegistriesOptions } from './Registries'

export type { AuxiliariesRegistryOptions } from './Registries/AuxiliaryRegistry'
export type { CommandsRegistryOptions } from './Registries/CommandsRegistry'
export type { EventsRegistryOptions } from './Registries/EventsRegistry'

export const Extensions = {

    /**
     * See {@link RegistriesOptions}.
     */
    Registries: join(__dirname, './Registries')
    
}