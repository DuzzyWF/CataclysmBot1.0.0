import { Message, MessageEmbed, TextChannel } from "discord.js";

const prefix = "!";

export default {
  callback: (message: Message) => {
    message.delete();

    const error = new MessageEmbed().setColor("ORANGE").setFields(
      {
        name: "Incorrect command!",
        value: "Use !suggest <suggestion>",
      },
      {
        name: "Exemplo:",
        value: "!suggest Adicionar mais itens no mercado",
      }
    );

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();

    const sugest = args.join(" ");

    if (command === "suggest" && !sugest) {
      message.channel.send({
        content: `<@${message.author.id}>`,
        embeds: [error],
      });
    } else {
      const playerSugestion = new MessageEmbed()
        .setAuthor({
          name: message.author.tag,
          iconURL: message.author.displayAvatarURL({ dynamic: true }),
        })
        .setColor("ORANGE")
        .setDescription(`${sugest}`);

      const channel = message.guild?.channels.cache.get(
        "925459036432920616"
      ) as TextChannel;
      channel.send({ embeds: [playerSugestion] }).then((message) => {
        message.edit({
          embeds: [playerSugestion.addField("ID suggest:", message.id)],
        });
        message.react("✅"), message.react("❎");
      });
    }
  },
};
