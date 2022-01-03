import { MessageEmbed } from "discord.js";

const tBoleto = new MessageEmbed()
.setTitle('Boletos bancários')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'Para voltar ao menu principal de reações, use !menu' })
.setDescription(
    '📋 Boletos bancários levam até 3 dias úteis para serem compensados.\n\n' +
    'Os produtos são entregues de forma automática, então mesmo com a apresentação ' +
    'do comprovante de pagamento, não será possível ativar seu produto antes da compensação.'
)
.setFields(
    {
        name: 'Se passaram os 03 dias?',
        value: 'Caso os 03 dias úteis tenham passado e seu produto não tenha sido entregue, clique na reação abaixo.'
    }
)

export = tBoleto