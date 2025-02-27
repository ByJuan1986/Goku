let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensiona a un usuario premium para quitar su puesto premium._\n\n• *Por ejemplo:*\n#${command} @${m.sender.split`@`[0]}` }, { quoted: m })
if (!global.prems.includes(who.split`@`[0])) return conn.sendMessage(m.chat, { text: `● _El usuario mensionado no es un usuario premium._` }, { quoted: m })
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.sendMessage(m.chat, { text: `✓ _El usuario @${who.split`@`[0]} fue descartado de los usuarios premium con exito._` }, { quoted: m })
}
handler.command = ["deleteprem", "noprem"]
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.owner = true
export default handler
