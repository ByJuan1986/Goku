const handler = async (m, {conn, usedPrefix, command}) => {
const args = m.text.split(' ').slice(1); 
if (args.length < 2) return conn.sendMessage(m.chat, {text: `✎ _Ingrese el horario de eventos para realizarlos a esa hora._\n\n• *Por ejemplo:*\n#${command} 11:00, 06:00`, { quoted: m });
let inicio, fin;
const regex1 = /^(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})$/; 
const regex2 = /^(\d{2}:\d{2})\s*a\s*(\d{2}:\d{2})$/; 
const regex3 = /^(\d{2}:\d{2})\s*,\s*(\d{2}:\d{2})$/;
let match;
if (match = args.join(' ').match(regex1)) {
inicio = match[1];
fin = match[2];
} else if (match = args.join(' ').match(regex2)) {
inicio = match[1];
fin = match[2];
} else if (match = args.join(' ').match(regex3)) {
inicio = match[1];
fin = match[2];
} else {
return conn.sendMessage(m.chat, {text: `✎ _Comando incorrecto, tiene que establecer la hora y minito de los eventos._\n\n• *Ejemplo de inicio y fin:*\n#${command} 10:00, 06:00.`, { quoted: m });
}
db.data.chats[m.chat].eventoHorario = { inicio, fin };
return conn.sendMessage(m.chat, {text: `✎ _Se ha establecido el horario de eventos._\n\n• *COMIENZA EN:* ${inicio} a.m\n• *TERMINA EN:* ${fin} p.m`, { quoted: m })
}
handler.command = /^(setevent)$/i
handler.admin = true
handler.group = true
export default handler
