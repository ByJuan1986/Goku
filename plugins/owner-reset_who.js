let handler = async (m, { conn, text }) => {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)

if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.sendMessage(m.chat, {text: `● Ingrese el comando y mensione o escriba el numero de una persona para reiniciarlo del bot.`}, { quoted: m })
if(isNaN(number)) return conn.sendMessage(m.chat, {text: `● El numero que ingresaste no existe en la base de datos en el bot.\n\n- Esto se debe a que la persona no se ha registrado.`}, { quoted: m })
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
  
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
let participants = m.isGroup ? groupMetadata.participants : []
let users = m.isGroup ? participants.find(u => u.jid == user) : {}
let number = user.split('@')[0]
  
delete global.global.db.data.users[user]
conn.reply(m.chat, `● Los recursos de @${number} se han eliminado con exito.`, null, { mentions: [user] })
}}

handler.command = ['rwho', 'resetuser'] 
handler.owner = true
export default handler
