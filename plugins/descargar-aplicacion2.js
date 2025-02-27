import {search, download} from 'aptoide-scraper';
import axios from 'axios';
import cheerio from 'cheerio';
const handler = async (m, {conn, usedPrefix, command, text}) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y el nombre de la aplicacion que desea buscar._\n\n• *Por ejemplo:*\n#apk WhatsApp`, { quoted: m });
try {
const res = await fetch(`${apis}/download/apk?query=${text}`);
const data = await res.json();
if (!data.status || !data.data) throw 'error'
const apkData = data.data;
let response = `${apkData.name}
۰────────────۰
❒ *Paquete:* ${apkData.developer}
❒ *Publicado en:* ${apkData.publish}
❒ *Peso:* ${apkData.size}`
await conn.sendMessage(m.chat, {image: {url: apkData.image}, caption: response}, {quoted: m});
await conn.sendMessage(m.chat, {text: `_Descargando, espere un momento..._`, { quoted: m });
if (apkData.size.includes('GB') || parseFloat(apkData.size.replace(' MB', '')) > 999) {
return await conn.sendMessage(m.chat, {text: mid.smsApk4}, {quoted: m})}
await conn.sendMessage(m.chat, {document: { url: apkData.download }, mimetype: 'application/vnd.android.package-archive', fileName: `${apkData.name}.apk`, caption: null }, { quoted: m });
} catch (error) {
try {
const searchA = await search(text);
const data5 = await download(searchA[0].id);
let response = `${data5.name}
۰────────────۰
❒ *Paquete:* ${data5.package}
❒ *Publicado en:* ${data5.lastup}
❒ *Peso:* ${data5.size}`
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
await conn.sendMessage(m.chat, {text: `_Descargando, espere un momento..._`, { quoted: m });
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.sendMessage(m.chat, {text: 'Lo siento, la aplicacion pesa mucho, no podra ser enviado...'}, {quoted: m})}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m}); 
} catch (e) {
await conn.sendMessage(m.chat, {text: `● _Ocurrio un error con el comando: #${command}_`, { quoted: m });
console.log(e)
}}}
handler.command = ["apk"];
export default handler;

async function searchApk(text) {
  const response = await axios.get(`${apkpureApi}${encodeURIComponent(text)}`);
  const data = response.data;
  return data.results;
}

async function downloadApk(id) {
  const response = await axios.get(`${apkpureDownloadApi}${id}`);
  const data = response.data;
  return data;
}
