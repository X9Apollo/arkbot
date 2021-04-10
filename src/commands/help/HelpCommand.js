const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'help', []);
  }

    async run(client, message, args) {
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle('**Commands**')
            .addField('Official Lookup', '-o <servernumber>')
            .addField('Smalls Lookup', '-s <servernumber>')
            .addField('Server Info', '-info')
            .addField('Avatar', '-av <@user>')
            .addField('Bot Ping', '-ping')
            .addField('Invite the Bot', '-invite')
            .addField('Test Command', '-test')
            .addField('Say Something', '-say <What you want to say>')
            .setFooter('Made by @X9 APOLLO#6358', 'https://cdn.discordapp.com/avatars/530888419891740675/478dbdc2464d2a93e76d12f5ed51a05b.webp')
        message.channel.send(helpEmbed);

    }
}