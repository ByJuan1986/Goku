import { sticker } from '../lib/sticker.js'
let MessageType = (await import(global.baileys)).default
import fetch from 'node-fetch'
import fs from "fs"
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!args[0]) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y ponga un emoji, un simbolo + y otro emoji final para fucionarlos._\n\n• *Por ejemplo:*\n#${command} 😁+🔥` }, { quoted: m })
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}}

handler.command = /^(smojix|emojix)$/i
export default handler
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})
