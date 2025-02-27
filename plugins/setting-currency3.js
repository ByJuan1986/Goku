let handler = async (m, { conn, isRowner }) => {
const newCurrency3 = m.text.trim().split(' ').slice(1).join(' '); 
if (!newCurrency3) {
return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba el nuevo nombre del recurso: *${global.currency3}*_` }, { quoted: m });
}
global.currency3 = newCurrency3;
conn.sendMessage(m.chat, { text: `✓ _Se ha cambiado el nombre del recurso anterior a *${newCurrency3}* con exito._` }, { quoted: m });
};
handler.command = ['set_econ3']; 
handler.premium = true;
export default handler;
