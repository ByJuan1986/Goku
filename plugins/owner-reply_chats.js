import {randomBytes} from 'crypto';
const handler = async (m, {conn, command, participants, usedPrefix, text}) => {
const mensajePrincipal = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5493873655168-5493873655135@g.us" } : {})},message: {"videoMessage": { "title": `MBMD : PRINCIPAL`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `︎MBMD : COMUNICADO`, 'jpegThumbnail': Imgs }}}
if (!text) return '❪ ✎ › Ingrese el comando y escriba un texto para enviar a todos los chats posibles que tenga el bot.';
  const cc4 = text ? m : m.quoted ? await m.getQuotedObj() : false || m;
  const teks4 = text ? text : cc4.text;
  const groups2 = Object.keys(await conn.groupFetchAllParticipating());
  const chats2 = Object.keys(global.db.data.users).filter((user) => user.endsWith('@s.whatsapp.net'));
  await conn.reply(m.chat, '❪ ✎ › Enviando mensaje a todos los chats posibles...', m);
  const start2 = new Date().getTime();
  const usersTag2 = participants.map((u) => conn.decodeJid(u.id));
  let totalPri2 = 0;
  for (let i = 0; i < groups2.length; i++) {
    const group = groups2[i];
    const delay = i * 4000; 
    setTimeout(async () => {
      await conn.reply(group, `⊹ ─ ⎔ *MENSAJE PRINCIPAL* ⎔ ─ ⊹\n\n${teks4}`, {mentions: usersTag2}, {quoted: mensajePrincipal});
    }, delay);
  }
  for (const user of chats2) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    await conn.reply(user, `⊹ ─ ⎔ *MENSAJE PRINCIPAL* ⎔ ─ ⊹\n\n${teks4}`, mensajePrincipal, null);
    totalPri2++;
    if (totalPri2 >= 500000) {
      break;
    }
  }
  const end2 = new Date().getTime();
  const totalPrivate2 = chats2.length;
  const totalGroups2 = groups2.length;
  const total2 = totalPrivate2 + totalGroups2;
  let time2 = Math.floor((end2 - start2) / 1000);
  if (time2 >= 60) {
    const minutes = Math.floor(time2 / 60);
    const seconds = time2 % 60;
    time2 = `${minutes} minutos y ${seconds} segundos`;
  } else {
    time2 = `${time2} segundos`;
  }
  await m.reply(`❪ ✓ › El mensaje fue enviado a ${totalPrivate2} chats privados y ${totalGroups2} chats grupales, en total serian ${total2} chats.\n`);
};
handler.command = /^(ofcsms)$/i;
handler.owner = true;
export default handler;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const randomID = (length) => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length);