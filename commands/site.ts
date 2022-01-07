import { Message, MessageEmbed } from "discord.js";

export default {
  callback: (message: Message) => {
    const siteEmbed = new MessageEmbed()
      .setTitle("Server Website:")
      .setURL("https://loja.cattaclysm.com")
      .setColor("ORANGE")
      .setFooter({
        text: "Need Help? Contact us with !ticket",
        iconURL: "https://i.imgur.com/aLxBo8H.png",
      })
      .setDescription(
        "📋 Click on the link below to go to our site.\n\n" +
          "https://loja.cattaclysm.com"
      );

    message.delete(), message.channel.send({ embeds: [siteEmbed] });
  },
};
