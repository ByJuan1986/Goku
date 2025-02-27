import axios from "axios"
import fg from 'api-dylux';
import cheerio from 'cheerio';
import {tiktok} from '@xct007/frieren-scraper';
import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import {tiktokdl} from '@bochilteam/scraper';
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas un enlace valido de un video de *TikTok* para descargarla._`, { quoted: m })
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.sendMessage(m.chat, {text: `⪩ _El enlace que has ingresado no es valido, recuerde usar un enlace de un video de TikTok._`, { quoted: m })
await conn.sendMessage(m.chat, {text: `_Descargando, espere un momento..._`, { quoted: m })
try {
const dataF = await tiktok.v1(args[0]);
await conn.sendMessage(m.chat, {video: {url: dataF.play}, caption: `Aqui tiene su video.`}, {quoted: m});    
} catch (ee1) {
try {
const tTiktok = await tiktokdlF(args[0]);
await conn.sendMessage(m.chat, {video: {url: tTiktok.video}, caption: `Aqui tiene su video.`}, {quoted: m});            
} catch (e1) {
try {
const response = await axios.get(`https://api.dorratz.com/v2/tiktok-dl?url=${args[0]}`);
if (response.data.status && response.data.data) {
const videoData = response.data.data.media;
const videoUrl = videoData.org; 
await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: `Aqui tiene su video.` }, { quoted: m });
}} catch (e2) {
try {
const dataFn = await conn.getFile(`${CFROSAPI}/api/tiktokv2?url=${args[0]}`);   
await conn.sendMessage(m.chat, {video: dataFn.data, caption: `Aqui tiene su video.`}, {quoted: m});
} catch (e3) {
try {
const p = await fg.tiktok(args[0]);
await conn.sendMessage(m.chat, {video: {url: p.nowm}, caption: `Aqui tiene su video.`}, {quoted: m});             
} catch (e3) {
try {
const {author: {nickname}, video, description} = await tiktokdl(args[0]);
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
await conn.sendMessage(m.chat, {video: {url: url}, caption: `Aqui tiene su video.`}, {quoted: m});               
} catch (e) {
console.log(e) 
await conn.sendMessage(m.chat, {text: `• _Ocurrio un error en el comando *#${command}*_`, { quoted: m })
}}}}}}}
handler.command = ["tiktok"]
export default handler

async function tiktokdlF(url) {
  if (!/tiktok/.test(url)) return `*Ejemplo:* _${usedPrefix + command} https://vm.tiktok.com/ZM686Q4ER/_`;
  const gettoken = await axios.get('https://tikdown.org/id');
  const $ = cheerio.load(gettoken.data);
  const token = $('#download-form > input[type=hidden]:nth-child(2)').attr( 'value' );
  const param = {url: url, _token: token};
  const {data} = await axios.request('https://tikdown.org/getAjax?', {method: 'post', data: new URLSearchParams(Object.entries(param)), headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'}});
  const getdata = cheerio.load(data.html);
  if (data.status) {
    return {status: true, thumbnail: getdata('img').attr('src'), video: getdata('div.download-links > div:nth-child(1) > a').attr('href'), audio: getdata('div.download-links > div:nth-child(2) > a').attr('href')};
  } else {
    return {status: false};
  }
}
