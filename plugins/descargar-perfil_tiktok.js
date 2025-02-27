import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba el nombre del usuario en *TikTok* para descargar su foto de perfil._\n\n• *Por ejemplo:*\n#${command} MD_lolman`, { quoted: m })
try {
await conn.sendMessage(m.chat, {text: `_Descargando imagen, espere un momento..._`, { quoted: m })
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
await conn.sendFile(m.chat, res, 'error.jpg', `Aqui tiene su imagen.`, m, false)
} catch (e) {
await conn.sendMessage(m.chat, {text: `• _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e)
}}
handler.command = ["pptiktok", "tiktokfoto"]
export default handler