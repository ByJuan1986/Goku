let handler = async (m, { text, conn, usedPrefix, command }) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
if (!who) conn.reply(m.chat, `● _Ingrese el comando y mensione a un participante para bloquearlo o desbloquearlo de manera permanente._`, m, { mentions: [m.sender] })
let res = [];
console.log(command)
switch (command) {
case "block":
case "bloquear":		
if (who) await conn.updateBlockStatus(who, "block").then(() => {
res.push(who);
})
else conn.reply(m.chat, `● _Debe de mensionar a un usuario para bloquearlo permanentemente._\n\n• *Por ejemplo:*\n#${command} @${m.sender.split`@`[0]}`, m, { mentions: [m.sender] })
break
case "unblock":
case "desbloquear":
if (who) await conn.updateBlockStatus(who, "unblock").then(() => {
res.push(who);
})
else conn.reply(m.chat, `● _Debe de mensionar a un usuario para desbloquearlo permanentemente._\n\n• *Por ejemplo:*\n#${command} @${m.sender.split`@`[0]}`, m, { mentions: [m.sender] })
break
}
if (res[0]) conn.reply(m.chat, `✓ _¡Comando realizado con exito!_`, m, { mentions: res })
}
handler.command = /^(block|unblock|bloquear|desbloquear)$/i
handler.owner = true
export default handler
