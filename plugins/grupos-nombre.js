let Presence = (await import(global.baileys)).default
let handler  = async (m, { conn, args, text }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || imagens
if (!text) return conn.sendMessage(m.chat, {text: `✎ _Ingrese el comando y escriba un texto lo cual sera para cambiar el nombre grupal._`, { quoted: m })
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
conn.sendMessage(m.chat, {text: `✓ _Se ha actualizado el nombre del grupo con exito._`, { quoted: m })
} catch (e) { 
return conn.sendMessage(m.chat, {text: `✎ _Ocurrio un error, esto puede ser por que el nombre tiene mas de 100 caracteres o que el comando tenga un error._`, { quoted: m })
}}
handler.command = /^(cname)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler 
