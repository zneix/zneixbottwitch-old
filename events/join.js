module.exports = (client, channel, username, self) => {
    if (self) {
        console.log(`[join] Joined channel ${channel}`);
    }
}