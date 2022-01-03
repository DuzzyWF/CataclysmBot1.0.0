import { MessageEmbed } from "discord.js";

const tDenuncia = new MessageEmbed()
.setTitle('Denúncias')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'Para voltar ao menu principal de reações, use !menu' })
.setDescription(
    '📋 Denúncias sem provas não serão analisadas.\n\n' +
    'Para realizar uma denúncia você deve ter em mãos provas ' +
    'para sustentar seus argumentos. Do contrário, seu caso ' +
    'não será analisado pela nossa equipe.\n' +
    'ATENÇÃO: Testemunhas não são provas.'
)

export = tDenuncia