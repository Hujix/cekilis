const fs = require('fs');
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://Project-Name.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();

const giveaways = require("discord-giveaways"),
settings = {
    prefix: "ç!",
    token: "NzQ1NzA1NTMyNDQ2NDc0Mjcw.Xz1qZQ.1_ipzStzAOrfgqxdxh7_UtSOlGM"
};


client.on('ready', () => {
    console.log("🎉 Çekiliş Bot Başladı 🎉");
    giveaways.launch(client, {
        updateCountdownEvery: 5000,
        botsCanWin: false,
        ignoreIfHasPermission: [
            "MANAGE_MESSAGES",
            "MANAGE_GUILD",
            "ADMINISTRATOR"
        ],
        embedColor: "#0a99ff",
        embedColorEnd: "#0a99ff",
        reaction: "🎉",
        storage: __dirname+"/giveaways.json"
    });
});


client.on("message", (message) => {
 
    const ms = require("ms"); 
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "başlat"){
     
 
                         let time = args[0];
                      let winners = args[1];
                      let prize = args.slice(2).join(" ")
                      if (!time || !winners || !prize) return message.reply(`Kullanım | Komutları : \n ç!başlat <zaman> <kazanacak sayısı> <ödül>`)
                      if (isNaN(winners)) return message.reply(`Kazanan **Sayılı** Olmalı ^-^`)
                      if (!time) return message.reply(`1s , 1m , 1h , 1w , 1mo`)
      
giveaways.start(message.channel, {
    time: ms(args[0]),
    prize: args.slice(2).join(" "),
    winnersCount: parseInt(args[1]),
    messages: {
        giveaway: "🎉  **Çekiliş** 🎉",
        giveawayEnded: "🎉 **Çekiliş Sonlandı!** 🎉",
        timeRemaining: "Bitiş Tarihi: **{duration}**!",
        inviteToParticipate: "Emojiye 🎉 Tıklayarak Katılın!",
        winMessage: "Tebrikler, {winners}! Ödül **{prize}**!",
        embedFooter: "Giveaways",
        noWinner: "Kazanan Olmadı.",
        winners: "Kazanan",
        endedAt: "Çekiliş Sona Erdi",
        units: {
            seconds: "Saniye",
            minutes: "Dakika",
            hours: "Saat",
            days: "Gün"
        }
    }
});
    }
});


client.on("message", (message) => {
 
    const ms = require("ms"); 
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "yenile"){
        let messageID = args[0];
      if(!messageID) messageID = "**None**";
        giveaways.reroll(messageID).then(() => {
            message.channel.send("Başarılı! Yeni Kazanan Değiştirildi!");
        }).catch((err) => {
            message.channel.send(""+messageID+" Kimliğine Sahip Bir Hediye Bulunamadı!");
        });
    }
 
});

client.on("message", (message) => {
 
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "düzenle"){
        let messageID = args[0];
        giveaways.edit(messageID, {
            newWinnersCount: 1,
            newPrize: "Yeni Ödül!",
            addTime: 5000
        }).then(() => {
            message.channel.send("Başarılı! Çekiliş Güncellendi!");
        }).catch((err) => {
                if(!messageID) messageID = "**None**";
            message.channel.send(""+messageID+" Kimliğine Sahip Bir Hediye Bulunamadı!");
        });
    }
 
});

client.on("message", (message) => {
 
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "bitir"){
        let messageID = args[0];
        giveaways.delete(messageID).then(() => {
            message.channel.send("Başarılı! Çekiliş Sonlandırıldı!");
        }).catch((err) => {
          if(!messageID) messageID = "**None**";
            message.channel.send(""+messageID+" Kimliğine Sahip Bir Hediye Bulunamadı!");
        });
    }
 
});

client.on("message", message => {
const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "yardım"){
let embed = new Discord.RichEmbed()
.setColor('BLUE')
.addField(`Selam! Ben Çekiliş Bot.`,`**Sunucularda Çekiliş Yapmaya Yararım ^-^**`)
.addField(`Çekiliş Komutlarım`,`

\`ç!başlat\` | \`ç!bitir\` | \`ç!düzenle\` | \`ç!yenile\`

`)
.addField(`__**Linkler**__`, `
[Beni Ekleyin!](http://gg.gg/cekilisbot) [Yada Burdan Beni Ekleyin!](http://bit.ly/cekilisbot)
[Destek Sunucum!](https://discord.gg/uACj3Yp)`)
.setThumbnail(client.user.avatarURL)
.setAuthor(`Çekiliş Bot`, client.user.avatarURL)
.setFooter(`2020 © Çekiliş Bot | Kodlayan Hujix | <@542348143379873792>`, client.user.avatarURL)
return message.channel.send(embed);
    }
 
})


client.login("NzQ1NzA1NTMyNDQ2NDc0Mjcw.Xz1qZQ.1_ipzStzAOrfgqxdxh7_UtSOlGM");