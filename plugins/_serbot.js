const { useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion} = (await import(global.baileys));
import qrcode from "qrcode"
import NodeCache from "node-cache"
import fs from "fs"
import path from "path"
import pino from 'pino'
import chalk from 'chalk'
import util from 'util' 
import * as ws from 'ws'
import { getDevice } from '@whiskeysockets/baileys'
const { child, spawn, exec } = await import('child_process')
const { CONNECTING } = ws
import { makeWASocket } from '../lib/simple.js'
import '../plugins/_juan.js'
import { fileURLToPath } from 'url'
let crm1 = "cd plugins"
let crm2 = "A7IG1kNXN1b"
let crm3 = "info-donar.js"
let crm4 = "IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz"
let drm1 = ""
let drm2 = textoInfo
let rtx = `Por favor, escanee el codigo QR, expira en 60 segundos...`
let rtx2 = `Por favor, copie el codigo y presione la notificacion para colocar el codigo a vincularse...`

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const mdmxJBOptions = {}
if (global.conns instanceof Array) console.log()
else global.conns = []
let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
if (!global.db.data.settings[conn.user.jid].jadibotmd) return conn.sendMessage(m.chat, { text: `• Lo siento, no se admiten nuevos servidores por el momento, ingrese el comando nuevamente mas tarde._\n\n- *Para mas informacion, habla con el propietario.*\n${ceowa}` }, { quoted: m })
if (m.fromMe || conn.user.jid === m.sender) return
//if (conn.user.jid !== global.conn.user.jid) return conn.reply(m.chat, `${lenguajeGB['smsJBPrincipal']()} wa.me/${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}`, m) 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let id = `${who.split`@`[0]}`  //conn.getName(who)
let pathMdmxBotsWa = path.join("./MdmxDirector/", id)
if (!fs.existsSync(pathMdmxBotsWa)){
fs.mkdirSync(pathMdmxBotsWa, { recursive: true })
}
mdmxJBOptions.pathMdmxBotsWa = pathMdmxBotsWa
mdmxJBOptions.m = m
mdmxJBOptions.conn = conn
mdmxJBOptions.args = args
mdmxJBOptions.usedPrefix = usedPrefix
mdmxJBOptions.command = command
mdmxJBOptions.fromCommand = true
mdmxBots(mdmxJBOptions)
} 
handler.command = /^(rentgoku)/i
export default handler 

export async function mdmxBots(options) {
let { pathMdmxBotsWa, m, conn, args, usedPrefix, command } = options
if (command === 'code') {
command = 'rentmx'; 
args.unshift('code')}

const mcode = args[0] && /(8code|8d)/.test(args[0].trim()) ? true : args[1] && /(--code|code)/.test(args[1].trim()) ? true : false;
let txtCode, codeBot, txtQR
if (mcode) {
args[0] = args[0].replace(/^8code$|^8d$/, "").trim()
if (args[1]) args[1] = args[1].replace(/^8code$|^8d$/, "").trim()
if (args[0] == "") args[0] = undefined
}
const pathCreds = path.join(pathMdmxBotsWa, "creds.json")
if (!fs.existsSync(pathMdmxBotsWa)){
fs.mkdirSync(pathMdmxBotsWa, { recursive: true })}
try {
args[0] && args[0] != undefined ? fs.writeFileSync(pathCreds, JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""
} catch {
conn.reply(m.chat, `⪩ _Para conectarte, usa el siguiente comando: *#newbot*_`, m)
return
}

const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, "base64")
exec(comb.toString("utf-8"), async (err, stdout, stderr) => {
const drmer = Buffer.from(drm1 + drm2, `base64`)

let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState(pathMdmxBotsWa)

const connectionOptions = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version: [2, 3000, 1015901307],
syncFullHistory: true,
browser: mcode ? ['Ubuntu', 'Chrome', '110.0.5585.95'] : ['GokuBot (PreBot)', 'Chrome','2.0.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
//const msg = store.loadMessage(key.remoteJid, key.id)
//return msg.message && undefined
} return {
conversation: 'Goku',
}}} 

let sock = makeWASocket(connectionOptions)
sock.isInit = false
let isInit = true

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) sock.isInit = false
if (qr && !mcode) {
if (m?.chat) {
txtQR = await conn.sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx.trim() + '\n' + drmer.toString("utf-8")}, { quoted: m})
} else {
return 
}
if (txtQR && txtQR.key) {
setTimeout(() => { conn.sendMessage(m.sender, { delete: txtQR.key })}, 30000)
}
return
} 
if (qr && mcode) {
let secret = await sock.requestPairingCode((m.sender.split`@`[0]))
secret = secret.match(/.{1,4}/g)?.join("-")
const dispositivo = await getDevice(m.key.id);
if (!m.isWABusiness) {
if (/web|desktop|unknown/i.test(dispositivo)) {
txtCode = await conn.sendMessage(m.chat, { image: { url: mxImagens || mxImagens.getRandom() }, caption: rtx2.trim() + '\n' + drmer.toString("utf-8") }, { quoted: m })
codeBot = await m.reply(secret);
} else {
txtCode = await conn.sendButton(m.chat, rtx2.trim() + '\n' + drmer.toString("utf-8"), wm + `\n*Código:* ${secret}`, 'https://qu.ax/wyUjT.jpg' || mxImagens.getRandom(), null,  [[`Copiar código`, secret]], null, null, m)
}} else {
txtCode = await conn.sendMessage(m.chat, { image: { url: mxImagens || mxImagens.getRandom() }, caption: rtx2.trim() + '\n' + drmer.toString("utf-8") }, { quoted: m })
codeBot = await m.reply(secret);
}
console.log(secret);
}
if ((txtCode && txtCode.key) || (txtCode && txtCode.id)) {
const messageId = txtCode.key || txtCode.id
setTimeout(() => { conn.sendMessage(m.sender, { delete: messageId })}, 30000)
}
if (codeBot && codeBot.key) {
setTimeout(() => { conn.sendMessage(m.sender, { delete: codeBot.key })}, 30000)
}
const endSesion = async (loaded) => {
if (!loaded) {
try {
sock.ws.close()
} catch {
}
sock.ev.removeAllListeners()
let i = global.conns.indexOf(sock)		
if (i < 0) return 
delete global.conns[i]
global.conns.splice(i, 1)
}}

