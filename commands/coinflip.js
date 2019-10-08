exports.perms = "pleb";
exports.run = (client, channel, context, message, self) => {
    client.say(channel, `${context['display-name']}, ${Math.floor(Math.random()*2)?"heads":"tails"}`)
}