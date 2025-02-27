import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas un enlace valido de *Threads* para descargarlo._`, { quoted: m })
let key
try{ 
await conn.sendMessage(m.chat, {text: `_Descargando, espere un momento..._`, { quoted: m })
const apiUrl = `${apis}/download/threads?url=${encodeURIComponent(text)}`

const response = await fetch(apiUrl)
const jsonData = await response.json()
const threadTitle = jsonData.data.description
const threadVideoUrl = jsonData.data.media[0].url
const shortUrl1 =await (await fetch(`https://tinyurl.com/api-create.php?url=${text}`)).text()
const threadTitleWithoutUrl = threadTitle
await conn.sendFile(m.chat, threadVideoUrl, 'error.mp4', `Aqui tiene su video.`, m)
} catch (e) {
await conn.sendMessage(m.chat, {text: `✎ _Ocurrio un error con el comando *#${commamd}*_`, { quoted: m })
console.log(e)
}}
handler.command = ["threads"]
export default handler
const delay = time => new Promise(res => setTimeout(res, time))




