let handler = async (m, { conn, text, usedPrefix, command, isOwner, isAdmin, isROwner }) => {
if (!(isOwner || isAdmin || isROwner)) {
conn.sendMessage(m.chat, { text: `⪩ _Solo los administradores o el propio propietario del bot puede editar las respuestas de ${wm}_` }, { quoted: m })
}
const chatData = global.db.data.chats[m.chat]
if (text) {
if (chatData.sAutorespond) return conn.sendMessage(m.chat, { text: `● _¿Quieres cambiar el modo de habla de ${wm}?_\n\n- _Este es el texto predeterminado de ${wm}_\n${chatData.sAutorespond}\n\n● _Puedes cambiarlo usando solo el comando sin texto lo cual se borrara el texto y despues puede repetir el comando y recien agregar tu texto._` }, { quoted: m })

chatData.sAutorespond = text
conn.sendMessage(m.chat, { text: `✓ _Se ha configurado el auto chat de ${wm} con exito._\n- _Puedes iniciar usando el comando_ *#on automx* _para que pueda hablar._` }, { quoted: m })
} else {
if (chatData.sAutorespond) {
chatData.sAutorespond = ''
conn.sendMessage(m.chat, { text: `✓ _Se ha borrado el texto predeterminado de *${wm} AutoChat*, ahora puedes volver a repetir el comando pero agregando el texto ue quieras.` }, { quoted: m })
} else {
conn.sendMessage(m.chat, { text: `⪩ _No hay ningun texto predeterminado en el AutoChat de ${wm}, puedes ingresar el comando y escribir un texto con indicaciones para configurar su habla._` }, { quoted: m })
}}
}

handler.command = /^(autochat)$/i
export default handler
