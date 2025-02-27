const handler = async (m) => {
conn.sendMessage(m.chat, { text: `✓ El chat fue desbloqueado para el bot, ahora todos pueden usar el bot nuevamente.` }, { quoted: m });
global.db.data.chats[m.chat].isBanned = false 
}
handler.command = ["bchat2"];
handler.botAdmin = true;
handler.admin = true;
export default handler;
