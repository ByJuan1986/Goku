import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let pontexto = '⪩ Ingrese el comando y responda a un sticker en movimiento para convertirlo en un video.'
if (!m.quoted) return conn.sendMessage(m.chat, { text: `${pontexto}` }, { quoted: m })
let mime = m.quoted.mimetype || ''
if (!/webp|audio/.test(mime)) return conn.sendMessage(m.chat, { text: `${pontexto}` }, { quoted: m })
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')
}
await conn.sendFile(m.chat, out, 'error.mp4', `¡Aqui tiene los resultados!`, m, 0, { thumbnail: out }, { quoted: m })
}
handler.command = ['tsvideo', 'ts_video']
export default handler
