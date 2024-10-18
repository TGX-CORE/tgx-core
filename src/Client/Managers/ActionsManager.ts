import type { Client } from '../Client'

import { isClass } from '../../Internals/shared'
import { BaseManager } from './BaseManager'

export enum ClientAction {
    All = 'all',

    EditedBusinessMessage = require('../Actions/EditedBusinessMessage').EditedBusinessMessageAction,

    ForumTopicEdited = require('../Actions/Message/ForumTopicsEdited').ForumTopicEdited,
    ForumTopicCreated = require('../Actions/Message/ForumTopicCreated').ForumTopicCreatedAction,
    ForumTopicReopened = require('../Actions/Message/ForumTopicsReopened').ForumTopicReopened,
    ForumTopicClosed = require('../Actions/Message/ForumTopicClosed').ForumTopicClosedAction,

    SuccessfulPayment = require('../Actions/Message/SuccessfulPayment').SuccessfulPaymenAction,
    MessageReactionCount = require('../Actions/MessageReactionCount').MessageReactionCountAction,
    ChosenInlineResult = require('../Actions/ChosenInlineResult').ChosenInlineresultAction,
    ChatMemberUpdate = require('../Actions/ChatMemberUpdated').ChatMemeberUpdateAction,
    PreCheckoutQuery = require('../Actions/PreCheckoutQuery').PreCheckoutQueryAction,
    ChatBoostRemoved = require('../Actions/ChatBoostRemoved').ChatBoostRemovedAction,
    BusinessMessage = require('../Actions/BusinessMessage').BusinessMessageAction,
    MessageReaction = require('../Actions/MessageReaction').MessageReactionAction,
    ChatJoinRequest = require('../Actions/ChatJoinRequest').ChatJoinRequestAction,
    ShippingQuery = require('../Actions/ShippingQuery').ShippingQueryAction,
    EditedMessage = require('../Actions/EditedMessage').EditedMessageAction,
    CallbackQuery = require('../Actions/CallbackQuery').CallbackQueryAction,
    InlineQuery = require('../Actions/InlineQuery').InlineQueryAction,
    PollAnswer = require('../Actions/PollAnswer').PollAnswerAction,
    ChatBoost = require('../Actions/ChatBoost').ChatBoostAction,
    Message = require('../Actions/Message').MessageAction,
    Poll = require('../Actions/Poll').PollAction
    
}

export interface ActionsOptions {
    load: ClientAction.All|ClientAction[]
}

export class ActionsManager extends BaseManager<ActionsOptions> {

    [key: string]: any
    public constructor(client: Client){
        super(client, 'actions', {
            load: ClientAction.All
        })

        if(this.options.load === ClientAction.All){
            for(let action of Object.values(ClientAction)){
                if(action === ClientAction.All||!isClass(action)) continue
                this.register(action)
            }
        } else if(Array.isArray(this.options.load)){
            for(let action of this.options.load){
                if(action === ClientAction.All||!isClass(action)) continue
                this.register(action)
            }
        }

    }

    public register(context_piece: any): void {
        this[(context_piece.pointer ?? context_piece.name.replace(/Action$/, '').toLowerCase())] = new context_piece(this.client)
    }

}