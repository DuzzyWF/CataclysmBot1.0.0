import { MessageEmbed } from "discord.js";

const tConexao = new MessageEmbed()
.setTitle('Connection Problems')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'To return to the main menu of reactions, use !menu' })
.setDescription(
    '📋 Use all the IPs below.\n\n' +
    '1. cattaclysm.com\n' +
    '2. jogar.cattaclysm.com\n' +
    '3. 200.9.154.72:10005\n\n' +
    'If you still cannot connect, restart your modem and your machine.'
)
.setFields(
    {
        name: 'Anti-bot:',
        value: 'Proxy connections are blocked by the anti-bot.\n' + 
        'If you have VPNs or proxies enabled, disable them.'
    }
)

export = tConexao