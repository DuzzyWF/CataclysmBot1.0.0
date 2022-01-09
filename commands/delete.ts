import { Message, MessageEmbed, TextChannel } from "discord.js";

export default {
  callback: (message: Message) => {
    message.delete();

    const id = (message.channel as TextChannel).parentId;

    const closeEmbed = new MessageEmbed()
      .setColor("ORANGE")
      .setFooter({ text: "TO DELETE THE TICKET PRESS ✅" });

    if (
      id === "889369640067805194" ||
      id === "896341301304373248" ||
      id === "903980003526602762" ||
      id === "910129464665571369" ||
      id === "917065044162924614" ||
      id === "911763982728167505" ||
      id === "925465219935895664" ||
      id === "925957333857738813"
    )
      return;
    else {
      message.channel.send({ embeds: [closeEmbed] }).then((message) => {
        message.react("✅");
        const closeCollector = message.createReactionCollector({ max: 2 });

        closeCollector.on("end", () => {
          message.channel.delete();
        });
      });
    }
  },
};
