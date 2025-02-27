import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba el nombre de una cancion o video en YouTube para ver una lista._\n\n• *Por ejemplo:*\n#${command} Stereo Love.` }, { quoted: m })
try {
let result = await yts(text);
let ytres = result.videos;
let teskd = `Resultados encontrados.`
let listSections = [];
for (let index in ytres) {
let v = ytres[index];
listSections.push({
title: `PLAY LIST • YOUTUBE`,
rows: [{
header: 'VIDEO', title: `${v.title}`, description: `${v.timestamp}\n`, id: `${usedPrefix}mp4 ${v.url}`
}, {
header: "AUDIO", title: `${v.title}`, description: `${v.timestamp}\n`, id: `${usedPrefix}mp3 ${v.url}`
}, {
header: "VIDEO EN DOCUMENTO", title: `${v.title}`, description: `${v.timestamp}\n`, id: `${usedPrefix}mp4doc ${v.url}`
}, {
header: "AUDIO EN DOCUMENTO", title: `${v.title}`, description: `${v.timestamp}\n`, id: `${usedPrefix}mp3doc ${v.url}`
}]});
}
await conn.sendList(m.chat, `Se han encontrado resultados.\n`, `Puede seleccionar cualquier opcion en *Ver Lista*`, `Ver Lista`, listSections, fkontak);
} catch (e) {
await conn.sendMessage(m.chat, {text: `● _Ocurrio un error con el comando: *#${command}*_`}, { quoted: m })
console.log(e) 
}}
handler.command = ['playlist2', 'mdlist2']
export default handler
