let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
conn.sendMessage(m.chat, {text: `✓ _Se ha actualizado la bienvenida del grupo con exito._`, { quoted: m })
} else return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba lo que quiere que aparezca cuando una persona entra al grupo._\n\n• *Opciones para personalizar:*\n@user (Mensionara al usuario)\n@desc (Mostrara la descripcion)\n@subject (Mostrara el nombre grupal)`, { quoted: m })
}
handler.command = ['cwelcom'] 
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
