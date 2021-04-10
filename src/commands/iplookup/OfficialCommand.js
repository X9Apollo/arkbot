const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const snekfetch = require('snekfetch')

module.exports = class OfficalCommand extends BaseCommand {
  constructor() {
    super('o', 'iplookup', []);
  }

  async run(client, message, args) {
      snekfetch.get("http://arkdedicated.com/xbox/cache/officialserverlist.json").then(r => {
          let body = r.body;
          let server = Number(args[0]);
          if (!server) return message.channel.send("Supply a server number");
          let e = body.filter(cluster => cluster.Name.endsWith(server) && cluster.ClusterId === "NewXboxPVP");
          const officialembed = new Discord.MessageEmbed().setTitle('Official Lookup');
          e.forEach(un => {
              officialembed.addField("**" + un.Name + "**", '**IP: **``' + un.IP + '``\n**Port: **``' + un.Port + '``\n**Players: **``' + un.NumPlayers + '``\n**Map: **``' + un.MapName + '``', true)
          })
          officialembed.setFooter('Made by X9 APOLLO#6358', 'https://cdn.discordapp.com/avatars/530888419891740675/478dbdc2464d2a93e76d12f5ed51a05b.webp');
          message.channel.send(officialembed);
      }); 
  }
}