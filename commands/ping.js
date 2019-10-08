exports.perms = "pleb";
exports.run = (client, channel, context, message, self) => {
    client.ping()
    .then(ping => client.say(channel, `monkaS 👉 ${ping.toString()*1000}ms`))
    .catch(err => console.log(err));
}