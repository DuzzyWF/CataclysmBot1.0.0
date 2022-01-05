import { Message, MessageEmbed } from "discord.js";

export default {
    callback: (message: Message) => {

        const voteEmbed = new MessageEmbed()
        .setTitle('Vote in our Server:')
        .setURL('https://loja.cattaclysm.com')
        .setColor('ORANGE')
        .setFooter({ text: 'Need Help? Contact us with !ticket', iconURL: 'https://i.imgur.com/aLxBo8H.png'})
        .setDescription(
            '📋 Click on the links below and enter your nickname.\n\n' +
            '1. https://cutt.ly/nncv7zC\n2. https://cutt.ly/wncv3N8\n3. https://cutt.ly/cncv0Ar\n4. https://cutt.ly/6ncv1zT'
        )
        .addFields(
            {
                name: "I didn't receive my vote:",
                value: "Whenever you vote, enter your exact same nickname and wait for the site's confirmation before closing it"
            }
        )

        message.delete(),
        message.channel.send({ embeds: [voteEmbed] })
    },
}