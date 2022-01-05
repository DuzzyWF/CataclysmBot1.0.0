import { MessageEmbed } from "discord.js";

const tMenu = new MessageEmbed()
.setTitle('How can i help?')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setDescription(
    'Click on the reactions below:\n\n' +
    '🍀 Support\n' +
    '🛑 Reports\n' +
    '📛 Bug Report\n' +
    '💰 Payments\n' +
    '📚 Others'
)
.setFields(
    {
        name: 'Note:',
        value: 'If the bot does not solve your problem, wait for the team to contact you.\n' +
        "Don't tag team members in the chat."
    }
)

export = tMenu