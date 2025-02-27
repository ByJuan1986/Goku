import {find_lyrics} from '@brandond/findthelyrics';
import {getTracks} from '@green-code/music-track-data';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
const teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
if (!teks) return conn.sendMessage(m.chat, { text: `⪩ _Ingrese el comando y escriba el nombre de alguna cancion para sacar la letra._\n\n• *Por ejemplo:*\n#${command} Stereo Love` }, { quoted: m })
try {
const result = await getTracks(teks);
const lyrics = await find_lyrics(`${result[0].artist} ${result[0].title}`);
const res = await fetch(global.API('https://some-random-api.com', '/lyrics', {title: result[0].artist + result[0].title}));
const json = await res.json();
let img; 
try {
img = result.album.artwork;
} catch {
try {
img = json.thumbnail.genius;
} catch {
const bochil = await googleImage(`${result[0].artist} ${result[0].title}`);
img = await bochil.getRandom();
}}
let letrasss = `
*\`RESULTADOS ENCONTRADOS\`*
- *Nombre:* ${result[0].title || 'error_command'}
- *Artista:* ${result[0].artist || 'error_command'}

*Letra:* ${lyrics || 'error_command'}
`.trim();

conn.sendMessage(m.chat, { text: `${letrasss}` }, { quoted: m });
//conn.sendFile(m.chat, img, 'mdmx.jpg' letrasss, { quoted: m });
await conn.sendMessage(m.chat, {audio: {url: result[0].preview}, fileName: `${result[0].artist} ${result[0].title}.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
} catch (e) {
await conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#${command}*_` }, { quoted: m })
console.log(e)
}}
handler.command = ["lyrics2", "letra2"]
export default handler

