let handler = async (m, { conn, isRowner }) => {
const newCurrency2 = m.text.trim().split(' ').slice(1).join(' '); 
if (!newCurrency2) {
return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba el nuevo nombre del recurso: *${global.currency2}*_` }, { quoted: m });
}
global.currency2 = newCurrency2;
conn.sendMessage(m.chat, { text: `✓ _Se ha cambiado el nombre del recurso anterior a *${newCurrency2}* con exito._` }, { quoted: m });
};
handler.command = ['set_econ2']; 
handler.premium = true;
export default handler;
