import { ChosenInlineResult } from '../../Classes/InlineQueryChosenResult';
import { GenericCreator } from './GenericCreator';
import { Client } from '../Client';
import { ClientEvent } from '../../Types/ClientEvent';
export declare class ChosenInlineresultAction extends GenericCreator<ChosenInlineResult, ChosenInlineResult> {
    static pointer: ClientEvent;
    constructor(client: Client);
}
