let handler = async (m, { conn, isRowner }) => {
const newAuthor = m.text.trim().split(' ').slice(1).join(' ');
if (!newAuthor) {
return conn.sendMessage(m.chat, { text: `- _Ingrese el comando y escriba el nuevo nombre del author para el bot que se cambiara en toda la vista del codigo.` }, { quoted: m });
}
global.author = newAuthor;
conn.sendMessage(m.chat, { text: `- _El nombre de author del bot fue actualizado a *( ${newAuthor} )* con exito.` }, { quoted: m });
};
handler.command = ['setauthor']; 
handler.admin = true;
handler.botAdmin = true;
export default handler;
