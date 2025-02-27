let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {	
let a = []
let b = text.split('|')
if (!b[0]) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba el motivo de la encuesta y separando las opciones con la barra_ *|*.\n\n• *Por ejemplo:*\n#${command} Hola a todos, como estan?|Bien|Mal|Masomenos`, { quoted: m })
if (!b[1]) return conn.sendMessage(m.chat, {text: `⪩ _Separe las opciones con la barra *|* para que fucione._\n\n• *Por ejemplo:*\n#${command} Hola, como estan?|Bien.|Mal.|Masomenos.`, { quoted: m })
if (b[13]) return conn.sendMessage(m.chat, {text: `⪩ _El maximo de opciones son 12, intentalo de nuevo._`, { quoted: m })
for (let c = 1; c < b.length; c++) { a.push([b[c]]) }
let texto = `${text.split('|')[0]}`
return conn.sendPoll(m.chat, texto, a, {mentions: m})}
handler.command = ['poll', 'encuesta'] 
export default handler
