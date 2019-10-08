module.exports = (client, channel, username, self) => {
    if (self) {
        console.log(`[part] Left channel ${channel}`);
    }
}