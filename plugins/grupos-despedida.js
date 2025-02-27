let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
conn.sendMessage(m.chat, {text: `✓ _La despedida del grupo fue actualizada con exito._`, { quoted: m }) 
} else return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba lo que quiere que aparezca cuando una persona se sale del grupo._\n\n• *Puede usar este tagme para mensionar al usuario:*\n@user`, { quoted: m })
}
handler.command = ['cbye'] 
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
