import fetch from "node-fetch"
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando mas un enlace de stickers en telegram para pasarlos aqui._` }, { quoted: m })
if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) return conn.sendMessage(m.chat, { text: `● _El enlace que has puesto no es valido, recuerda ingresar un enlace de sticker en telegram._` }, { quoted: m })
let packName = args[0].replace("https://t.me/addstickers/", "")
let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
if (!gas.ok) throw eror
let json = await gas.json()
conn.sendMessage(m.chat, { text: `● _Enviando stickers, espere un momento..._` }, { quoted: m })
for (let i = 0; i < json.result.stickers.length; i++) {
let fileId = json.result.stickers[i].thumb.file_id
let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
let jisin = await gasIn.json()
let stiker = await sticker(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path, global.packname, global.author)
await conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: ` 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 `, mediaType: 2, sourceUrl: redesMenu.getRandom(), thumbnail: gataImg.getRandom()}}}, { quoted: m })
await delay(3000)
}
return conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#${command}*_` }, { quoted: m })
}
handler.command = /^(stg|stelegram)$/i
export default handler

const delay = time => new Promise(res => setTimeout(res, time))
