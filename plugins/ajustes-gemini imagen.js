import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'
var handler = async (m, { conn, text, command, usedPrefix }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()
await conn.sendMessage(m.chat, {text: `_Analizando imagen, espere un momento..._`, { quoted: m })
let media = await (uploader)(buffer)
let json = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json()
conn.sendMessage(m.chat, { text: json.result }, { quoted: m })
} else return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y responda a una imagen mas el texto para hablar con *Gemini Img*._\n\n• *Por ejemplo:*\n#${command} Dame informacion de esta imagen por favor.`, { quoted: m })
}
handler.command = /^(bardimg|geminimg)$/i
export default handler
