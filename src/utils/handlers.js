const fs = require('fs');
const enmap = require('enmap');

exports.events = function(client){
    fs.readdir('./events', (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            let event = require(`../../events/${file}`);
            let name = file.split('.')[0];
            client.on(name, event.bind(null, client));
            delete require.cache[require.resolve(`../../events/${file}`)];
        });
    });
    console.log('[handler] Events loaded!');
};
let commands = new enmap();
fs.readdir('./commands', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`../../commands/${file}`);
        let name = file.split('.')[0];
        commands.set(name, props);
    });
});

exports.commands = commands;