import { WebAppInfo } from '../Types/InlineQuery'
import { Builder } from './Builder'

export class MenuButtonBuilder extends Builder {

    /**
     * @param type The type of the button.
     * @param web_app Required for type 'web_app', the information of the webapp.
     */
    public constructor(type: 'default'|'commands'|'web_app', web_app?: WebAppInfo){
        super({ value: { type, web_app }, parseVal: true })
    }

}