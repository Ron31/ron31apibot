const Discord   = require("discord.js");
//const Canvas = require("canvas");
module.exports.run = async (msg, args, client) => {
    /*let picture;
    let text1;
    if(msg.mentions.members.first()) {
        picture = msg.mentions.users.first().displayAvatarURL+"?size=128";
        text1 = await args.join(" ").replace(`<@!${msg.mentions.members.first().id}>`, "").replace(`<@${msg.mentions.members.first().id}>`, "");
    } else {
        text1 = await args.join(" ");
        picture = "https://cdn.discordapp.com/emojis/495931857620434944.png?v1";
    }
        let Image = await Canvas.Image;
        let canvas = await new Canvas.Canvas(960, 173);
        let ctx = await canvas.getContext("2d");

        const achievementbg = new Image();
        achievementbg.onload = () => ctx.drawImage(achievementbg, 0, 0);
        achievementbg.onerror = (err) => { throw err; };
        achievementbg.src = "./res/img/achievementget.png";

        ctx.fillStyle = "#212121";
        ctx.fillRect(30,30,900,130);

        const imgg = new Image();
        imgg.onload = () => ctx.drawImage(imgg, 30, 30, 115, 115);
        imgg.onerror = (err) => { throw err; };
        let request = await require('snekfetch').get(picture);
        let avatarbuffer = request.body;
        const text = text1;

        ctx.font = "45px Minecraftia";
        ctx.fillStyle = "#fffd3e";
        ctx.fillText("Achievement Get!", 170, 75);
        ctx.fillStyle = "white";
        ctx.fillText(text, 170, 135);

        imgg.src = avatarbuffer;

        let finalimage= await canvas.toBuffer();

        msg.channel.send("", {
        "file": Buffer.from(finalimage)
    });*/

    msg.channel.send("This command will exported to a extra bot with more image commands.")
};

module.exports.info = {
    description: "Generates a minecraft achievement -> 'Disabled'",
    level: 0,
    enabled: true,
    usage: ["<some text>", "@user <some text>"],
    alias: ["achievment"]
};
