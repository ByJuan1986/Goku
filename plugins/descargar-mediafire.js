import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas un enlace de un archivo de *Mediafire* para descargarlo._`, { quoted: m });
try {  
const res = await fetch(`${apis}/api/mediafire?url=${args[0]}`);
if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
const data = await res.json();
const fileDataArray = data.data;
fileDataArray.forEach((fileData) => {
let caption = `✎ _Descargando archivo:_ *${fileData.filename}*

⟡ *Peso:* ${fileData.size}
⟡ *Tipo:* ${fileData.mime}`.trim()
conn.sendMessage(m.chat, {text: caption}, { quoted: m });
conn.sendFile(m.chat, fileData.link, fileData.filename, 'Aqui tiene su archivo descargado.', m, null, {mimetype: fileData.mime, asDocument: true, });
});
} catch (error) {
try {
let res = await mediafireDl(args[0])
let { name, size, date, mime, link } = res
let caption = `✎ _Descargando archivo:_ *${name}*

⟡ *Peso:* ${size}
⟡ *Tipo:* ${mime}`.trim()
conn.sendMessage(m.chat, {text: caption}, { quoted: m });
await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true })
} catch (e) {
conn.sendMessage(m.chat, {text: `• _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e) 
}}}
handler.command = ["mediafire", "m"]
export default handler

async function mediafireDl(url) {
const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`)
const $ = cheerio.load(res.data)
const link = $('#downloadButton').attr('href')
const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','')
const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','')
let mime = ''
let rese = await axios.head(link)
mime = rese.headers['content-type']
return { name, size, date, mime, link }
}
