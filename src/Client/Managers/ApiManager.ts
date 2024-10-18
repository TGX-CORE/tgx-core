import type { Client } from '../Client'

import { Builder } from '../../Builders/Builder'
import { BaseManager } from './BaseManager'

import axios, { type AxiosInstance } from 'axios'
import https from 'node:https'
import http from 'node:http'

export interface APIManagerOptions {
    base?: string
    files?: string
}

export interface RequestOptions {
    returnOk?: boolean
    result?: boolean
    lean?: boolean
}

export type AxiosMethod = 'get'|'post'|'delete'

export class APIManager extends BaseManager<APIManagerOptions> {

    private axios: AxiosInstance

    private _token?: string

    [key: string]: any
    public constructor(client: Client){
        super(client, 'api', {
            base: 'https://api.telegram.org',
            files: 'https://api.telegram.org/file'
        })

        this.acknowledge('setWebhook')
        this.acknowledge('deleteWebhook')
        this.acknowledge('getWebhookInfo')

        this.acknowledge('getFile')
        this.acknowledge('getChat')
        this.acknowledge('getChatMember')
        this.acknowledge('getChatMemberCount')
        this.acknowledge('getUpdates')
        this.acknowledge('getUserChatBoosts')

        this.acknowledge('getMe')
        this.acknowledge('getMyName')
        this.acknowledge('getMyDescription')
        this.acknowledge('getMyShortDescription')
        this.acknowledge('getBusinessConnection')

        this.acknowledge('setMyName')
        this.acknowledge('setMyDescription')
        this.acknowledge('setMyShortDescription')
        
        this.acknowledge('sendAction')
        this.acknowledge('sendAnimation')
        this.acknowledge('sendAudio')
        this.acknowledge('sendChatAction')
        this.acknowledge('sendContact')
        this.acknowledge('sendDocument')
        this.acknowledge('sendDice')
        this.acknowledge('sendInvoice')
        this.acknowledge('sendLocation')
        this.acknowledge('sendMediaGroup')
        this.acknowledge('sendMessage')
        this.acknowledge('sendMessageReaction')
        this.acknowledge('sendPaidMedia')
        this.acknowledge('sendPhoto')
        this.acknowledge('sendPoll')
        this.acknowledge('sendVideo')
        this.acknowledge('sendVideoNote')
        this.acknowledge('sendVoice')
        this.acknowledge('sendVenue')
        this.acknowledge('stopPoll')

        this.acknowledge('getUserProfilePhotos')

        this.acknowledge('answerInlineQuery')
        this.acknowledge('answerPreCheckoutQuery')
        this.acknowledge('answerShippingQuery')

        this.acknowledge('setChatMenuButton')
        this.acknowledge('getChatMenuButton')

        this.acknowledge('banChatMember')
        this.acknowledge('promoteChatMember')
        this.acknowledge('unbanChatMember')
        this.acknowledge('restrictChatMember')

        this.acknowledge('copyMessages')
        this.acknowledge('pinChatMessage')
        this.acknowledge('forwardMessages')
        this.acknowledge('unpinChatMessage')
        this.acknowledge('unpinAllChatMessages')

        this.acknowledge('deleteMessage')
        this.acknowledge('deleteMessages')
        this.acknowledge('editMessageText')
        this.acknowledge('editMessageCaption')
        this.acknowledge('editMessageMedia')
        this.acknowledge('editMessageLiveLocation')
        this.acknowledge('stopMessageLiveLocation')
        this.acknowledge('editMessageReplyMarkup')
        this.acknowledge('setMessageReaction')

        this.acknowledge('leaveChat')
        this.acknowledge('setChatTitle')
        this.acknowledge('setChatPhoto')
        this.acknowledge('deleteChatPhoto')
        this.acknowledge('setChatDescription')
        this.acknowledge('getChatAdministrators')
        this.acknowledge('setChatAdministratorCustomTitle')
        this.acknowledge('setMyDefaultAdministratorRights')
        this.acknowledge('getMyDefaultAdministratorRights')

        this.acknowledge('approveChatJoinRequest')
        this.acknowledge('declineChatJoinRequest')

        this.acknowledge('deleteMyCommands')
        this.acknowledge('getMyCommands')
        this.acknowledge('setMyCommands')

        this.acknowledge('createForumTopic')
        this.acknowledge('closeForumTopic')
        this.acknowledge('deleteForumTopic')
        this.acknowledge('editForumTopic')
        this.acknowledge('reopenForumTopic')
        this.acknowledge('unpinAllForumTopicMessages')

        this.acknowledge('editGeneralForumTopic')
        this.acknowledge('closeGeneralForumTopic')
        this.acknowledge('reopenGeneralForumTopic')
        this.acknowledge('hideGeneralForumTopic')
        this.acknowledge('unhideGeneralForumTopic')
        this.acknowledge('unpinAllGeneralForumTopicMessages')

        this.acknowledge('refundStarPayment')
        
        this.acknowledge('createInvoiceLink')
        this.acknowledge('exportChatInviteLink')
        this.acknowledge('createChatInviteLink')
        this.acknowledge('editChatInviteLink')
        this.acknowledge('createChatSubscriptionInviteLink')
        this.acknowledge('editChatSubscriptionInviteLink')
        this.acknowledge('revokeChatInviteLink')
        this.acknowledge('setChatStickerSet')
        this.acknowledge('deleteChatStickerSet')

        this.axios = axios.create({
            httpsAgent: new https.Agent({
                keepAlive: true,
                timeout: 10000,
                scheduling: 'fifo'
            }),
            httpAgent: new http.Agent({
                keepAlive: true,
                timeout: 10000,
                scheduling: 'fifo'
            })
        })

    }

    private acknowledge(method: string): void {
        this[method] = async function(...argumants: any[]): Promise<any> {
            return this.request(this.generate(method), 'post', ...argumants)
        }
    }

    private generate(method: string): string {
        return [this.options.base, this.token, method]
          .map((sequence, index) => [0].includes(index) ? sequence : '/' + sequence)
          .join('')
    }

    public async request(URL: string, method: AxiosMethod, ...argumants: any[]): Promise<any> {
        return new Promise((resolve) => {
            
            argumants[1] = this.defaults({
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            }, this.serialize(argumants[1]))

            this.axios[method](URL, ...argumants)
                .then((response: any) => {
                    const options = argumants[1]
                    if(options.returnOk) return resolve(response.data.ok)
                    if(options.lean){
                        options.result ? 
                            resolve(response.data.result)
                        :   resolve(response.data)
                    }
                    resolve(response)
                })
                .catch((error) => {
                    this.client.logger.error(`[API MANAGER - ${error.response?.statusText ?? error.code ?? '0000'}] An internal api error was encountered:`, '\n', `(${error.response?.data?.error_code ?? error.code ?? 'unknown'}) ${error.response?.data?.description ?? error.cause ?? 'No descrption was provided.'}`)
                    resolve(false)
                })
        })
    }

    public serialize(object: any, output: any = { }): any {
        for(let key in object){
            if(object[key] instanceof Builder){
                output[key] = object[key].parse()
            } else if(typeof object[key] === 'object' && !Array.isArray(object[key])){
                output[key] = this.serialize(object[key], output[key])
            } else {
                output[key] = object[key]
            }
        }
        return output
    }

    public setToken(token: string){
        this._token = token
    }

    public get token(){
        return `bot` + this._token
    }

}