module.exports.run = async (msg, args, client) => {
    msg.channel.send(await client.generateInvite(8))
};

exports.info = {
    description: "Gives out an invite link for me.",
    level: 1,
    enabled: true,
    dm: true
};
