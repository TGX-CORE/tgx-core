import { AbstractConstructor, classExtends, isClass } from '../../Internals/shared'
import { Piece } from '../../Classes/Piece'
import { basename, extname } from 'path'
import { Registry } from './Registry'

export class Strategy<K, T extends Piece<any>> {

    //'.cjs', '.mjs'
    public supportedExtensions = ['.js']
    private readonly filterDtsFiles: boolean = false

    constructor(){
        if (Reflect.has(process, Symbol.for('ts-node.register.instance')) || process.env.TS_NODE_DEV !== null) {
			this.supportedExtensions.push('.ts', '.cts', '.mts')
			this.filterDtsFiles = true
		}
    }

    public filter(path: string): any {
        const extension = extname(path)
        if(!this.supportedExtensions.includes(extension)) return null
        if(this.filterDtsFiles && path.endsWith('.d.ts')) return null
        const name = basename(path)
        if (name === '' || name.startsWith('.')) return null
        return { extension, path, name }
    }

    public async preload(file: any): Promise<any> {
        const typescript = ['.js', '.ts'].includes(file.extension)
        if(!typescript) return null
        const module = require(file.path)
        delete require.cache[require.resolve(file.path)]
        return module
    }

    public async *load(registry: Registry<K, T>, file: any): AsyncIterableIterator<any> {
        let module = await this.preload(file),
            yielded = false
        if(isClass(module) && classExtends(module, registry.Constructor)){
            yield module
            yielded = true
        }
        for(const exported of Object.values(module)){
            if(isClass(exported) && classExtends(exported as AbstractConstructor, registry.Constructor)){
                yield exported
                yielded = true
            }
        }
        if(!yielded){
			throw 'Missing exports!'
		}
    }

}