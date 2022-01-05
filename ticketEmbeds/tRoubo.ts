import { MessageEmbed } from "discord.js";

const tRoubo = new MessageEmbed()
.setTitle('Item Theft')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'To return to the main menu of reactions, use !menu' })
.setDescription(
    '📋 No refunds for stolen items.\n\n' +
    'The server offers several ways for the player' +
    "to protect his assets and it's the player's  " +
    'responsibility to use the available mechanics.\n' +
    'The player must also have discernment not to trust strangers.'
)

export = tRoubo