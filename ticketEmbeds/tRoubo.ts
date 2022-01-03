import { MessageEmbed } from "discord.js";

const tRoubo = new MessageEmbed()
.setTitle('Roubo de itens')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'Para voltar ao menu principal de reações, use !menu' })
.setDescription(
    '📋 Não há devolução de itens roubados.\n\n' +
    'O servidor oferece diversas formas para que o player ' +
    'consiga proteger aos seus bens e é responsabilidade ' +
    'do player utilizar-se das mecânicas disponíveis.\n' +
    'O player deve também possuir discernimento para não confiar em estranhos.'
)

export = tRoubo