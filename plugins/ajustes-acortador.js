import axios from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command, xteamkey }) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas un enlace de cualquier pagina para acortarlo._`, { quoted: m })
try {
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
conn.sendMessage(m.chat, {text: `⪩ _Aqui tiene su enlace acortado:_\n• ${json.result}`, { quoted: m })
} catch (e) {
await conn.sendMessage(m.chat, {text: `⪩ _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e)}}
handler.command = /^(yurl)$/i
handler.fail = null
export default handler
