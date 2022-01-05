import { MessageEmbed } from "discord.js";

const tPagamento = new MessageEmbed()
.setTitle('Payments')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'To return to the main menu of reactions, use !menu' })
.setDescription(
    '📋 Select one of the options below.\n\n' +
    '🤝 How the payment works\n' +
    '💸 Product not received\n'
)

export = tPagamento