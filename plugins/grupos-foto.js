let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) return conn.sendMessage(m.chat, {text: `✎ _Ingrese el comando y responda a una imagen para cambiar la foto del grupo._`, { quoted: m })
await conn.updateProfilePicture(m.chat, img).then(_ => conn.sendMessage(m.chat, {text: `✓ _Se ha actualizado la foto grupal con exito._`, { quoted: m }))
} else return conn.sendMessage(m.chat, {text: `✎ _Ingrese el comando y responda a una imagen para cambiar la foto del grupo._`, { quoted: m })}
handler.command = /^(cfoto)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
