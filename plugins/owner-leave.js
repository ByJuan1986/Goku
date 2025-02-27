let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.sendMessage(id, { text: `Como tu ordenes, adios a todos, nos vemos pronto. ♡︎` }, { quoted: m })
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#${command}*_` }, { quoted: m })
return console.log(e)
}}
handler.command = /^(nochat|vete)$/i
handler.group = true
handler.owner = true
export default handler
