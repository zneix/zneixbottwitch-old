let auth = require('../json/auth');
let config = require('../json/config.json');
exports.options = {
    options: {
        clientId: auth.clientId
    },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: auth.username,
        password: auth.password
    },
    channels: config.channels
}