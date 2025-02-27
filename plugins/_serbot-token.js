import fs from "fs"
let handler = async (m, { conn, usedPrefix }, args, command) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let uniqid = `${who.split`@`[0]}`
try {
if(global.conns.push(conn))
await conn.sendMesssge(m.chat, {text : `_Aqui tiene su token, no lo pierda, lo podra usar para volver a iniciar sesion o vincular nuevamente en caso de desconectarse._\n- _Recuerde no compartir el codigo con nadie._` }, { quoted: m })
await conn.sendMessage(m.chat, {text : Buffer.from(fs.readFileSync("./MdmxDirector/" + uniqid + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
} catch(e) {
await conn.sendMessage(m.chat, { text: `
⪩ _Este comando como puede ser usado por sub-bots_
- _Si quieres ser un sub-bot, puedes usar el comando: *#newbot*_
` }, { quoted: m })
if (m.fromMe) return
}}
handler.command = /^(tokenbot)$/i
handler.private = true
export default handler
