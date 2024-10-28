import { Environment } from './MTProtoClient'

export const Server: {
    [key: number]: {
        [key: number]: ServerInfo
    }
} = {
    [Environment.Production]: {

        [1]: {
            ip: '149.154.175.53',
            port: 443
        },

        [2]: {
            ip: '149.154.167.50',
            port: 443
        },

        [3]: {
            ip: '149.154.175.100',
            port: 443
        },

        [4]: {
            ip: '149.154.167.92',
            port: 443
        },

        [5]: {
            ip: '91.108.56.128',
            port: 443
        }

    },

    [Environment.Testing]: {

        [1]: {
            ip: '149.154.175.10',
            port: 80,
            test: true
        },

        [2]: {
            ip: '149.154.167.40',
            port: 443,
            test: true
        },

        [3]: {
            ip: '149.154.175.117',
            port: 443,
            test: true
        }

    }
}

export interface WebsocketManagerOptions {
    
}

export interface ServerInfo {
    ip: string
    port: number
    test?: boolean
}