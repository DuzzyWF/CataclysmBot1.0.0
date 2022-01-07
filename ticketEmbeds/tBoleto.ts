import { MessageEmbed } from "discord.js";

const tBoleto = new MessageEmbed()
  .setTitle("Payment slips")
  .setColor("ORANGE")
  .setURL("https://loja.cattaclysm.com")
  .setFooter({ text: "To return to the main menu of reactions, use !menu" })
  .setDescription(
    "📋 Payment slips take up to 3 business days to clear.\n\n" +
      "The products are delivered automatically, so even with the presentation " +
      "of proof of payment, it will not be possible to activate your product before clearing."
  )
  .setFields({
    name: "Have 3 days already passed?",
    value:
      "If the 3 working days have passed and your product has not been delivered, click on the reaction below.",
  });

export = tBoleto;
