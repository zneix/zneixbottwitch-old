module.exports = (client, channel, context, message, self) => {
    //logging messages DatSheffy
    switch(context['message-type']){
        case "action":
            console.log(`(${channel}) ${context['display-name']}: /me ${message}`);
            break;
        case "chat":
            console.log(`(${channel}) ${context['display-name']}: ${message}`);
            break;
        case "whisper":
            console.log(`(/whisper) ${context['display-name']}: ${message}`);
            break;
        default:
            console.log(`(??? ${context['message-type']}) ${context['display-name']}: ${message}`);
    }
    //trying to handle commands
    try {
        //handling commands
        if (message.toLowerCase().startsWith(client.config.prefix.toLowerCase()) && !self) {
            //finding a command
            let cmd = client.commands.get(message.split(/ +/g).shift(1).slice(client.config.prefix.length).toLowerCase());
            if (!cmd) return; //escape on wrong command
            //permission handler
            if (cmd.perms === "zneix" && context.username !== "zneix") return;
            context.args = message.slice(client.config.prefix.length).split(/ +/g).slice(1);
            //execution
            cmd.run(client, channel, context, message, self);
        }
        //handling messages
        else {
            return; //disabled for now
        }
    }
    //catching any errors
    catch (err) {
        console.log(`[ERROR!!!] ${err}`);
    }
}