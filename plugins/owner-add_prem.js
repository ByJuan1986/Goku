let handler = async (m, { conn, text, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
let user = global.db.data.users[who]
if (!who) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a una persona para asignarle como un usuario premium._\n\n• *Por ejemplo:*\n#${command} @${m.sender.split`@`[0]} 3` }, { quoted: m })
let txt = text.replace('@' + who.split`@`[0], '').trim()
let name = await '@' + who.split`@`[0]
var hora1 = 3600000 * txt
var dia1 = 86400000 * txt
var semana1 = 604800000 * txt
var mes1 = 2629800000 * txt
var now = new Date() * 1

if (!txt && !m.quoted) return conn.sendMessage(m.chat, { text: `● _Ingrese el tiempo definido para el usuario._\n\n• *Por ejemplo:*\n#${command} @${m.sender.split`@`[0]} 3` }, { quoted: m })
if (txt == 0 || txt == null) return conn.sendMessage(m.chat, { text: `● _Para finalizar, debes de ingresar el tiempo definido para el usuario._` }, { quoted: m })
if (isNaN(txt)) return conn.sendMessage(m.chat, { text: `● _Solo se aceptan numeros para ingresar el tiempo definido._` }, { quoted: m })
 
if (command == 'prem_h' || command == 'premh') {
if (now < user.premiumTime) user.premiumTime += hora1
else user.premiumTime = now + hora1
user.premium = true
conn.reply(m.chat, `● _Se ha agregado al estado del usuario a la version premium._
_¡Podra usar funciones nuevas en este proyecto, con mas caracteristicas y que lo disfrute!_

🜲 *Usuario:* ${name}
ⴵ *Tiempo:* ${msToTime(hora1 - new Date())}
Ⓒ *Asistencia:* 24/7
⎋ *Actualizacion:* Constante.
`, m, {contextInfo: {mentionedJid: conn.parseMention(name)}})}
    
if (command == 'prem_d' || command == 'premd') {
if (now < user.premiumTime) user.premiumTime += dia1
else user.premiumTime = now + dia1
user.premium = true
conn.reply(m.chat, `● _Se ha agregado al estado del usuario a la version premium._
_¡Podra usar funciones nuevas en este proyecto, con mas caracteristicas y que lo disfrute!_

🜲 *Usuario:* ${name}
ⴵ *Tiempo:* ${msToTime(dias1 - new Date())}
Ⓒ *Asistencia:* 24/7
⎋ *Actualizacion:* Constante.
`, m, {contextInfo: {mentionedJid: conn.parseMention(name)}})}

if (command == 'prem_s' || command == 'prems') {
if (now < user.premiumTime) user.premiumTime += semana1
else user.premiumTime = now + semana1
user.premium = true
conn.reply(m.chat, `● _Se ha agregado al estado del usuario a la version premium._
_¡Podra usar funciones nuevas en este proyecto, con mas caracteristicas y que lo disfrute!_

🜲 *Usuario:* ${name}
ⴵ *Tiempo:* ${msToTime(semana1 - new Date())}
Ⓒ *Asistencia:* 24/7
⎋ *Actualizacion:* Constante.`, m, {contextInfo: {mentionedJid: conn.parseMention(name)}})}

  
if (command == 'prem_m' || command == 'prem_m') {
if (now < user.premiumTime) user.premiumTime += mes1
else user.premiumTime = now + mes1
user.premium = true
conn.reply(m.chat, `● _Se ha agregado al estado del usuario a la version premium._
_¡Podra usar funciones nuevas en este proyecto, con mas caracteristicas y que lo disfrute!_

🜲 *Usuario:* ${name}
ⴵ *Tiempo:* ${msToTime(mes1 - new Date())}
Ⓒ *Asistencia:* 24/7
⎋ *Actualizacion:* Constante.`, m, {contextInfo: {mentionedJid: conn.parseMention(name)}})}
}
handler.command = ['prem_h', 'premh', 'prem_d', 'premd', 'prem_s', 'prems', 'prem_m', 'premm'] 
handler.group = true
handler.owner = true
export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos " + seconds  + " Segundos "
}