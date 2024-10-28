export const keys = [

    'MissingToken',
    'MissingPaymentProvider',

    'InvalidInvoice',
    'AnInvoiceLink',

    'InvalidChatPermission',
    'InvalidAdminstratorRight'

]

export type ErrorCode = typeof keys[number]
export const ErrorCodes: Record<ErrorCode, ErrorCode> = Object.fromEntries(keys.map(value => [value, value]))