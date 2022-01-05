import { MessageEmbed } from "discord.js";

const tMetodo = new MessageEmbed()
.setTitle('Delivery delay')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'To return to the main menu of reactions, use !menu' })
.setDescription(
    '📋 Select below what was the payment method.\n\n' +
    '💳 Credit Card\n' +
    '📄 Payment Slip\n' 
)

export = tMetodo