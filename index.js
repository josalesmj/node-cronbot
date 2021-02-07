const CronJob = require('cron').CronJob;
const env = require('./.env');
const Telegram = require('telegraf/telegram');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

//s - segunndo
//m - minuto
//h - hora
//d - dia do mês 
//M - Mês
//D - Dia da semana
//s mm hh dd MM D
//Para auxiliar a montar as cron:https://crontab.guru/#0_18_*_*_1-5

console.log("Iniciado");

const telegram = new Telegram(env.token);
telegram.sendMessage(env.myId, 'Estou de pé');

const jobAbertura = new CronJob('0 7 * * 1-5', () => {
    telegram.sendMessage(env.myId, 'Im alive!');
}, null, true);

const jobFechamento = new CronJob('0 18 * * 1-5', () => {
    telegram.sendMessage(env.myId,'A mimir');
}, null, true);

const jobDomingo = new CronJob('45 10 * * 0', () => {
    telegram.sendMessage(env.myId,'Domingo');
}, null, true);



bot.start(ctx => {
    const from = ctx.update.message.from;
    console.log(from);
    ctx.reply(`Pronto e operante, ${from.first_name}!`);
});

bot.startPolling();