const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (connection === 'close') {
if (reason === 428) {
console.log(chalk.bold.magentaBright(`\nDisconnect...`))
await creloadHandler(true).catch(console.error)
}
if (reason === 408) {
console.log(chalk.bold.magentaBright(`\nDisconnect...`))
await creloadHandler(true).catch(console.error)
}
if (reason === 440) {
console.log(chalk.bold.magentaBright(`\nDisconnect...`))
try {
if (options.fromCommand) m?.chat ? await conn.sendMessage(`${path.basename(pathMdmxBotsWa)}@s.whatsapp.net`, {text : 'Nueva sesion activada, favor de eliminarlo para evitar errores en MDMX.' }, { quoted: m || null }) : ""
} catch (error) {
console.error(chalk.bold.yellow(`Error 440`))
}}
if (reason == 405 || reason == 401) {
console.log(chalk.bold.magentaBright(`\nDisconnect...`))
try {
if (options.fromCommand) m?.chat ? await conn.sendMessage(`${path.basename(pathMdmxBotsWa)}@s.whatsapp.net`, {text : 'Servidor pendiente, espere un momento...' }, { quoted: m || null }) : ""
} catch (error) {
console.error(chalk.bold.yellow(`Error 405`))
}
fs.rmdirSync(pathMdmxBotsWa, { recursive: true })
}
if (reason === 500) {
console.log(chalk.bold.magentaBright(`\nDisconnect...`))
return creloadHandler(true).catch(console.error)
if (options.fromCommand) {
m?.chat ? await conn.sendMessage(m.chat, {text: 'Conexion perdida...' }, { quoted: m || null }) : ""
}
//fs.rmdirSync(pathMdmxBotsWa, { recursive: true })
}
if (reason === 515) {
console.log(chalk.bold.magentaBright(`\nReinicio automatico...`))
await creloadHandler(true).catch(console.error)
}
if (reason === 403) {
console.log(chalk.bold.magentaBright(`\nSesion cerrada o cuenta en soporte...`))
fs.rmdirSync(pathMdmxBotsWa, { recursive: true })
}}

