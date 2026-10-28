const { Telegraf } = require('telegraf');
const express = require('express');
const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Bot1 Alive 24h 🥰'));
bot.on('text', (ctx) => ctx.reply('Message peyechi: ' + ctx.message.text));
bot.launch();
app.get('/', (req,res)=>res.send('Bot Running'));
app.listen(8000);
