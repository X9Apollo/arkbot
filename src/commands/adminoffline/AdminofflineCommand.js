const { User } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AdminofflineCommand extends BaseCommand {
  constructor() {
    super('adminoffline', 'adminoffline', []);
  }

    run(client, message, args) {
        message.channel.send('Ok Apollo, Bot is Going Offline');
  }
}