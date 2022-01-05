import { MessageEmbed } from "discord.js";

const tDoacao = new MessageEmbed()
.setTitle('Carrying out payments')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'To return to the main menu of reactions, use !menu' })
.setDescription(
    '📋 Understand how payments work and their terms.\n\n' +
    'The payments to the server follow a donation model.\n' +
    'In the donation model you are neither contracting our services nor paying for them.\n' +
    'You are only encouraging the growth of the server and in return you receive benefits.\n'
)
.setFields(
    {
        name: 'No Refunds:',
        value: 'By following the donation model, you agree that your money will not be refunded.\n' +
        'You can view the terms in more detail by visiting our website where the payments are made.'
    },
    {
        name: 'Payment:',
        value: "Payments are made only through the server's site using the platform of your choice.\n" +
        'Paypal.\n' +
        'Payment slip or Credit Card.\n' +
        'WEBSITE: https://loja.cattaclysm.com'
    }
)

export = tDoacao