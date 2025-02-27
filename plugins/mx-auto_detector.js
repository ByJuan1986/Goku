import chalk from 'chalk'
let WAMessageStubType = (await import("@whiskeysockets/baileys")).default
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path';
import './_mdmx.js'

let handler = m => m
handler.before = async function (m, { conn, participants, groupMetadata, isBotAdmin }) {

if (!m.messageStubType || !m.isGroup) return
let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => imagens)
let img = await (await fetch(`${pp}`)).buffer()
let usuario = `@${m.sender.split`@`[0]}`
let chat = global.db.data.chats[m.chat]
let users = participants.map(u => conn.decodeJid(u.id))
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
        
if (chat.detect && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `● _Se ha modificado el nombre grupal recientemente._`, mentions: [m.sender], mentions: [...groupAdmins.map(v => v.id)] }, { quoted: fkontak })   
} else if (chat.detect && m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `● _Se ha modificado la foto de perfil del grupo recientemente._`, mentions: [m.sender] }, { quoted: fkontak })  
} else if (chat.detect && m.messageStubType == 23) {
await this.sendMessage(m.chat, { text: `● _Se ha restablecido el enlace grupal recientemente._`, mentions: [m.sender] }, { quoted: fkontak }) 
} else if (chat.detect && m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `● _Se ha modificado la descripcion grupal recientemente._`, mentions: [m.sender] }, { quoted: fkontak }) 
} else if (chat.detect && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `● _Se ha configurado el grupo para que ${m.messageStubParameters[0] == 'on' ? 'solo los admins' : 'todos los participantes'} pueden hablar en el chat._`, mentions: [m.sender] }, { quoted: fkontak })
} else if (chat.detect && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `● _Se ha configurado recientemente._\n_Ahora el grupo esta ${m.messageStubParameters[0] == 'on' ? 'cerrado._' : 'abierto._'}`, mentions: [m.sender] }, { quoted: fkontak })
} else if (chat.welcome && m.messageStubType == 27 && this.user.jid != global.conn.user.jid) { 
let subject = groupMetadata.subject
let descs = groupMetadata.desc || "Sin descripcion.";
let userName = `${m.messageStubParameters[0].split`@`[0]}`;
let defaultWelcome = `╭─· ≻ *¡¡¡BIENVENIDO INTEGRANTE!!!*\n╰۰ _¡Nos alegra que hayas entrado aqui!_\n\n*Nuevo:* ➛ @${userName}\n\n*Nombre grupal:* ➛ ${subject}\n\n*\`REGLAS:\`*\n${descs}`;
let textWel = chat.sWelcome ? chat.sWelcome
.replace(/@user/g, `@${userName}`)
.replace(/@group/g, subject) 
.replace(/@desc/g, descs)
: defaultWelcome;
        
await this.sendButton(m.chat, textWel, 'Lea bien para evitar ser eliminado, seleccione una opcion.', pp, [['MENU ⫶☰', '#allmenu'], ['REGISTRARSE ⎋', '#register']], null, null, m, { quoted: m })
/*await this.sendMessage(m.chat, { text: textWel, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender, m.messageStubParameters[0]],
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: pp, 
title: 'MBMD',
containsAutoReply: true,
mediaType: 1, 
sourceUrl: grupo1}}}, { quoted: fkontak })*/
} else if (chat.welcome && (m.messageStubType == 28 || m.messageStubType == 32) && this.user.jid != global.conn.user.jid ) {
let subject = groupMetadata.subject;
let userName = `${m.messageStubParameters[0].split`@`[0]}`;
let defaultBye = `╭─· ≻ *¡¡¡HASTA PRONTO!!!*\n╰۰ _¡Nos vemos pronto querido participante!_\n\n*Usuario:* ➛ @${userName}`;
let textBye = chat.sBye ? chat.sBye
.replace(/@user/g, `@${userName}`)
.replace(/@group/g, subject)
: defaultBye;
await this.sendButton(m.chat, textBye, 'Esperamos y se encuentre bien. <3.', pp, [['MENU ⫶☰', '#allmenu'], ['REGISTRARSE ⎋', '#register']], null, null, m, { quoted: m })

/*await this.sendMessage(m.chat, { text: textBye, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender, m.messageStubParameters[0]],
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: pp, 
title: wm,
containsAutoReply: true,
mediaType: 1, 
sourceUrl: mxTodo}}}, { quoted: fkontak })*/

} else if (chat.detect && m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `● _El administrador_ ${usuario} _ha asignado como admin a:_ @${m.messageStubParameters[0].split`@`[0]}`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak }) 
} else if (chat.detect && m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `● _El administrador_ ${usuario} _ha designado de admin a:_ @${m.messageStubParameters[0].split`@`[0]}`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak }) 
} else if (chat.detect && m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `● _El administrador_ ${usuario} _ha cambiado la duracion del chat a:_ @${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
} else if (chat.detect && m.messageStubType === 172 && m.messageStubParameters.length > 0) {
const rawUser = m.messageStubParameters[0];
const users = rawUser.split('@')[0]; 
const prefijosProhibidos = ['91', '92', '222', '93', '265', '61', '62', '966', '229', '40', '49', '20', '963', '967', '234', '210', '212'];
const usersConPrefijo = users.startsWith('+') ? users : `+${users}`;

if (chat.antifake && isBotAdmin) {
if (prefijosProhibidos.some(prefijo => usersConPrefijo.startsWith(prefijo))) {
try {
await conn.groupRequestParticipantsUpdate(m.chat, [rawUser], 'reject');
console.log(`Solicitud de ingreso de ${usersConPrefijo} rechazada automáticamente por tener un prefijo prohibido.`);
} catch (error) {
console.error(`Error al rechazar la solicitud de ${usersConPrefijo}:`, error);
}} else {
try {
await conn.groupRequestParticipantsUpdate(m.chat, [rawUser], 'approve');
console.log(`Solicitud de ingreso de ${usersConPrefijo} aprobada automáticamente.`);
} catch (error) {
console.error(`Error al aprobar la solicitud de ${usersConPrefijo}:`, error);
}}} else {
try {
await conn.groupRequestParticipantsUpdate(m.chat, [rawUser], 'approve');
console.log(`Solicitud de ingreso de ${usersConPrefijo} aprobada automáticamente ya que #antifake está desactivado.`);
} catch (error) {
console.error(`Error al aprobar la solicitud de ${usersConPrefijo}:`, error);
}}
return;
} if (chat.detect && m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec10(usuario, m), mentions: [m.sender] }, { quoted: fkontak })
} else {
if (m.messageStubType == 2) return
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})
}}
export default handler
