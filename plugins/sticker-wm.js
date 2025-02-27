import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, command, usedPrefix, text }) => {
if (!m.quoted) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y responda a un sticker para cambiar el titulo del nombre._\n\n• *Por ejemplo:*\n#${command} Rafael|Stickers` }, { quoted: m })
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y responda a un sticker para cambiarle el titulo que desea estar en el sticker._\n\n• *Por ejemplo:*\n#${command} Rafael|Stickers\n\n- _Recuerde separa el otro texto con la barra:_ |` }, { quoted: m })
let img = await m.quoted.download()
if (!img) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y responda a un sticker para cambiarle el titulo que desea estar en el sticker._\n\n• *Por ejemplo:*\n#${command} Rafael|Stickers\n\n- _Recuerde separa el otro texto con la barra:_ |` }, { quoted: m })
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: 'MBMD | WhatsApp', body: ` ¡¡Cambia el titulo de tus stickers con MBMD gratis!! `, mediaType: 2, sourceUrl: null, thumbnail: mxImgs}}}, { quoted: m })
else return conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#${command}*_` }, { quoted: m })
}}
handler.command = /^sc|ss$/i
export default handler
