import { MessageEmbed } from "discord.js";

const tDoacao = new MessageEmbed()
.setTitle('Realizando pagamentos')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'Para voltar ao menu principal de reações, use !menu' })
.setDescription(
    '📋 Entenda como funcionam os pagamentos e seus termos.\n\n' +
    'Os pagamentos ao servidor seguem um modelo de doação.\n' +
    'No modelo de doação você não está contratando nossos serviços e nem pagando por eles.\n' +
    'Você está apenas incentivando o crescimento do servidor e em troca recebe benefícios.\n'
)
.setFields(
    {
        name: 'Sem reembolso:',
        value: 'Seguindo o modelo de doação, você concorda que seu dinheiro não será reembolsado.\n' +
        'Você pode visualizar os termos com mais detalhes ao visitar o site onde os pagamentos são efetuados.'
    },
    {
        name: 'Pagamento:',
        value: 'Os pagamentos são realizados apenas através do site do servidor utilizando a plataforma de sua escolha.\n' +
        'PagSeguro, Paypal, MercadoPago ou Juno.\n' +
        'Boleto, Pix e Cartão de crédito.\n' +
        'SITE: https://loja.cattaclysm.com'
    }
)

export = tDoacao