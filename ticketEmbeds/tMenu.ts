import { MessageEmbed } from "discord.js";

const tMenu = new MessageEmbed()
.setTitle('Como posso ajudar?')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setDescription(
    'Clique nas reações abaixo:\n\n' +
    '🍀 Suporte\n' +
    '🛑 Denuncias\n' +
    '📛 Reportar bugs\n' +
    '💰 Pagamentos\n' +
    '📚 Outros'
)
.setFields(
    {
        name: 'Observação:',
        value: 'Caso o bot não solucione seu problema, aguarde o contato da equipe.\n' +
        'Não marque os membros da equipe na conversa.'
    }
)

export = tMenu