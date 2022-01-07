import { Message, MessageEmbed } from "discord.js";

export default {
  callback: (message: Message) => {
    const unbanEmbed = new MessageEmbed()
      .setTitle("Unban:")
      .setURL("https://loja.cattaclysm.com")
      .setColor("ORANGE")
      .setFooter({
        text: "Need Help? Contact us with !ticket",
        iconURL: "https://i.imgur.com/aLxBo8H.png",
      })
      .setDescription(
        "📋 Follow the instructions in the image to get unbanned."
      )
      .setImage("https://i.imgur.com/MEp3iWr.png");

    message.delete(), message.channel.send({ embeds: [unbanEmbed] });
  },
};
