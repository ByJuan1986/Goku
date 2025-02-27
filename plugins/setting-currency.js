let handler = async (m, { conn, isRowner }) => {
const newCurrency = m.text.trim().split(' ').slice(1).join(' '); 
if (!newCurrency) {
return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba el nuevo nombre del recurso: *${global.currency}*_` }, { quoted: m });
}
global.currency = newCurrency;
conn.sendMessage(m.chat, { text: `✓ _Se ha cambiado el nombre del recurso anterior a *${newCurrency}* con exito._` }, { quoted: m });
};
handler.command = ['set_econ']; 
handler.premium = true;
export default handler;
