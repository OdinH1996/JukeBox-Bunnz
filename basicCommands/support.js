const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'fun server',
    execute(message, args) {
        const supportServerLink = "https://discord.gg/QmeXkAE84s";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Fun Server',
              url: 'https://discord.gg/QmeXkAE84s'
          })
            .setDescription(`➡️ **Join our Discord server for fun:**\n- Discord - ${supportServerLink}`)
            .setImage('https://img.freepik.com/premium-vector/draw-banner-white-bunny-easter-spring_45130-1618.jpg?w=1380')
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};

