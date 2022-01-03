import { Message, MessageEmbed, TextChannel } from "discord.js";

const prefix = '!';

export default {

    callback: (message: Message) => {

        message.delete();

        const error = new MessageEmbed()
        .setColor('ORANGE')
        .setFields(
            {
                name: 'Comando incorreto!',
                value: 'Use !sugerir <sugestão>'
            },
            {
                name: 'Exemplo:',
                value: '!sugerir Adicionar mais itens no mercado'
            }
        )

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift()?.toLowerCase();

        const sugest = args.join(' ');

        if (command === 'sugerir' && !sugest) {
            message.channel.send({ content: `<@${message.author.id}>`, embeds: [error] })
        }

        else {

            const playerSugestion = new MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({dynamic: true}) })
            .setColor('ORANGE')
            .setDescription(`${sugest}`)
            
            const channel = message.guild?.channels.cache.get('925459036432920616') as TextChannel
            channel.send({ embeds: [playerSugestion] }).then((message) => {
                message.react('✅'),
                message.react('❎');
            })
        }
    },
}