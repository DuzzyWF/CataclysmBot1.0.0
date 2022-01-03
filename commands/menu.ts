import { Message, MessageReaction, TextChannel } from "discord.js";
import tBoleto from "../ticketEmbeds/tBoleto";
import tConexao from "../ticketEmbeds/tConexao";
import tDenuncia from "../ticketEmbeds/tDenuncia";
import tDoacao from "../ticketEmbeds/tDoacao";
import tMenu from "../ticketEmbeds/tMenu";
import tMetodo from "../ticketEmbeds/tMetodo";
import tPagamento from "../ticketEmbeds/tPagamento";
import tPerda from "../ticketEmbeds/tPerda";
import tReport from "../ticketEmbeds/tReport";
import tRoubo from "../ticketEmbeds/tRoubo";
import tSuporte from "../ticketEmbeds/tSuporte";
import tUnban from "../ticketEmbeds/tUnban";

export default {

    callback: (message: Message) => {

        message.delete();

        const id = (message.channel as TextChannel).parentId

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
        message.channel.send({ embeds: [tMenu] }).then( async (message: Message) => {

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
                    message.channel.send({ embeds: [tSuporte] }).then( async (message: Message) => {
                        message.react('🚔'),
                        message.react('😢'),
                        message.react('💻'),
                        message.react('🚨');

                        await message.awaitReactions({ filter, max: 1 }).then( async collected => {
                            const reaction = collected.first();

                            if (reaction?.emoji.name === '🚔') {
                                message.channel.send({ embeds: [tRoubo] })
                            }
                            else if (reaction?.emoji.name === '😢') {
                                message.channel.send({ embeds: [tPerda] })
                            }
                            else if (reaction?.emoji.name === '💻') {
                                message.channel.send({ embeds: [tConexao] })
                            }
                            else if (reaction?.emoji.name === '🚨') {
                                message.channel.send({ embeds: [tUnban] })
                            }
                        })
                    })
                }
                else if (reaction?.emoji.name === '🛑') {
                    message.channel.send({ embeds: [tDenuncia] })
                }
                else if (reaction?.emoji.name === '📛') {
                    message.channel.send({ embeds: [tReport] })
                }
                else if (reaction?.emoji.name === '💰') {
                    message.channel.send({ embeds: [tPagamento] }).then( async (message: Message) => {
                        message.react('🤝'),
                        message.react('💸');

                        await message.awaitReactions({ filter, max: 1 }).then( async collected => {
                            const reaction = collected.first();

                            if (reaction?.emoji.name === '🤝') {
                                message.channel.send({ embeds: [tDoacao] })
                            }
                            else if (reaction?.emoji.name === '💸') {
                                message.channel.send({ embeds: [tMetodo] }).then( async (message: Message) => {
                                    message.react('💳'),
                                    message.react('📄'),
                                    message.react('💵');

                                    await message.awaitReactions({ filter, max: 1 }).then( async collected => {
                                        const reaction = collected.first();

                                        if (reaction?.emoji.name === '💳') {
                                            message.channel.send('**Aguarde, um responsável entrará em contato.** <@847637326204764202>')
                                        }
                                        else if (reaction?.emoji.name === '💵') {
                                            message.channel.send('**Aguarde, um responsável entrará em contato.** <@847637326204764202>')
                                        }
                                        else if (reaction?.emoji.name === '📄') {
                                            message.channel.send({ embeds: [tBoleto] }).then( async (message: Message) => {
                                                message.react('🚨');

                                                await message.awaitReactions({ filter, max: 1 }).then( async collected => {
                                                    const reaction = collected.first();

                                                    if (reaction?.emoji.name === '🚨') {
                                                        message.channel.send('**Aguarde, um responsável entrará em contato.** <@847637326204764202>')
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
    }
    }
}