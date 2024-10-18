import { ChosenInlineResult } from '../../Classes/InlineQueryChosenResult'
import { GenericCreator } from './GenericCreator'
import { Client } from '../Client'
import { ClientEvent } from '../../Types/ClientEvent'

export class ChosenInlineresultAction extends GenericCreator<ChosenInlineResult, ChosenInlineResult> {

    public static pointer: ClientEvent = ClientEvent.ChosenInlineResult

    public constructor(client: Client){
        super(client, ChosenInlineResult, ChosenInlineresultAction.pointer)
    }

} 