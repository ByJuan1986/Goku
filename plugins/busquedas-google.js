import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default;
const text = args.join` `;
if (!text) return conn.sendMessage(m.chat, { text: `⪩ _Ingrese el comando y escriba lo que quiera buscar en google._\n\n• *Por ejemplo:*\n#${command} Perritos lindos.` }, { quoted: m })
try {
const url = 'https://google.com/search?q=' + encodeURIComponent(text);
google({'query': text}).then(res => {
let teks = `*RESULTADOS:*\n- *Enlace directo:*${url}\n\n`
for (let g of res) {
teks += `_${g.title}_\n_${g.link}_\n_${g.snippet}_\n\n------\n\n`
} 
const ss = `https://image.thum.io/get/fullpage/${url}`

conn.sendMessage(m.chat, { image: { url: ss }, caption: teks }, { quoted: m })
//conn.sendFile(m.chat, ss, 'mdmx.jpg', teks, { quoted: m })
})
} catch {    
conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#${command}*_` }, { quoted: m })
}}

handler.command = ["google", "gugul"]
export default handler

