import { MessageEmbed } from "discord.js";

const tReport = new MessageEmbed()
.setTitle('Reportar bugs')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'Para voltar ao menu principal de reações, use !menu' })
.setDescription(
    '📋 Reportando bugs você pode ganhar recompensas.\n\n' +
    'Bugs podem acontecer a qualquer momento, principalmente ' +
    'após grandes atualizações no servidor, mas infelizmente ' +
    'não é sempre que nossa equipe consegue descobri-los a tempo.\n' +
    'Por esse motivo precisamos da colaboração dos players para ' +
    'reportarem o bug e evitar que futuramente haja um abuso de bugs.'
)
.setFields(
    {
        name: 'Observação:',
        value: 'Descreva o bug com o máximo de detalhes possível logo abaixo.\n' +
        'Em breve um responsável entrará em contato sobre a sua recompensa.'
    }
)

export = tReport