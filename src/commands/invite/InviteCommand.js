const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super('invite', 'invite', []);
  }

    async run(client, message, args) {
        const inviteEmbed = new Discord.MessageEmbed()
            .setAuthor(" Invite Link ")
            .setTitle('** Click To Invite The Bot To Your Server**')
            .addField("Use -help when its in your server \n for list of commands")
            .setURL('https://discord.com/api/oauth2/authorize?client_id=829107743536971776&permissions=8&scope=bot')
            .setFooter(`@${message.author.username} Requested The Invite.`).setTimestamp()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
        message.channel.send(inviteEmbed);
  }
}