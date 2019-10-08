exports.perms = "zneix";
exports.run = async (client, channel, context, message, self) => {
    function clean(text){
        text.replace(/\s/, ' ');
        return text;
    }
    try {
        let code = context.args.join(' ');
        let evaled = await eval(code);
        if (typeof evaled !== "string") evaled = require('util').inspect(evaled);
        client.say(channel, `${context['display-name']}, ${clean(evaled).substr(0, 480)}`);
    }
    catch (err) {
        client.say(channel, `${context['display-name']}, error while evaling your dank code! monkaS 👉 ${err}`);
    }
}