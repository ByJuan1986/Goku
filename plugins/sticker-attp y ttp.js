import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, args, usedPrefix, command }) => {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba un texto para crear un sticker con el mismo texto que escribas._` }, { quoted: m })
let teks = encodeURI(text)

if (command == 'attp') {
let stiker = await sticker(null,`https://btch.us.kg/attp?text=${teks}`,global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })}

if (command == 'ttp') {
let stiker = await sticker(null,`https://btch.us.kg/ttp?text=${teks}`,global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })}
}
handler.command = handler.help = ['ttp', 'attp']
export default handler