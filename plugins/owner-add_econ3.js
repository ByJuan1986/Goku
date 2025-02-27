let handler = async (m, { conn, text }) => {
if (!text) {
return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y responda a un usuario e indique la cantidad de ${currency3} para agregar_` }, { quoted: m });
}
let xpToAdd = parseInt(text);
if (isNaN(xpToAdd)) {
return conn.sendMessage(m.chat, { text: `● _La cantidad valorada debe ser en numeros, intentalo de nuevo._` }, { quoted: m });
}
if (!global.db.data.users[m.sender]) {
global.db.data.users[m.sender] = { exp: 0 };
}
global.db.data.users[m.sender].exp += xpToAdd;
conn.sendMessage(m.chat, { text: `✓ _Se han agregado ${xpToAdd} de ${currency3} con exito._` }, { quoted: m });
}
handler.command = ['add_econ3'];
handler.owner = true;
export default handler;
  
