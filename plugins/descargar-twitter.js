import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import vm from 'node:vm'
import qs from 'qs'
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
const twitterUrlRegex = /^https?:\/\/(www\.)?twitter\.com\/(\w+)\/status\/(\d+)$/i 
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas un enlace valido de un video de *Twitter* para descargarlo._`, { quoted: m })
try{
await conn.sendMessage(m.chat, {text: `_Descargando video, espere un momento..._`, { quoted: m })
const apiUrl = `${apis}/download/twitterv2?url=${encodeURIComponent(text)}`

const response = await fetch(apiUrl)
const jsonData = await response.json()
const tweetTitle = jsonData.data.description
console.log(tweetTitle)
const tweetVideoUrl = jsonData.data.media[0].videos[0].url
const shortUrl1 =await (await fetch(`https://tinyurl.com/api-create.php?url=${text}`)).text()
const tweetTitleWithoutUrl = tweetTitle.replace(/https?:\/\/t\.co\/\w+/i, '').trim()
await conn.sendFile(m.chat, tweetVideoUrl, 'error.mp4', 'Aqui tiene su video', m)
} catch (e) {
await conn.sendMessage(m.chat, {text: `✎ _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e)
}}
handler.command = ["twitter", "tw"]
export default handler

const delay = time => new Promise(res => setTimeout(res, time))
