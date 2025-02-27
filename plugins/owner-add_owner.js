const handler = async (m, { conn, text, args, usedPrefix, command }) => {
const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
if (!who) return conn.reply(m.chat, `● _Ingrese el comando y mensione a una persona para agregar o quitar como owner del bot._`, m, {mentions: [m.sender]});
  switch (command) {
case 'addw':
const nuevoNumero = who;
global.owner.push([nuevoNumero]);
await conn.sendMessage(m.chat, { text: `✓ _Se ha agregado al usuario mensionado como Owner del bot._\n_Ahora podra usar funciones que solo el desarrollador puede usar._` }, { quoted: m });
break;
case 'delw':
const numeroAEliminar = who;
const index = global.owner.findIndex(owner => owner[0] === numeroAEliminar);
if (index !== -1) {
global.owner.splice(index, 1);
await conn.sendMessage(m.chat, { text: `✓ _El usuario mensionado fue eliminado de la lista de Owners en este proyecto._` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { text: `● _El numero que has ingresado no existe en la lista de Owners en este proyecto, verifica que el numero sea correcto._` }, { quoted: m });
}
break;
}};
handler.command = /^(addw|delw)$/i;
handler.rowner = true;
export default handler;
