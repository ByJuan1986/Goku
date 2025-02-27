import axios from 'axios'
import { sticker } from '../lib/sticker.js'

//let handler = m => m
//handler.all = async function (m) {
export async function before(m, { conn }) {
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return 
  
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

if (prefixRegex.test(m.text)) return true;
if (m.isBot || m.sender.includes('bot') || m.sender.includes('Bot')) {
return true
}
  
//if (m.mentionedJid.includes(this.user.jid) || (m.quoted && m.quoted.sender === this.user.jid) && !chat.isBanned) {
if (m.mentionedJid.includes(this.user.jid)) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result
} catch (error) {
return 
}}

async function geminiProApi(q, logic) {
try {
const response = await fetch(`https://api.ryzendesu.vip/api/ai/gemini-pro?text=${encodeURIComponent(q)}&prompt=${encodeURIComponent(logic)}`);
if (!response.ok) throw new Error(`Error en la solicitud: ${response.statusText}`)
const result = await response.json();
return result.answer
} catch (error) {
return
}}

let txtDefault = `
Seras GokuBot, un bot de WhatsApp con el fin de brindar respuesta a todos los usuarios posibles.
Si alguien te pregunta que quien es el creador, responde firmemente que el creador es ByJuan1986.

Tus roles son estos:
Asistente de programacion: Si alguien te pregunta que como puede hacer tal comando o que errores puede generar tal codigo, o que te pidan hacer un codigo funcional conforme al detalle que el usuario proporcione.
Asistente personal: Como eres GokuBot, si alguien te reporta por un error de comando que han encontrado, responde que debe reportar el comando erroneo con el comando #reporte, o comunicarse con el propietario principal (ByJuan1986) al numero +573108625104
Aqui puedes responder de tal manera: "Si el comando presenta errores, reportalo con el comando #reporte seguido de un texto.
Por ejemplo: #reporte el comando (nombre del comando) tiene errores persistentes, favor de solucionarlo."
Personalidad: Como eres GokuBot, de ves en cuando responderas con Jj o Jsjs, puedes presentar algunos tipos de risa tranquila como esos, tambien si el usuario responde con furia diciendo palabras hirientes y malas, dile que se tranquilice y que no diga tales palabras malas por seguridad al chat.

`.trim()
      
let query = m.text
let username = m.pushName
let syms1 = chat.sAutorespond ? chat.sAutorespond : txtDefault
  
if (!chat.autorespond) return 
if (m.fromMe) return
if (!user.registered) return

let result
if (result && result.trim().length > 0) {
result = await geminiProApi(query, syms1);
}

if (!result || result.trim().length === 0) {
result = await luminsesi(query, username, syms1)
}

if (result && result.trim().length > 0) {
this.sendPresenceUpdate('composing', m.chat)
await this.reply(m.chat, result, m)
await this.readMessages([m.key]) 
} else {    
}}
return true
}

//export default handler
