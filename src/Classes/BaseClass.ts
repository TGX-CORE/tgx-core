import type { Client } from '../Client/Client'

import { defaults as _defaults } from '../Internals/shared'

export abstract class BaseClass<T, P> {

  public readonly declare client: Client

  public constructor(client: Client, packet?: P){

    Object.defineProperty(this, 'client', { value: client })

    if(packet){
      this._patch(packet)
    }

  }

  /**
   * @hidden
   */
  public _patch(data: P): this {
    return this.defaults(data, this, false, true)
  }

  /**
   * @hidden
   */
  public _clone(): T {
    return Object.assign(Object.create(this), this)
  }

  /**
   * @hidden
   */
  public _update(data: P){
    const cloned = this._clone()
    this._patch(data)
    return cloned
  }

  /**
   * @hidden
   */
  public defaults(defaults: any, context: any = this, top_layer?: boolean, force?: boolean){
    return _defaults(defaults, context, top_layer, force)
  }

}