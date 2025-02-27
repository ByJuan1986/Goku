import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import {instagram} from '@xct007/frieren-scraper';
import {instagramdl} from '@bochilteam/scraper';
const handler = async (m, {conn, args, command, usedPrefix}) => {
if (!args[0]) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas un enlace valido de un video o imagen de *Instagram* para descargarlo._`, { quoted: m })
await conn.sendMessage(m.chat, {text: `_Descargando, espere un momento..._`, { quoted: m })
try {
const apiUrl = `${apis}/download/instagram?url=${encodeURIComponent(args[0])}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.data || delius.data.length === 0) return m.react("❌");
const downloadUrl = delius.data[0].url;
const fileType = delius.data[0].type;
if (!downloadUrl) return m.react("❌");
if (fileType === 'image') {
await conn.sendFile(m.chat, downloadUrl, 'ig.jpg', `Aqui tiene su imagen.`, m);
} else if (fileType === 'video') {
await conn.sendFile(m.chat, downloadUrl, 'ig.mp4', `Aqui tiene su imagen.`, m);
} else {
return m.react("❌"); 
}} catch {   
try {
const apiUrll = `https://api.betabotz.org/api/download/igdowloader?url=${encodeURIComponent(args[0])}&apikey=bot-secx3`;
const responsel = await axios.get(apiUrll);
const resultl = responsel.data;
for (const item of resultl.message) {
const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${item.thumbnail}`)).text();
conn.sendFile(m.chat, item._url, null, 'Aqui tiene su video.', m);
await new Promise((resolve) => setTimeout(resolve, 10000));
}} catch {    
try {
const datTa = await instagram.v1(args[0]);
for (const urRRl of datTa) {
const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
conn.sendFile(m.chat, urRRl.url, 'error.mp4', 'Aqui tiene su video.', m);
await new Promise((resolve) => setTimeout(resolve, 10000));
}} catch {
try {
const resultss = await instagramGetUrl(args[0]).url_list[0];
const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
await conn.sendFile(m.chat, resultss, 'error.mp4', 'Aqui tiene su video.', m);
} catch {
try {
const resultssss = await instagramdl(args[0]);
const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', 'Aqui tiene su video.', m);
} catch {
try {
const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
const json = await human.json();
const videoig = json.result;
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
await conn.sendFile(m.chat, videoig, 'error.mp4', 'Aqui tiene su video.', m);
} catch (e) {
conn.sendMessage(m.chat, {text: `• _Ocurrio un error con el comando: *#${command}*_`, m);
console.log(e)
}}}}}}}
handler.command = ["ig", "instagram"]
export default handler
