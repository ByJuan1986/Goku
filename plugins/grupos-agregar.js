let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
if (!global.db.data.settings[conn.user.jid].restrict) return conn.sendMessage(m.chat, {text: `⪩ _Lo siento, este comando solo puede ser ejecutado si las restricciones en este proyecto esten activas._`}, { quoted: m })
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba el numero completo de una persona para invitarlo a este grupo._\n- _Recuerde no usar el simbolo internacional ( + ) para escribir el numero._\n\n• *Por ejemplo:*\n#${command} 5493873655135`}, { quoted: m })
if (text.includes('+')) return conn.sendMessage(m.chat, {text: `⪩ _El numero ingresado es incorrecto, recuerde que no debe llevar el simbolo +, tambien tiene que ser el numero completo del (54) todo junto._`}, { quoted: m })
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
await conn.reply(text+'@s.whatsapp.net', `- *_¡Hola!_*\n- _Alguien te ha invitado a unirte a un grupo._\n\n• ¡Te estamos esperando!\n- ${link}`, m, {mentions: [m.sender]})
conn.sendMessage(m.chat, {text: `✓ _Se ha enviado el enlace de invitacion con exito al numero:_ @${who.split`@`[0]}`}, { quoted: m })
}
handler.command = /^(add|añadir)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
