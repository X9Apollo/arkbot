const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const snekfetch = require('snekfetch')

module.exports = class SmallsCommand extends BaseCommand {
  constructor() {
    super('s', 'iplookup', []);
  }

   async run(client, message, args) {
    snekfetch.get("http://arkdedicated.com/xbox/cache/officialserverlist.json").then(r => {
    let body = r.body;
    let server = Number(args[0]);  
    if(!server) return message.channel.send("Supply a server number");
    let e = body.find(cluster=>cluster.Name.endsWith("SmallTribes" + server) && cluster.ClusterId === "XboxSmallTribes");
    const resembed = new Discord.MessageEmbed().setTitle('Smalls Finder');
    resembed.addField("**"+e.Name+"**", '**IP: **``'+e.IP+'``\n**Port: **``'+e.Port+'``\n**Players: **``'+e.NumPlayers+'``\n**Map: **``'+e.MapName+'``', true)
    resembed.setFooter('Made by X9 APOLLO#6358', 'https://cdn.discordapp.com/avatars/530888419891740675/478dbdc2464d2a93e76d12f5ed51a05b.webp');
    message.channel.send(resembed);
  });
  }
}