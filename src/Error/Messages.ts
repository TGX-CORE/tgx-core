import { ErrorCodes } from './Codes'

export const ErrorMessage = {

    [ErrorCodes.MissingToken]: 'Attempted to access the Telegram API without providing a bot token.',
    [ErrorCodes.MissingPaymentProvider]: 'Attempted to access payment features without a payment provider token.',
    
    [ErrorCodes.InvalidInvoice]: (invoice_id: string) => `There is no "${invoice_id}" stored in the InvoicesManager.`,
    [ErrorCodes.AnInvoiceLink]: (Invoice_id: string) => `Tried to send an "${Invoice_id}" invoice, but got a invoice link instead.`,

    [ErrorCodes.InvalidChatPermission]: (chat_permission: string) => `Encountered an invalid chat permission "${chat_permission}".`,
    [ErrorCodes.InvalidAdminstratorRight]: (administrator_right: string) => `Encountered an invalid administrator right "${administrator_right}".`,

}