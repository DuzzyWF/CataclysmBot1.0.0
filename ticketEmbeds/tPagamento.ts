import { MessageEmbed } from "discord.js";

const tPagamento = new MessageEmbed()
.setTitle('Pagamentos')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'Para voltar ao menu principal de reações, use !menu' })
.setDescription(
    '📋 Selecione uma opção abaixo.\n\n' +
    '🤝 Como funciona o pagamento\n' +
    '💸 Produto não foi recebido\n'
)

export = tPagamento