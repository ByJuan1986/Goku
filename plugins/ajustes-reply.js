const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba ub texto mas en mensionar a alguien y escribir otro texto._\n\n• *Por ejemplo:*\n#${command} Hola que onda @${m.sender.split`@`[0]} Hola.`, { quoted: m })
  const cm = copy(m);
  let who;
  if (text.includes('@0')) who = '0@s.whatsapp.net';
  else if (m.isGroup) who = cm.participant = m.mentionedJid[0];
  else who = m.chat;
  if (!who) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba ub texto mas en mensionar a alguien y escribir otro texto._\n\n• *Por ejemplo:*\n#${command} Hola que onda @${m.sender.split`@`[0]} Hola.`}, null, {mentions: [m.sender]});
  cm.key.fromMe = false;
  cm.message[m.mtype] = copy(m.msg);
  const sp = '@' + who.split`@`[0];
  const [fake, ...real] = text.split(sp);
  conn.fakeReply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd(), m.isGroup ? m.chat : false, {
    contextInfo: {
      mentionedJid: conn.parseMention(real.join(sp).trim()),
    },
  });
};
handler.command = /^(smsfake|smsf)$/;
export default handler;

function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
