import { MessageEmbed } from "discord.js";

const tUnban = new MessageEmbed()
  .setTitle("I got banned")
  .setURL("https://loja.cattaclysm.com")
  .setColor("ORANGE")
  .setFooter({ text: "To return to the main menu of reactions, use !menu" })
  .setDescription("📋 Follow the instructions in the image to get unbanned.")
  .setImage("https://i.imgur.com/MEp3iWr.png")
  .setFields({
    name: "Note:",
    value:
      "If you have made the donation, send the proof of payment and wait for it to arrive..\n" +
      "The evaluation and clearance of your case may take up to 24 hours.",
  });

export = tUnban;
