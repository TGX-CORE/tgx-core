# TGX-CORE

![Latest](https://img.shields.io/npm/v/tgx-core/latest)

![Alpha](https://img.shields.io/npm/v/tgx-core/alpha?style=flat-square)

## About

tgx-core is a a modern, powerful library for building your Telegram bots, with seamless support for both JavaScript and Typescript.

- Object-oriented
- Modular
- Flexible
- 99% Coverage of the Telegram API

## Installation

```sh
npm install tgx-core
```

## Getting Started

With **tgx-core** you can code at ease, as easy as this!

```ts
import { Client, PartialTypes } from 'tgx-core'

const client = new Client({
    partials: [PartialTypes.Chat, PartialTypes.Member]
})

client.once('ready', () => {
    console.log('Your imagination is the limit!')
})

client.on('text', (message) => {
    message.replyText('Hello there!')
})

client.intialize(<bot-token>)
```

## Links

- [TGX-CORE Developers](https://t.me/+reMnoPhHePAwODA1).

- [TGX-CORE DEVs](https://t.me/tgxcore).

- [Documentation](https://tgx-core.github.io/website)

## Development Support
For development support you may join our official Telegram support server [TGX-CORE DEVs](https://t.me/tgxcore).