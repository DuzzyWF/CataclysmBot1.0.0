import DiscordJS, { Intents, MessageEmbed } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents:
    [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

client.on('ready', () => {
    let handler = require('./command-handler')
    if (handler.default) handler = handler.default

    handler(client)
})

client.on('guildMemberAdd', (message) => {
    
    const welcomeEmbed = new MessageEmbed()
        .setColor('ORANGE')
        .setAuthor({ name: message.user.tag, iconURL: message.user.displayAvatarURL({dynamic: true})})
        .setDescription(`Novo user: <@${message.user.id}>`)
        .setFooter({ text: `${message.joinedAt}` })

    const welcomeChannel = message.guild.channels.cache.get('926520621620420659') as DiscordJS.TextChannel;
    welcomeChannel.send({ embeds: [welcomeEmbed] })
    
})

client.on('messageCreate', message => {

    if (
        message.channelId === '889373890902642749' ||
        message.channelId === '889949069018034237' ||
        message.channelId === '889949403329228860' ||
        message.channelId === '913216633303101440' ||
        message.channelId === '925459036432920616' ||
        message.channelId === '925952422466191400' ||
        message.channelId === '922147404625621062'
    ) { if ( message.content.includes('https://') ) { message.delete(); } }
})

client.login(process.env.TOKEN)