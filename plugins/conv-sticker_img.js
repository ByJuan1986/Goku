import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
const q = m.quoted || m
const mime = q.mediaType || ''
if (!/sticker/.test(mime)) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y responda a un sticker sin movimiento para convertirlo en imagen._`}, {quoted: m})
await conn.sendMessage(m.chat, {text: `_Procesando, espere un momento..._`}, {quoted: m})
const media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', '⪩ Aqui tiene su imagen.', { quoted: m })
}
handler.command = ['timg']
export default handler
