import fg from 'api-dylux';
import fetch from 'node-fetch';
import {savefrom, facebookdl, facebookdlv2} from '@bochilteam/scraper';
import fbDownloader from 'fb-downloader-scrapper';
import {facebook} from '@xct007/frieren-scraper';
import axios from 'axios';
const handler = async (m, {conn, args, command, usedPrefix}) => {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas un enlace valido de un video de *Facebook* para descargarlo._`}, { quoted: m })
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.sendMessage(m.chat, {text: `⪩ _El enlace ingresado no es valido, recuerda copiar el enlace de un video de *Facebook.*_\n\n• *Por ejemplo:*\n#${command} https://www.facebook.com/share/r/14VoYNAhyh/?mibextid=xfxF2i`}, { quoted: m })
await conn.sendMessage(m.chat, {text: `_Descargando, espere un momento..._`}, { quoted: m })
try {
const apiUrl = `https://api.dorratz.com/fbvideo?url=${encodeURIComponent(args[0])}`;
const response = await fetch(apiUrl);
const data = await response.json();
if (data.result) {
const hdUrl = data.result.hd;
const sdUrl = data.result.sd;
const audioUrl = data.result.audio;        
const downloadUrl = hdUrl || sdUrl; 
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, caption: '_Aqui tiene su video de *Facebook*_'}, { quoted: m })
  //conn.sendFile(m.chat, downloadUrl, `error.mp4`, 'Aqui tiene su video.', m)
}} catch (err1) {
try {
const apiUrl = `${apis}/download/facebook?url=${encodeURIComponent(args[0])}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.urls || delius.urls.length === 0) return m.react("❌")
const downloadUrl = delius.urls[0].hd || delius.urls[0].sd;
if (!downloadUrl) return m.react("❌");
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, caption: '_Aqui tiene su video de *Facebook*_'}, { quoted: m })
  //conn.sendFile(m.chat, downloadUrl, `error.mp4`, 'Aqui tiene su video.', m)
} catch (err2) {
try {
const d2ata = await facebook.v1(args[0]);
let r2es = '';
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}` }
conn.sendMessage(m.chat, { video: { url: r2es }, caption: '_Aqui tiene su video de *Facebook*_'}, { quoted: m })
  //conn.sendFile(m.chat, r2es, `error.mp4`, 'Aqui tiene su video.', m)
} catch (err3) {
try {
const req = await igeh(args[0]);
conn.sendMessage(m.chat, {video: {url: req.url_list}, caption: '_Aqui tiene su video de *Facebook*_'}, { quoted: m });
} catch (err5) {
try {
const ress = await fg.fbdl(args[0]);
const urll = await ress.data[0].url;
await conn.sendMessage(m.chat, { video: { url: urll }, caption: '_Aqui tiene su video de *Facebook*_'}, { quoted: m })
  //conn.sendFile(m.chat, urll, `error.mp4`, 'Aqui tiene su video.', m)
} catch (err6) {
try {
const res = await fbDownloader(args[0]);
for (const result of res.download) {
const ur = result.url;
await conn.sendMessage(m.chat, { video: { url: ur }, caption: '_Aqui tiene su video de *Facebook*_'}, { quoted: m })
  //conn.sendFile(m.chat, ur, `error.mp4`, 'Aqui tiene su video.', m)  
}} catch (err7) {
try {
const {result} = await facebookdl(args[0]).catch(async (_) => await facebookdlv2(args[0])).catch(async (_) => await savefrom(args[0]));
for (const {url, isVideo} of result.reverse()) await conn.sendMessage(m.chat, { video: { url: url }, caption: '_Aqui tiene su video de *Facebook*_'}, { quoted: m })
  //conn.sendFile(m.chat, url, `error.mp4`, contenido, m) 
} catch (e) {
conn.sendMessage(m.chat, {text: `• _Ocurrio un error con el comando: *#${command}*_`}, { quoted: m })
console.log(e) 
}}}}}}}}
handler.command = ["facebook", "fb"]
export default handler

async function igeh(url_media) {
return new Promise(async (resolve, reject)=>{
const BASE_URL = 'https://instasupersave.com/';
try {
const resp = await axios(BASE_URL);
const cookie = resp.headers['set-cookie']; // obtener cookie de la solicitud
const session = cookie[0].split(';')[0].replace('XSRF-TOKEN=', '').replace('%3D', '');
const config = {method: 'post', url: `${BASE_URL}api/convert`, headers: {'origin': 'https://instasupersave.com', 'referer': 'https://instasupersave.com/pt/', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-origin', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52', 'x-xsrf-token': session, 'Content-Type': 'application/json', 'Cookie': `XSRF-TOKEN=${session}; instasupersave_session=${session}`}, data: {url: url_media}};
axios(config).then(function(response) {
const ig = [];
if (Array.isArray(response.data)) {
response.data.forEach((post) => {
ig.push(post.sd === undefined ? post.thumb : post.sd.url);
})} else {
ig.push(response.data.url[0].url)}
resolve({results_number: ig.length, url_list: ig});
}).catch(function(error) {
reject(error.message)});
} catch (e) {
reject(e.message);
}})}
