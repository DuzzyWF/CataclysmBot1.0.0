import { Message, MessageEmbed } from "discord.js";

export default {
    callback: (message: Message) => {

        const ipEmbed = new MessageEmbed()
        .setTitle('Server IP Adresses:')
        .setURL('https://loja.cattaclysm.com')
        .setColor('ORANGE')
        .setFooter({ text: 'In need of any help? Contact us with !ticket', iconURL: 'https://i.imgur.com/aLxBo8H.png'})
        .setDescription(
            '📋 Copy and paste any of the following IP adresses:\n\n' +
            '1. cattaclysm.com\n2. jogar.cattaclysm.com\n3. 200.9.154.72:10005\n'
        )
        .addFields(
            {
                name: 'Connection Problem:',
                value: 'In case of none of the IP Adresses work' +
                ' try rebooting your PC or your modem.'
            }
        )

        message.delete(),
        message.channel.send({ embeds: [ipEmbed] })
    },
}