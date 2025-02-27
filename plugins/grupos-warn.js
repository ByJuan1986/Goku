const handler = async (m, {conn, text, command, usedPrefix}) => {
if (m.mentionedJid.includes(conn.user.jid)) return;
let who;
if (m.isGroup) { who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text } else who = m.chat;
const user = global.db.data.users[who];
const bot = global.db.data.settings[conn.user.jid] || {};
const dReason = 'No especificado';
const msgtext = text || dReason;
const sdms = msgtext.replace(/@\d+-?\d* /g, '');
if (!who) {
return conn.sendMessage(m.chat { text: `Ingrese el comando y mensione o responda a un usuario para darle una advertencia.` }, { quoted: m });
}
user.warn += 1;
await conn.sendMessage(m.chat, { text: `_Hola ${user.warn == 1 ? `@${who.split`@`[0]}` : `@${who.split`@`[0]}`}, has recibido una advertencia por parte de los admins._\n\n- *RAZON:* ${sdms}\n\n- Tienes ${user.warn} advertencias, si superas a los 3, seras eliminado/a.` }, { quoted: m });
if (user.warn >= 3) {
if (!bot.restrict) {
return conn.sendMessage(m.chat, { text: `● _Lo siento, no puedo realizar estas acciones debido a que las restricciones estan desactivadas._\n\n- _Puedes ver los activadores para activarlo con el comando:_ *#ajustes*` }, { quoted: m });
}
user.warn = 0;
await conn.sendMessage(m.chat, {text: `Hola participante, debido a que superaste las advertencias, seras eliminado de inmediato por incumplimiento en las reglas establecidas en este chat.`}, { quoted: m })
await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
}
return !1
};
handler.command = /^(warn|warning|warn_user)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
