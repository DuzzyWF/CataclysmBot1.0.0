import { Message, MessageEmbed } from "discord.js";

export default {
    callback: (message: Message) => {

        const voteEmbed = new MessageEmbed()
        .setTitle('Links de votos:')
        .setURL('https://loja.cattaclysm.com')
        .setColor('ORANGE')
        .setFooter({ text: 'Precisa de ajuda? Use !ticket', iconURL: 'https://i.imgur.com/aLxBo8H.png'})
        .setDescription(
            '📋 Clique nos links abaixo e insira seu nick.\n\n' +
            '1. https://cutt.ly/nncv7zC\n2. https://cutt.ly/wncv3N8\n3. https://cutt.ly/cncv0Ar\n4. https://cutt.ly/6ncv1zT'
        )
        .addFields(
            {
                name: 'Não recebi meu voto:',
                value: 'Sempre que for votar, insira seu nick exatamente igual ao' +
                ' utilizado in-game e aguarde a confirmação do site antes de fecha-lo.'
            }
        )

        message.delete(),
        message.channel.send({ embeds: [voteEmbed] })
    },
}