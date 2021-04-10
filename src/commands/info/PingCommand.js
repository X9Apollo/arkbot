const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class PingCommand extends BaseCommand {
    constructor() {
        super('ping', 'info', []);
    }

    async run(client, message, args) {
        message.channel.send("Getting ping..").then((msg) => {
            let ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit("**Bot Latency is **" + ping + "ms\n**API Latency is **" + Math.round(client.ws.ping) + "ms");
            message.channel.send("***Powered by X9 Apollo***");
        }
        )
    }
}