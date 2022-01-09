import { MessageEmbed } from "discord.js";

const tSuporte = new MessageEmbed()
  .setTitle("How can i help?")
  .setColor("ORANGE")
  .setURL("https://loja.cattaclysm.com")
  .setDescription(
    "Click on the reactions below:\n\n" +
      "🏃 Stolen Items\n" +
      "😢 Lost Items\n" +
      "💻 Connection problems\n" +
      "🚔 I got banned"
  )
  .setFields({
    name: "Note:",
    value:
      "If the bot does not solve your problem, wait for the team to contact you.\n" +
      "Don't tag team members in the chat.",
  });

export = tSuporte;
