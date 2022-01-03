import { Message, MessageEmbed } from "discord.js";

export default {
    callback: (message: Message) => {

        const ipEmbed = new MessageEmbed()
        .setTitle('IPs do servidor:')
        .setURL('https://loja.cattaclysm.com')
        .setColor('ORANGE')
        .setFooter({ text: 'Precisa de ajuda? Use !ticket', iconURL: 'https://i.imgur.com/aLxBo8H.png'})
        .setDescription(
            '📋 Copie e cole os endereços abaixo:\n\n' +
            '1. cattaclysm.com\n2. jogar.cattaclysm.com\n3. 200.9.154.72:10005\n'
        )
        .addFields(
            {
                name: 'Problema de conexão:',
                value: 'Caso não consiga realizar a conexão com nenhum' +
                ' dos IPs acima, reinicie seu modem e seu computador.'
            }
        )

        message.delete(),
        message.channel.send({ embeds: [ipEmbed] })
    },
}