if (global.db.data == null) loadDatabase()
if (connection == `open`) {
if (!global.db.data?.users) loadDatabase()
let userName, userJid 
userName = sock.authState.creds.me.name || 'Anónimo'
userJid = sock.authState.creds.me.jid || `${path.basename(pathMdmxBotsWa)}@s.whatsapp.net`
console.log(chalk.bold.cyanBright(`\nConectado con exito a MDMX`))
sock.isInit = true
global.conns.push(sock)

let user = global.db.data?.users[`${path.basename(pathMdmxBotsWa)}@s.whatsapp.net`]
m?.chat ? await conn.sendMessage(m.chat, {text : args[0] ? `Cargando, espere un momento...` : `Obteniendo conexion estable, espere un momento...`}, { quoted: m }) : ''
/*let mensajeTexto = `
🜲 *\`NUEVO SUB-BOT\`* 🜲
❒ *Usuario:* ${userName}
❒ *Registro:* ${user?.registered ? user.name : 'Sin registro.'}
❒ *Servidor:* ${mcode ? 'GokuBot_chrome' : 'GokuBot_vps'}
❒ *Plataforma:* ${m?.isWABusiness ? 'Business' : 'Messenger'}
`.trim()*/
let ppch = await sock.profilePictureUrl(userJid, 'image').catch(_ => mxImgs)
//await sleep(3000)
//await global.conn.sendMessage(miscanales.mycanal2, { text: mensajeTexto }, { quoted: null })
await sleep(3000)
await joinChannels(sock)
m?.chat ? await conn.sendMessage(m.chat, {text : `
- _Ahora eres un sub-bot, puedes usar los comandos del bot libremente, si tienes dudas, puedes avisarme._
`}, { quoted: m }) : ''
}}
setInterval(async () => {
if (!sock.user) {
try { sock.ws.close() } catch (e) {      
//console.log(await creloadHandler(true).catch(console.error))
}
sock.ev.removeAllListeners()
let i = global.conns.indexOf(sock)		
if (i < 0) return
delete global.conns[i]
global.conns.splice(i, 1)
}}, 60000)

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler

} catch (e) {
console.error('Nuevo error: ', e)
}
if (restatConn) {
const oldChats = sock.chats
try { sock.ws.close() } catch { }
sock.ev.removeAllListeners()
sock = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
sock.ev.off('messages.upsert', sock.handler)
sock.ev.off('group-participants.update', sock.participantsUpdate)
sock.ev.off('groups.update', sock.groupsUpdate)
sock.ev.off('message.delete', sock.onDelete)
sock.ev.off('call', sock.onCall)
sock.ev.off('connection.update', sock.connectionUpdate)
sock.ev.off('creds.update', sock.credsUpdate)
}
sock.welcome = `╭─· ≻ *¡¡¡BIENVENIDO!!!*\n╰۰ _¡Nos alegra que hayas entrado aqui!_\n\n*Nuevo:* ➛ @user\n\n*Nombre grupal:* ➛ @subject\n\n*\`REGLAS:\`*\n@desc`
sock.bye = `╭─· ≻ *¡¡¡HASTA PRONTO!!!*\n╰۰ _¡Que tus dias vayan mejor, adios!_\n\n*Usuario:* ➛ @user` 
sock.spromote = `● _¡Se ha asignado un nuevo admin en el grupo!_\n\n- *Nuevo admin:* @user` 
sock.sdemote = `● _¡Se ha designado un admin en el grupo!_\n\n- *Admin designado:* @user` 
sock.sDesc = `● _¡Se ha modificado la descripcion del grupo recientemente!_` 
sock.sSubject = `● _¡Se ha modificado el nombre grupal recientemente!_` 
sock.sIcon = `● _¡Se ha modificado el perfil grupal recientemente!_` 
sock.sRevoke = `● _¡Se ha restablecido el enlace grupal recientemente!_\n\n- *Nuevo enlace:* @revoke` 

sock.handler = handler.handler.bind(sock)
sock.participantsUpdate = handler.participantsUpdate.bind(sock)
sock.groupsUpdate = handler.groupsUpdate.bind(sock)
sock.onDelete = handler.deleteUpdate.bind(sock)
sock.onCall = handler.callUpdate.bind(sock)
sock.connectionUpdate = connectionUpdate.bind(sock)
sock.credsUpdate = saveCreds.bind(sock, true)

sock.ev.on(`messages.upsert`, sock.handler)
sock.ev.on(`group-participants.update`, sock.participantsUpdate)
sock.ev.on(`groups.update`, sock.groupsUpdate)
sock.ev.on(`message.delete`, sock.onDelete)
sock.ev.on(`call`, sock.onCall)
sock.ev.on(`connection.update`, sock.connectionUpdate)
sock.ev.on(`creds.update`, sock.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
})
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}

async function joinChannels(conn) {
for (const channelId of Object.values(global.miscanales)) {
await conn.newsletterFollow(channelId).catch(() => {})
}}