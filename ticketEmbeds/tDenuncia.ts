import { MessageEmbed } from "discord.js";

const tDenuncia = new MessageEmbed()
.setTitle('Reports')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'To return to the main menu of reactions, use !menu' })
.setDescription(
    '📋 Reports without evidence will not be analyzed.\n\n' +
    'To make a report you must have evidence on hand ' +
    'to support your arguments. Otherwise, your case ' +
    'will not be analyzed by our team.\n' +
    'ATTENTION: Witnesses are not evidence'
)

export = tDenuncia