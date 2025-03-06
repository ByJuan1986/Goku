import fetch from 'node-fetch'
import yts from 'yt-search'

let handler = async (m, { conn, text, args }) => {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba el nombre de la cancion que buscas._\n\n• *Por ejemplo:*\n#play Tus cuerdas de amor - Samuel Arroyave` }, { quoted: m })
await conn.sendMessage(m.chat, { text: `_Buscando resultados, espere un momento..._` }, { quoted: m })
try {
let res = await search(args.join(" "))

let apiAud = await fetch(`https://api.agungny.my.id/api/youtube-audio?url=${'https://youtu.be/' + res[0].videoId}`)
let dataAud = await apiAud.json()
let apiVid = await fetch(`https://api.agungny.my.id/api/youtube-video?url=${'https://youtu.be/' + res[0].videoId}`)
let dataVid = await apiVid.json()

let txt = `🜲 *\`R E S U L T A D O S\`* 🜲
> ${res[0].title}
•────────────────•
❒ *Duracion:* ${res[0].timestamp}
❒ *Vistas:* ${res[0].views}
❒ *Publicado:* ${res[0].ago}

> *_Responda a este mensaje con el numero que elijas._*
\`1 : Audio\`
\`2 : Video\`
`

let SM = await conn.sendMessage(m.chat, { text: txt, contextInfo: { externalAdReply: { title: wm, body: textoInfo, thumbnailUrl: res[0].thumbnail, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })
//await conn.sendFile(m.chat, res[0].thumbnail, '.jpg', txt, m)
conn.ev.on("messages.upsert", async (upsertedMessage) => {
let RM = upsertedMessage.messages[0];
if (!RM.message) return

const UR = RM.message.conversation || RM.message.extendedTextMessage?.text
let UC = RM.key.remoteJid

if (RM.message.extendedTextMessage?.contextInfo?.stanzaId === SM.key.id) {

if (UR === '1') {
  conn.sendMessage(m.chat, { text: `_Estoy descargando su *audio*, espere un momento..._` }, { quoted: m })
  await conn.sendMessage(UC, { audio: { url: dataAud.result.downloadUrl }, mimetype: "audio/mpeg", caption: null }, { quoted: RM })
} else if (UR === '2') {
  conn.sendMessage(m.chat, { text: `_Estoy descargando su *video*, espere un momento..._` }, { quoted: m })
  await conn.sendMessage(m.chat, { video: { url: dataVid.result.downloadUrl }, caption: `_Aqui tiene su *video* descargado._`, mimetype: 'video/mp4', fileName: `${res[0].title}` + `.mp4`}, {quoted: m })
} else {
await conn.sendMessage(UC, { text: "● _La solicitud es invalida, recuerda responder con numeros existentes._\n- _Responda al mensaje del play con el numero que quieras._" }, { quoted: RM })
}}})

} catch (error) {
conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#play*_` }, { quoted: m })
console.error(error)
}}

handler.command = ["play", "play2"]

export default handler

async function search(query, options = {}) {
  let search = await yts.search({ query, hl: "es", gl: "ES", ...options })
  return search.videos
}

  
/*
//import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import { ogmp3 } from '../lib/youtubedl.js'; 
const LimitAud = 725 * 1024 * 1024; // 725MB
const LimitVid = 425 * 1024 * 1024; // 425MB
let tempStorage = {};

const handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba lo que quiera buscar o copie un enlace de *YouTube* para descargarlo._\n\n• *Por ejemplo:*\n#${command} Stereo Love` }, { quoted: m || null });
const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
const texto1 = `
🜲 *\`R E S U L T A D O S\`* 🜲
> ${yt_play[0].title}
•───────────────•
❒ *Publicado en:* ${yt_play[0].ago}
❒ *Duracion:* ${secondString(yt_play[0].duration.seconds)}
❒ *Vistas: ${MilesNumber(yt_play[0].views)}
❒ *Artista:* ${yt_play[0].author.name}
❒ *Enlace:* ${yt_play[0].url.replace(/^https?:\/\//, '')}
`.trim();

tempStorage[m.sender] = { url: yt_play[0].url, title: yt_play[0].title };

if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: texto1 + `\n\n*REACTION:*\n1️⃣ = audio\n2️⃣ = video`}, { quoted: m });
} else {
await conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: texto1, footer: textoInfo,buttons: [{ buttonId: `.ytmp4 ${yt_play[0].url}`, buttonText: { displayText: "VIDEO" }, type: 1 }, { buttonId: `.ytmp3 ${yt_play[0].url}`, buttonText: { displayText: "AUDIO" }, type: 1 }], viewOnce: true, headerType: 4 }, { quoted: m });
}};

handler.before = async (m, { conn }) => {
const text = m.text.trim().toLowerCase();
if (!['1️⃣', 'audio', '2️⃣', 'video'].includes(text)) return;
const userVideoData = tempStorage[m.sender];
if (!userVideoData || !userVideoData.url) return 
const [input, qualityInput = text === '1️⃣' || text === 'audio' ? '320' : '720'] = userVideoData.title.split(' ');
const audioQualities = ['64', '96', '128', '192', '256', '320'];
const videoQualities = ['240', '360', '480', '720', '1080'];
const isAudio = text === '1️⃣' || text === 'audio';
const selectedQuality = (isAudio ? audioQualities : videoQualities).includes(qualityInput) ? qualityInput : (isAudio ? '320' : '720');

const audioApis = [
{ url: () => ogmp3.download(userVideoData.url, selectedQuality, 'audio'), extract: (data) => ({ data: data.result.download, isDirect: false }) },
{ url: () => ytmp3(userVideoData.url), extract: (data) => ({ data, isDirect: true }) },
{ url: () => fetch(`https://api.neoxr.eu/api/youtube?url=${userVideoData.url}&type=audio&quality=128kbps&apikey=GataDios`).then(res => res.json()), extract: (data) => ({ data: data.data.url, isDirect: false }) },
{ url: () => fetch(`${global.APIs.fgmods.url}/downloader/ytmp4?url=${userVideoData.url}&apikey=${global.APIs.fgmods.key}`).then(res => res.json()), extract: (data) => ({ data: data.result.dl_url, isDirect: false }) },
{ url: () => fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.dl, isDirect: false }) },
{ url: () => fetch(`${apis}/download/ytmp3?url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.status ? data.data.download.url : null, isDirect: false }) },
{ url: () => fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.result.download.url, isDirect: false }) }
];

const videoApis = [
{ url: () => ogmp3.download(userVideoData.url, selectedQuality, 'video'), extract: (data) => ({ data: data.result.download, isDirect: false }) },
{ url: () => ytmp4(userVideoData.url), extract: (data) => ({ data, isDirect: false }) },
{ url: () => fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.dl, isDirect: false }) },
{ url: () => fetch(`https://api.neoxr.eu/api/youtube?url=${userVideoData.url}&type=video&quality=720p&apikey=GataDios`).then(res => res.json()), extract: (data) => ({ data: data.data.url, isDirect: false }) },
{ url: () => fetch(`${global.APIs.fgmods.url}/downloader/ytmp4?url=${userVideoData.url}&apikey=${global.APIs.fgmods.key}`).then(res => res.json()), extract: (data) => ({ data: data.result.dl_url, isDirect: false }) },
{ url: () => fetch(`${apis}/download/ytmp4?url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.status ? data.data.download.url : null, isDirect: false }) },
{ url: () => fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.result.media.mp4, isDirect: false }) }
];

const download = async (apis) => {
let mediaData = null;
let isDirect = false;
for (const api of apis) {
try {
const data = await api.url();
const { data: extractedData, isDirect: direct } = api.extract(data);
if (extractedData) {
const size = await getFileSize(extractedData);
if (size >= 1024) {
mediaData = extractedData;
isDirect = direct;
break;
}}} catch (e) {
console.log(`Error con API: ${e}`);
continue;
}}
return { mediaData, isDirect };
};
try {
if (text === '1️⃣' || text === 'audio') {
await conn.sendMessage(m.chat, { text: `_Descargando audio, espere un momento..._` }, { quoted: m || null });
const { mediaData, isDirect } = await download(audioApis);
if (mediaData) {
const fileSize = await getFileSize(mediaData);
if (fileSize > LimitAud) {
await conn.sendMessage(m.chat, { document: isDirect ? mediaData : { url: mediaData }, mimetype: 'audio/mpeg', fileName: `${userVideoData.title}.mp3` }, { quoted: m || null });
} else {
await conn.sendMessage(m.chat, { audio: isDirect ? mediaData : { url: mediaData }, mimetype: 'audio/mpeg' }, { quoted: m || null });
}} else {
await conn.sendMessage(m.chat, { text: `• _No se ha podido descargar el audio, intentalo de nuevo._\n- _Puede copiar el enlace y usar el comando: *#mp3*_` }, { quoted: m || null });
}
} else if (text === '2️⃣' || text === 'video') {
await conn.sendMessage(m.chat, { text: `_Descargando el video, espere un momento..._` }, { quoted: m || null });
const { mediaData, isDirect } = await download(videoApis);
if (mediaData) {
const fileSize = await getFileSize(mediaData);
const messageOptions = { fileName: `${userVideoData.title}.mp4`, caption: `_Aqui tiene su video descargado._`, mimetype: 'video/mp4' };
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: isDirect ? mediaData : { url: mediaData }, ...messageOptions }, { quoted: m || null });
} else {
await conn.sendMessage(m.chat, { video: isDirect ? mediaData : { url: mediaData }, ...messageOptions }, { quoted: m || null });
}} else {
await conn.sendMessage(m.chat, { text: `• _No se ha podido descargar el video, intentelo de nuevo._\n- _Puede copiar el enlace y usar el comando: *#mp4*_` }, { quoted: m || null });
}}} catch (error) {
console.error(error);
} finally {
delete tempStorage[m.sender];
}};
handler.command = /^(play|play2)$/i;
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}
  
const getBuffer = async (url) => {
try {
const response = await fetch(url);
const buffer = await response.arrayBuffer();
return Buffer.from(buffer);
} catch (error) {
console.error("Error al obtener el buffer", error);
return conn.sendMesssge(m.chat, { text: `No se encontro el video` }, { quoted: m })
  //throw new Error("Error al obtener el buffer");
}}

async function getFileSize(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return parseInt(response.headers.get('content-length') || 0);
  } catch {
    return 0;
  }
}

async function fetchInvidious(url) {
const apiUrl = `https://invidious.io/api/v1/get_video_info`
const response = await fetch(`${apiUrl}?url=${encodeURIComponent(url)}`)
const data = await response.json()
if (data && data.video) {
const videoInfo = data.video
return videoInfo
} else {
  return conn.sendMesssge(m.chat, { text: `No se encontro el video` }, { quoted: m })
}}

function getBestVideoQuality(videoData) {
const preferredQualities = ['720p', '360p', 'auto']
const availableQualities = Object.keys(videoData.video)
for (let quality of preferredQualities) {
if (availableQualities.includes(quality)) {
return videoData.video[quality].quality
}}
return '360p'
}

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})};

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};
*/
/*
//import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import { ogmp3 } from '../lib/youtubedl.js'; 
const LimitAud = 725 * 1024 * 1024; // 725MB
const LimitVid = 425 * 1024 * 1024; // 425MB
let tempStorage = {};
const handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba el nombre o pegue un enlace de *YouTube* para descargarlo._` }, { quoted: m });
await conn.sendMessage(m.chat, { text: `_Buscando resultados..._` }, { quoted: m });
const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
const encontrado = `
🜲 *\`R E S U L T A D O S\`* 🜲
> ${yt_play[0].title}
•──────────────────•
❒ *Publicado en:* ${yt_play[0].ago}
❒ *Duracion:* ${secondString(yt_play[0].duration.seconds)}
❒ *Vistas:* ${MilesNumber(yt_play[0].views)}
❒ *Autor/a:* ${yt_play[0].author.name}
❒ *Enlace:* ${yt_play[0].url.replace(/^https?:\/\//, '')}
`.trim();
tempStorage[m.sender] = { url: yt_play[0].url, title: yt_play[0].title };
if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: encontrado + `\n\n● _Para descargar su contenido, responda a este mensaje con el tipo de formato o reaccionarlo con emojis._\n• *Por ejemplo:*\n\n\`Audio\` = ❤️\n\`Video\` = 👍` }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: encontrado, footer: textoInfo, buttons: [{ buttonId: `#mp4 ${yt_play[0].url}`, buttonText: { displayText: "VIDEO" }, type: 1 }, { buttonId: `#mp3 ${yt_play[0].url}`, buttonText: { displayText: "AUDIO" }, type: 1 }], viewOnce: true, headerType: 4 }, { quoted: m });
}};

handler.before = async (m, { conn }) => {
const text = m.text.trim().toLowerCase();
if (!['❤️', 'audio', '👍', 'video'].includes(text)) return;
const userVideoData = tempStorage[m.sender];
if (!userVideoData || !userVideoData.url) return 
const [input, qualityInput = text === '❤️' || text === 'audio' ? '320' : '720'] = userVideoData.title.split(' ');
const audioQualities = ['64', '96', '128', '192', '256', '320'];
const videoQualities = ['240', '360', '480', '720', '1080'];
const isAudio = text === '❤️' || text === 'audio';
const selectedQuality = (isAudio ? audioQualities : videoQualities).includes(qualityInput) ? qualityInput : (isAudio ? '320' : '720');

const audioApis = [
{ url: () => ogmp3.download(userVideoData.url, selectedQuality, 'audio'), extract: (data) => ({ data: data.result.download, isDirect: false }) },
{ url: () => ytmp3(userVideoData.url), extract: (data) => ({ data, isDirect: true }) },
{ url: () => fetch(`https://api.neoxr.eu/api/youtube?url=${userVideoData.url}&type=audio&quality=128kbps&apikey=GataDios`).then(res => res.json()), extract: (data) => ({ data: data.data.url, isDirect: false }) },
{ url: () => fetch(`https://api.fgmods.xyz/api/downloader/ytmp4?url=${userVideoData.url}&apikey=${fgkeysapi}`).then(res => res.json()), extract: (data) => ({ data: data.result.dl_url, isDirect: false }) },
{ url: () => fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.dl, isDirect: false }) },
{ url: () => fetch(`${apis}/download/ytmp3?url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.status ? data.data.download.url : null, isDirect: false }) },
{ url: () => fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.result.download.url, isDirect: false }) }
];

const videoApis = [
{ url: () => ogmp3.download(userVideoData.url, selectedQuality, 'video'), extract: (data) => ({ data: data.result.download, isDirect: false }) },
{ url: () => ytmp4(userVideoData.url), extract: (data) => ({ data, isDirect: false }) },
{ url: () => fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.dl, isDirect: false }) },
{ url: () => fetch(`https://api.neoxr.eu/api/youtube?url=${userVideoData.url}&type=video&quality=720p&apikey=GataDios`).then(res => res.json()), extract: (data) => ({ data: data.data.url, isDirect: false }) },
{ url: () => fetch(`https://api.fgmods.xyz/api/downloader/ytmp4?url=${userVideoData.url}&apikey=${fgkeysapi}`).then(res => res.json()), extract: (data) => ({ data: data.result.dl_url, isDirect: false }) },
{ url: () => fetch(`${apis}/download/ytmp4?url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.status ? data.data.download.url : null, isDirect: false }) },
{ url: () => fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.result.media.mp4, isDirect: false }) }
];

const download = async (apis) => {
let mediaData = null;
let isDirect = false;
for (const api of apis) {
try {
const data = await api.url();
const { data: extractedData, isDirect: direct } = api.extract(data);
if (extractedData) {
const size = await getFileSize(extractedData);
if (size >= 1024) {
mediaData = extractedData;
isDirect = direct;
break;
}}} catch (e) {
console.log(`Error con API: ${e}`);
continue;
}}
return { mediaData, isDirect };
};
try {
if (text === '❤️' || text === 'audio') {
await conn.sendMessage(m.chat, { text: `● _Descargando el audio, espere un momento..._` }, { quoted: m || null });
const { mediaData, isDirect } = await download(audioApis);
if (mediaData) {
const fileSize = await getFileSize(mediaData);
if (fileSize > LimitAud) {
await conn.sendMessage(m.chat, { document: isDirect ? mediaData : { url: mediaData }, mimetype: 'audio/mpeg', fileName: `${userVideoData.title}.mp3` }, { quoted: m || null });
} else {
await conn.sendMessage(m.chat, { audio: isDirect ? mediaData : { url: mediaData }, mimetype: 'audio/mpeg' }, { quoted: m || null });
}} else {
await conn.sendMessage(m.chat, { text: `● _No se ha podido descargar el audio._\n- _Intente copiar el enlace y usar el comando: *#mp3*_` }, { quoted: m || null });
}
} else if (text === '👍' || text === 'video') {
await conn.sendMessage(m.chat, { text: `● _Descargando el video, espere un momento..._` }, { quoted: m || null });
const { mediaData, isDirect } = await download(videoApis);
if (mediaData) {
const fileSize = await getFileSize(mediaData);
const messageOptions = { fileName: `${userVideoData.title}.mp4`, caption: `⟡ *${userVideoData.title}*\n> ${wm}`, mimetype: 'video/mp4' };
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: isDirect ? mediaData : { url: mediaData }, ...messageOptions }, { quoted: m || null });
} else {
await conn.sendMessage(m.chat, { video: isDirect ? mediaData : { url: mediaData }, ...messageOptions }, { quoted: m || null });
}} else {
await conn.sendMessage(m.chat, { text: `● _No se ha podido descargar el video._\n- _Intente copiar el enlace y usar el comando: *#mp4*_` }, { quoted: m || null });
}}} catch (error) {
console.error(error);
} finally {
delete tempStorage[m.sender];
}};
handler.command = /^(play|play2)$/i;
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ':' : ':') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ':' : ':') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ':' : ':') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' ' : ' ') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}
  
const getBuffer = async (url) => {
try {
const response = await fetch(url);
const buffer = await response.arrayBuffer();
return Buffer.from(buffer);
} catch (error) {
console.error("Error al obtener el buffer", error);
throw new Error("Error al obtener el buffer");
}}

async function getFileSize(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return parseInt(response.headers.get('content-length') || 0);
  } catch {
    return 0;
  }
}

async function fetchInvidious(url) {
const apiUrl = `https://invidious.io/api/v1/get_video_info`
const response = await fetch(`${apiUrl}?url=${encodeURIComponent(url)}`)
const data = await response.json()
if (data && data.video) {
const videoInfo = data.video
return videoInfo
} else {
throw new Error("No se pudo obtener información del video desde Invidious")
}}

function getBestVideoQuality(videoData) {
const preferredQualities = ['720p', '360p', 'auto']
const availableQualities = Object.keys(videoData.video)
for (let quality of preferredQualities) {
if (availableQualities.includes(quality)) {
return videoData.video[quality].quality
}}
return '360p'
}

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})};

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};
*/
