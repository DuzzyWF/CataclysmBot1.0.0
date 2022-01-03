import { Message, MessageEmbed, TextChannel } from "discord.js";

export default {
    callback: (message: Message) => {

        message.delete();

        const id = (message.channel as TextChannel).parentId

        const closeEmbed = new MessageEmbed()
        .setColor('ORANGE')
        .setFooter({ text: 'CLIQUE EM ✅ PARA FINALIZAR O TICKET' })

        if (
            id === '889369640067805194' ||
            id === '896341301304373248' ||
            id === '903980003526602762' ||
            id === '910129464665571369' ||
            id === '917065044162924614' ||
            id === '911763982728167505' ||
            id === '925465219935895664' ||
            id === '925957333857738813'
        ) return

        else {
            message.channel.send({ embeds: [closeEmbed] }).then((message) => {

                message.react('✅');
                const closeCollector = message.createReactionCollector({ max:2 });

                closeCollector.on('end', () => {

                    (message.channel as TextChannel).setParent('889516542981701712')

                    .then((message) => {

                        message.permissionOverwrites.set([
                            {
                                id: message.guild.roles.everyone,
                                deny: ['VIEW_CHANNEL']
                            },
                            {
                                id: '889365311399280650',
                                allow: [
                                    'VIEW_CHANNEL', 
                                    'SEND_MESSAGES', 
                                    'ATTACH_FILES', 
                                    'READ_MESSAGE_HISTORY',
                                    'MANAGE_MESSAGES',
                                    'MENTION_EVERYONE'
                                ]
                            },
                            {
                                id: '909543743965761536',
                                allow: [
                                    'VIEW_CHANNEL', 
                                    'SEND_MESSAGES', 
                                    'ATTACH_FILES', 
                                    'READ_MESSAGE_HISTORY',
                                    'MENTION_EVERYONE'
                                ]
                            }
                        ])

                        const deleteEmbed = new MessageEmbed()
                        .setColor('ORANGE')
                        .setFooter({ text: 'Use !delete para deletar o ticket.'})

                        message.send({ embeds: [deleteEmbed] })
                    })

                })
            })
        }
    },
}