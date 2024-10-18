import * as path from 'path'
import * as fs from 'fs'

let data: PackageData | null = null

export function scanRoot(): PackageData {
    if(data !== null) return data
    const cwd = process.cwd()
    try {
        const file = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json'), 'utf8'))
        data = { root: path.dirname(path.join(cwd, file.test ?? file.main)), type: file.type === 'module' ? 'ESM' : 'CommonJS'}
    } catch {
        data = { root: cwd, type: 'CommonJS' }
    }
    return data
}

export interface PackageData {
	root: string
	type: 'ESM' | 'CommonJS'
}