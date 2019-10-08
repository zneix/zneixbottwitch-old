//npm libs
const tmi = require('tmi.js');

//utils
let utils = require('./src/utils/client');
let handlers = require('./src/utils/handlers');
let config = require('./src/json/config.json');

//client declaration
let client = new tmi.client(utils.options);
client.config = config;
handlers.events(client);
client.commands = handlers.commands;

//connecting to Twitch servers
client.connect();