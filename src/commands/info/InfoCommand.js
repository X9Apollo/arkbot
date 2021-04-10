const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class InfoCommand extends BaseCommand {
  constructor() {
    super('info', 'info', []);
  }

    async run(client, message, args) {
        const infoEmbed = new Discord.MessageEmbed()
            .setTitle(`Server infomation for ${message.guild.name}`)
            .addField('Server Name', `${message.guild.name}`)
            .addField('Server Owner', `${message.guild.owner}`)
            .addField('Server Created', `${message.guild.createdAt}`)
            .addField('Channel Count', `${message.guild.channels.cache.size}`)
            .addField('Member Count', `${message.guild.memberCount}`)
            .addField('Region', `${message.guild.region}`)
            .addField('Bot Count', `${message.guild.size}`)
            .setFooter('Made By X9 APOLLO#6358')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
        message.channel.send(infoEmbed);

  }
}