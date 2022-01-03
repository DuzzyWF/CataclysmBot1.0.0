import { Message, MessageEmbed } from "discord.js";

export default {
    callback: (message: Message) => {

        const siteEmbed = new MessageEmbed()
        .setTitle('Site do servidor:')
        .setURL('https://loja.cattaclysm.com')
        .setColor('ORANGE')
        .setFooter({ text: 'Precisa de ajuda? Use !ticket', iconURL: 'https://i.imgur.com/aLxBo8H.png'})
        .setDescription(
            '📋 Clique no link abaixo para ir até o site.\n\n' +
            'https://loja.cattaclysm.com'
        )

        message.delete(),
        message.channel.send({ embeds: [siteEmbed] })
    },
}