import { MessageEmbed } from "discord.js"

const tUnban = new MessageEmbed()
.setTitle('Fui banido')
.setURL('https://loja.cattaclysm.com')
.setColor('ORANGE')
.setFooter({ text: 'Para voltar ao menu principal de reações, use !menu' })
.setDescription(
    '📋 Siga as instruções da imagem para ser desbanido.'
)
.setImage('https://i.imgur.com/MEp3iWr.png')
.setFields(
    {
        name: 'Observações:',
        value: 'Caso tenha efetuado a doação, envie o comprovante e aguarde.\n' +
        'A avaliação e liberação do seu caso pode levar até 24 horas.'
    }
)

export = tUnban