import { Message, MessageReaction } from "discord.js";
import tConexao from "../ticketEmbeds/tConexao";
import tMenu from "../ticketEmbeds/tMenu";
import tSuporte from "../ticketEmbeds/tSuporte";
import tRoubo from "../ticketEmbeds/tRoubo";
import tPerda from "../ticketEmbeds/tPerda";
import tUnban from "../ticketEmbeds/tUnban";
import tDenuncia from "../ticketEmbeds/tDenuncia";
import tReport from "../ticketEmbeds/tReport";
import tPagamento from "../ticketEmbeds/tPagamento";
import tMetodo from "../ticketEmbeds/tMetodo";
import tBoleto from "../ticketEmbeds/tBoleto";
import tDoacao from "../ticketEmbeds/tDoacao";

export default {
    callback: (message: Message) => {

        message.delete(),
        message.guild?.channels.create(message.author.username, {
            type: 'GUILD_TEXT',
            position: 1,
        }).then((channel) => {
            channel.setParent('889516479396065340'),
            channel.permissionOverwrites.set([
                {
                    id: channel.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: message.author.id,
                    allow: [
                        'VIEW_CHANNEL', 
                        'SEND_MESSAGES', 
                        'ATTACH_FILES', 
                        'READ_MESSAGE_HISTORY'
                    ]
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
            ]),
            channel.send({
                content: `<@${message.author.id}>`,
                embeds: [tMenu]
            }).then( async (message: Message) => {

                message.react('🍀'),
                message.react('🛑'),
                message.react('📛'),
                message.react('💰');

                const filter = (reaction: MessageReaction) => {
                    return reaction.count > 1
                }

                await message.awaitReactions({ filter, max: 1 }).then( async collected => {
                    const reaction = collected.first();

                    if (reaction?.emoji.name === '🍀') {
                        channel.send({ embeds: [tSuporte] }).then( async (message: Message) => {
                            message.react('🚔'),
                            message.react('😢'),
                            message.react('💻'),
                            message.react('🚨');

                            await message.awaitReactions({ filter, max: 1 }).then( async collected => {
                                const reaction = collected.first();

                                if (reaction?.emoji.name === '🚔') {
                                    channel.send({ embeds: [tRoubo] })
                                }
                                else if (reaction?.emoji.name === '😢') {
                                    channel.send({ embeds: [tPerda] })
                                }
                                else if (reaction?.emoji.name === '💻') {
                                    channel.send({ embeds: [tConexao] })
                                }
                                else if (reaction?.emoji.name === '🚨') {
                                    channel.send({ embeds: [tUnban] })
                                }
                            })
                        })
                    }
                    else if (reaction?.emoji.name === '🛑') {
                        channel.send({ embeds: [tDenuncia] })
                    }
                    else if (reaction?.emoji.name === '📛') {
                        channel.send({ embeds: [tReport] })
                    }
                    else if (reaction?.emoji.name === '💰') {
                        channel.send({ embeds: [tPagamento] }).then( async (message: Message) => {
                            message.react('🤝'),
                            message.react('💸');

                            await message.awaitReactions({ filter, max: 1 }).then( async collected => {
                                const reaction = collected.first();

                                if (reaction?.emoji.name === '🤝') {
                                    channel.send({ embeds: [tDoacao] })
                                }
                                else if (reaction?.emoji.name === '💸') {
                                    channel.send({ embeds: [tMetodo] }).then( async (message: Message) => {
                                        message.react('💳'),
                                        message.react('📄'),
                                        message.react('💵');

                                        await message.awaitReactions({ filter, max: 1 }).then( async collected => {
                                            const reaction = collected.first();

                                            if (reaction?.emoji.name === '💳') {
                                                channel.send('**Aguarde, um responsável entrará em contato.** <@847637326204764202>')
                                            }
                                            else if (reaction?.emoji.name === '💵') {
                                                channel.send('**Aguarde, um responsável entrará em contato.** <@847637326204764202>')
                                            }
                                            else if (reaction?.emoji.name === '📄') {
                                                channel.send({ embeds: [tBoleto] }).then( async (message: Message) => {
                                                    message.react('🚨');

                                                    await message.awaitReactions({ filter, max: 1 }).then( async collected => {
                                                        const reaction = collected.first();

                                                        if (reaction?.emoji.name === '🚨') {
                                                            channel.send('**Aguarde, um responsável entrará em contato.** <@847637326204764202>')
                                                        }
                                                    })
                                                })
                                            }
                                        })
                                    })
                                }
                            })
                        })
                    }
                })
            }).catch(err => {
                console.error('WE FOUND AN ERROR!', err)
            });
        })
    },
}