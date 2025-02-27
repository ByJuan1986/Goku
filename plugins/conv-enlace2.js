import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"
let handler = async (m, { conn, usedPrefix }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y responda a una imagen para convertirlo en un enlace._`, { quoted: m })
let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isMedia ? uploadImage : uploadImage)(media)
let source = await jimp.read(await link)
let height = await source.getHeight()
let width = await source.getWidth()
conn.sendMessage(m.chat, {text: `⪩ _Aqui tiene la imagen._\n_Formato de anchura:_ ${width}\n_Formato de altura:_ ${height}\n\n• *Enlace:* ${link}`, { quoted: m })
}
handler.command = /^(turl2)$/i
export default handler
