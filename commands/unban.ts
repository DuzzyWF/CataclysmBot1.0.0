import { Message, MessageEmbed } from "discord.js";

export default {
    callback: (message: Message) => {

        const unbanEmbed = new MessageEmbed()
        .setTitle('Volte ao servidor:')
        .setURL('https://loja.cattaclysm.com')
        .setColor('ORANGE')
        .setFooter({ text: 'Precisa de ajuda? Use !ticket', iconURL: 'https://i.imgur.com/aLxBo8H.png'})
        .setDescription(
            '📋 Siga as instruções da imagem para ser desbanido.'
        )
        .setImage('https://i.imgur.com/MEp3iWr.png')

        message.delete(),
        message.channel.send({ embeds: [unbanEmbed] })
    },
}