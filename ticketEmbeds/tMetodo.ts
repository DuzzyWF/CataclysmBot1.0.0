import { MessageEmbed } from "discord.js";

const tMetodo = new MessageEmbed()
.setTitle('Atraso na entrega')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'Para voltar ao menu principal de reações, use !menu' })
.setDescription(
    '📋 Selecione abaixo qual foi o método de pagamento.\n\n' +
    '💳 Cartão de crédito\n' +
    '📄 Boleto bancário\n' +
    '💵 Pix'
)

export = tMetodo