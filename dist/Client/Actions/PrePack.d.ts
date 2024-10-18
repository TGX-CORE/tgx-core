import { GenericAction } from './Generic';
export declare class PrepackAction extends GenericAction {
    static pointer: string;
    handle(packet: any): any;
}
