import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))
import '../config.js'

//let handler = m => m
//handler.all = async function (m) {
export async function before(m, { conn }) {	
global.key = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => "https://cloud.dorratz.com/files/77ab8bf550effc29038f74f2111eff8b.jpg")

// Fake
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
global.fakeChannel = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: 100, newsletterName: channelRD.name }, externalAdReply: { title: 'Goku Bot', body: '@byjuan1986', mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: mxImgs, thumbnail: mxImagens, sourceUrl: mxTodo }}}, { quoted: m }
global.fake = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, externalAdReply: { title: 'Goku Bot', body: '@byjuan1986', mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: pp, sourceUrl: mxTodo }}}
  
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873655135-5493873655168@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'WhatsApp Bot By Alan.V.J.V', orderTitle: 'Bang', thumbnail: mxImagens, sellerJid: '0@s.whatsapp.net' }}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873655135-5493873655168@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}} 

let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
//let fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': imagen2}}}
                             
let enlace = { contextInfo: { externalAdReply: {title: 'Goku Bot', body: 'Inteligencia Artificial • WhatsApp' , sourceUrl: mxImagens, thumbnail: await(await fetch(mxImgs)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: mxTodo, mediaType: 'VIDEO', description: '', title: 'GokuBot', body: '@byjuan1986', thumbnailUrl: mxImagens, sourceUrl: mxTodo }}}
let dos = [enlace, enlace2]  

global.wait = "Cargando, espere un momento..."
global.waitt = "Realizando proceso de ejecución..."
global.waittt = "Obteniendo resultados recientes..."
global.waitttt = "Cargando ultimos datos..."
global.waittttt = "Fin del proceso."

global.destraba = `
Destraba
`
  
}

//Todos los enlaces
global.mxTodo = [ceotg, ceoig, ceowa, ceoatom, ceoasist, ceothd, ceofb, ceobot, canaltg, canalwa, canalwa2, grupo1, grupo2, grupo3, grupo4, grupo5, mxcomunity]
global.mxCanales = [canaltg, canalwa, canalwa2]
global.mxCuentas = [ceotg, ceoig, ceowa, ceoatom, ceoasist, ceothd, ceofb, ceobot]
global.mxGrupos = [grupo1, grupo2, grupo3, grupo4, grupo5, mxcomunity]

global.canalIdMX = ["120363234822910701@newsletter", "120363195436416919@newsletter"]
global.canalNombreMX = ["GokuBot", "ByJuan1986"]
global.channelRD = await getRandomChannel()

// Imágenes 
global.imagen = 'https://i.postimg.cc/vmJ2C93F/Goku-06.jpg'
global.imagen2 = 'https://i.postimg.cc/KztpbzHK/goku-07.jpg'
global.imagen3 = 'https://i.postimg.cc/fRgrj1db/goku-08.jpg'
global.imagen4 = 'https://i.postimg.cc/jjwk8v64/Goku-09.jpg'

//Imagenes cuadradas
global.img = 'https://i.postimg.cc/vH61KxqM/Goku-Bot-01.jpg'
global.img2 = 'https://i.postimg.cc/zDQbpFk0/Goku-Bot-02.jpg'
global.img3 = 'https://i.postimg.cc/HnrJdrTw/Goku-Bot-03.jpg'
global.img4 = 'https://i.postimg.cc/fy1VLMb6/Goku-Bot-04.jpg'

//Randoms
global.imagens = [imagen, imagen2, imagen3, imagen4][Math.floor(Math.random() * 4)]
global.mxMenus = [mxMenu1, mxMenu2, mxMenu3][Math.floor(Math.random() * 3)]
global.mxImagens = [imagen, imagen2, imagen3, imagen4][Math.floor(Math.random() * 4)]
global.imgs = [img, img2, img3, img4][Math.floor(Math.random() * 4)]
global.mxImgs = [img, img2, img3, img4][Math.floor(Math.random() * 4)]
global.logogit = 'https://qu.ax/RzKF.jpg'

// Mensaje de espera
// await mensajesEditados(conn, m)
global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdMX.length)
let id = canalIdMX[randomIndex]
let nombre = canalNombreMX[randomIndex]
return { id, nombre }
}
