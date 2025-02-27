let handler = async (m, { conn, text }) => {
if (!text) {
return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y responda a un usuario e indique la cantidad de ${currency} para agregar_` }, { quoted: m });
}
let moneyToAdd = parseInt(text);
if (isNaN(moneyToAdd)) {
return conn.sendMessage(m.chat, { text: `● _La cantidad valorada debe ser en numeros, intentalo de nuevo._` }, { quoted: m });
}
if (!global.db.data.users[m.sender]) {
global.db.data.users[m.sender] = { money: 0 };
}
global.db.data.users[m.sender].money += moneyToAdd;
conn.sendMessage(m.chat, { text: `✓ _Se han agregado ${moneyToAdd} de ${currency} con exito._` }, { quoted: m });
}
handler.command = ['add_econ'];
handler.owner = true;
export default handler;