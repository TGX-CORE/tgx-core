import type { Client } from '../Client/Client'

import { defaults } from '../Internals/shared'
import { Base } from './Base'

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
    return this.defaults(data, this, true)
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
  public get defaults(){
    return (defaults: any, context: any = this, top_layer?: boolean) => {
      return defaults(defaults, context, top_layer)
    }
  }

  /**
   * @hidden
   */
  public get nest(){
    return Base.nest
  }

}