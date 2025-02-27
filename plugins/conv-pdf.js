import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y responda a una imagen para convertirlo en un formato *PDF*._`, { quoted: m })
let img = await q.download?.()
let url = await uploadImage(img)    
let docname = text ? text : m.pushName || 'documento'
conn.sendFile(m.chat, `http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=${lolkeysapi}&img=${url}`, docname + '.pdf', '', m, false, { asDocument: true })
}
handler.command = /^(ts_pdf|tspdf)$/i
export default handler
