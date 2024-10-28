export interface MTProtoClientOptions {
    [key: string]: any

    environment?: Environment
    dc?: number

}

export enum Environment {
    Testing,
    Production
}