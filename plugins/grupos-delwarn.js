const handler = async (m, {conn, text, command, usedPrefix}) => {
  const pp = mxImgs;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
  else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (!who) return conn.sendMessage(m.chat, { text: `⪩ Ingrese el comando y mensione o responda a un participante que tenga advertencias para quitarlo.` }, { quoted: m });
  if (m.mentionedJid.includes(conn.user.jid)) return;
  if (user.warn == 0) return conn.sendMessage(m.chat, { text: '⪩ El participante mensionado tiene 0 advertencias.'}, { quoted: m });
  user.warn -= 1;
  await conn.sendMessage(m.chat, {text: `_Hola ${user.warn == 1 ? `@${who.split`@`[0]}` : `@${who.split`@`[0]}`}, se ha descartado una advertencia tuya._\n\n- _Solo se puede quitar una sola advertencia por dia si tienes mas advertencias._\n\n- *\`ADVERTENCIA ACTUAL:\`* ${user.warn}`}, { quoted: m });
};
handler.command = /^(delete_warn|del_warn|dwarn)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;