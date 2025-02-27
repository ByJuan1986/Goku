import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas un enlace de *getstickerpack* para descargar los stickers._`, { quoted: m })
try {  
await conn.sendMessage(m.chat, {text: `_Descargando, esto puede tardar..._`, { quoted: m })
let url = text
let res = await fetch(`https://api.akuari.my.id/downloader/stickerpack?link=${url}`)
let json = await res.json()
for (let data of (json.result || json)) {
const stikers = await sticker(false, data, global.botname, global.author)
conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': true }})
await delay(5000)
}} catch (e) {
await conn.sendMessage(m.chat, {text: `✎ _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e)
}}
handler.command = ["stickpack"]
export default handler
const delay = time => new Promise(res => setTimeout(res, time))
