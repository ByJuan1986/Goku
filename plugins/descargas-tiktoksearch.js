import axios from 'axios';
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba el nombre del usuario en *TikTok* para ver sus videos._\n\n• *Por ejemolo:*\n#ttvideos 00.44.h`, { quoted: m });
try {
await conn.sendMessage(m.chat, {text: `_Buscando, espere un momento..._`, { quoted: m });
let { data: response } = await axios.get(`${apis}/search/tiktoksearch?query=${text}`);
if (!response || !response.meta || !Array.isArray(response.meta) || response.meta.length === 0) return conn.sendMessage(m.chat, {text: `✎ _No se ha encontrado la cuenta de ( *${text}* ), seguro que has escrito bien?_\n_Intentalo de nuevo._`, { quoted: m });
let searchResults = response.meta;
shuffleArray(searchResults);
let selectedResults = searchResults.slice(0, 3)
let messages = selectedResults.map(result => [
`${result.title}`, 
`MBMD`,
result.hd
]);
await conn.sendCarousel(m.chat, `• *RESULTADOS ENCONTRADOS* •`, "MBMD", messages, m);
} catch (error) {
conn.sendMessage(m.chat, {text: `✎ _Ocurrio un error con el comando: *#${command}*_`, { quoted: m });
console.error(error);    
}};
handler.command = ['tiktoksearch', 'ttsearch'];
export default handler;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }