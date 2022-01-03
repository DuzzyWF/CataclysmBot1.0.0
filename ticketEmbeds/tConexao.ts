import { MessageEmbed } from "discord.js";

const tConexao = new MessageEmbed()
.setTitle('Problemas de conexão')
.setColor('ORANGE')
.setURL('https://loja.cattaclysm.com')
.setFooter({ text: 'Para voltar ao menu principal de reações, use !menu' })
.setDescription(
    '📋 Utilize todos os IPs abaixo.\n\n' +
    '1. cattaclysm.com\n' +
    '2. jogar.cattaclysm.com\n' +
    '3. 200.9.154.72:10005\n\n' +
    'Caso ainda sim não consiga estabelecer conexão, reinicie seu modem e sua máquina.'
)
.setFields(
    {
        name: 'Anti-bot:',
        value: 'Conexões com proxy são bloqueadas pelo anti-bot.\n' + 
        'Se você possui VPN ou proxys ativos, desative-os.\n' +
        'Dica: Use o Google.'
    }
)

export = tConexao