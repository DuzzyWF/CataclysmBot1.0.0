import { MessageEmbed } from "discord.js";

const tReport = new MessageEmbed()
  .setTitle("Bug Reports")
  .setColor("ORANGE")
  .setURL("https://loja.cattaclysm.com")
  .setFooter({ text: "To return to the main menu of reactions, use !menu" })
  .setDescription(
    "📋 Reporting bugs can earn you rewards.\n\n" +
      "Bugs can happen at any time, especially after major" +
      "server updates. Unfortunately, it is not always " +
      "that our team is able to discover them in time.\n" +
      "Therefore we need the collaboration of the players to " +
      "report the bug and prevent future bug abuse."
  )
  .setFields({
    name: "Note:",
    value:
      "Describe the bug in as much detail as possible below.\n" +
      "An agent will contact you shortly about your reward.",
  });

export = tReport;
