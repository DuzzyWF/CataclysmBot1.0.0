import { Message, MessageEmbed, Snowflake, TextChannel } from "discord.js";

const prefix = "!";

export default {
  callback: (message: Message) => {
    message.delete();

    /**
     * #TODO: translate to english
     */
    const error = new MessageEmbed().setColor("ORANGE").setFields(
      {
        name: "Comando incorreto!",
        value: "Use !responder <id> <resposta>",
      },
      {
        name: "Exemplo:",
        value: "!responder 000000000000000000 Ótima ideia, será adicionado!a",
      }
    );

    const permission = new MessageEmbed().setColor("RED").setFields({
      name: "Sem permissão!",
      value: "Você não tem permissão para executar este comando!",
    });

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift()?.toLowerCase();

    const id = args.shift()?.toLowerCase();

    const response = args.join(" ");

    if (!message.member?.permissions.has("MANAGE_GUILD")) {
      message.channel.send({
        content: `<@${message.author.id}>`,
        embeds: [permission],
      });
    } else {
      if ((command === "responder" && !id && !response) || id?.length !== 18) {
        message.channel.send({
          content: `<@${message.author.id}>`,
          embeds: [error],
        });
      } else {
        const adminResponse = new MessageEmbed()
          .setAuthor({
            name: message.author.tag,
            iconURL: message.author.displayAvatarURL({ dynamic: true }),
          })
          .setColor("ORANGE")
          .setDescription(`${response}`);

        const channel = message.guild?.channels.cache.get(
          "925459036432920616"
        ) as TextChannel;

        channel.messages.fetch(id).then((msg) => {
          const playerEmbeds = msg.embeds[0];
          msg.edit({ embeds: [playerEmbeds, adminResponse] });
          msg.reactions.removeAll();
        });
      }
    }
  },
};
