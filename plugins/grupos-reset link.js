let handler = async (m, { conn }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || imagen

let res = await conn.groupRevokeInvite(m.chat)
conn.sendMessage(m.chat, {text: `✎ _Aqui tiene el nuevo enlace grupal restablecido._\n\nhttps://chat.whatsapp.com/` + res, { quoted: m })}
handler.command = ['newlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
