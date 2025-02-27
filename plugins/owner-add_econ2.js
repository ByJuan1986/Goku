let handler = async (m, { conn, text }) => {
if (!text) {
return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y responda a un usuario e indique la cantidad de ${currency2} para agregar_` }, { quoted: m });
}
let limitToAdd = parseInt(text);
if (isNaN(limitToAdd)) {
return conn.sendMessage(m.chat, { text: `● _La cantidad valorada debe ser en numeros, intentalo de nuevo._` }, { quoted: m });
}
if (!global.db.data.users[m.sender]) {
global.db.data.users[m.sender] = { limit: 0 };
}
global.db.data.users[m.sender].limit += limitToAdd;
conn.sendMessage(m.chat, { text: `✓ _Se han agregado ${limitToAdd} de ${currency2} con exito._` }, { quoted: m });
}
handler.command = ['add_econ2'];
handler.owner = true;
export default handler;