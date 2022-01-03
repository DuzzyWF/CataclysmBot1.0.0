import { Message, MessageEmbed } from "discord.js";

export default {
    callback: (message: Message) => {

        const pixEmbed = new MessageEmbed()
        .setTitle('Método PIX:')
        .setURL('https://loja.cattaclysm.com')
        .setColor('ORANGE')
        .setDescription(
            '📋 Método de pagamento disponível no site.\nhttps://loja.cattaclysm.com'
        )
        .setFooter({ text: 'Precisa de ajuda? Use !ticket', iconURL: 'https://i.imgur.com/aLxBo8H.png'})

        message.delete(),
        message.channel.send({ embeds: [pixEmbed] })
    },
}