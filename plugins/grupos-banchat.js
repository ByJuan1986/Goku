let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
conn.sendMessage(m.chat, { text: `✓ _Este chat fue bloqueado para el bot, no podra enviar ni responder mensajes hasta desbloquearlo._` }, { quoted: m })
}
handler.command = /^bchat$/i
handler.botAdmin = true
handler.admin = true
export default handler
