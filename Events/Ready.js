const { ActivityType } = require("discord.js")
require("advanced-logs")

module.exports = client => {

    console.success(`${client.user.username} adlı hesaba başarıyla bağlanıldı.`)

    const statuses = [
        {
            name: `${client.user.username} canlı yayında!`,
            type: ActivityType.Streaming,
            url: "https://twitch.tv/samurayalone" // Geçerli bir yayın linki gerekiyor
        },
        {
            name: `Ravix Support hizmete hazır.`,
            type: ActivityType.Listening
        }
    ];

    let index = 0;

    setInterval(() => {
        const status = statuses[index];
        client.user.setPresence({
            activities: [{
                name: status.name,
                type: status.type,
                url: status.url || undefined
            }],
            status: 'online'
        });

        index = (index + 1) % statuses.length;
    }, 10000);
};
