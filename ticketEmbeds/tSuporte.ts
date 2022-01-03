import { MessageEmbed } from "discord.js";

const tSuporte = new MessageEmbed()
.setTitle('Como posso ajudar?')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setDescription(
    'Clique nas reações abaixo:\n\n' +
    '🏃 Itens roubados\n' +
    '😢 Itens perdidos\n' +
    '💻 Problemas de conexão\n' +
    '🚔 Fui banido'
)
.setFields(
    {
        name: 'Observação:',
        value: 'Caso o bot não solucione seu problema, aguarde o contato da equipe.\n' +
        'Não marque os membros da equipe na conversa.'
    }
)

export = tSuporte