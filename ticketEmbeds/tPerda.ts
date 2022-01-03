import { MessageEmbed } from "discord.js";

const tPerda = new MessageEmbed()
.setTitle('Perda de itens')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'Para voltar ao menu principal de reações, use !menu' })
.setDescription(
    '📋 Não há devolução de itens perdidos.\n\n' +
    'Não há formas de devolução de itens perdidos ou destruídos.\n' +
    'Itens são devolvidos apenas quando em atualizações, ' +
    'um bug em escala global ocorre e afeta a todos os players do servidor.'
)

export = tPerda