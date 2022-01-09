import { MessageEmbed } from "discord.js";

const tPerda = new MessageEmbed()
  .setTitle("Loss of items")
  .setColor("ORANGE")
  .setURL("https://loja.cattaclysm.com")
  .setFooter({ text: "To return to the main menu of reactions, use !menu" })
  .setDescription(
    "📋 No refunds for lost items.\n\n" +
      "There are no ways to return lost or destroyed items.\n" +
      "Items are returned only when in updates, a bug" +
      "on a global scale occurs that affects all players on the server"
  );

export = tPerda;
