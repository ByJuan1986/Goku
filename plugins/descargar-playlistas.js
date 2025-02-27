import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba el nombre del autor musical para ver su PlayList._\n\n• *Por ejemplo:*\n#${command} TheFatRat`, { quoted: m });
try {
let result = await yts(text);
let ytres = result.videos;
let teskd = `*Autor/a buscado:* ${text}`
let listSections = [];
for (let index in ytres) {
let v = ytres[index];
listSections.push({
title: `• RESULTADOS ENCONTRADOS •`,
rows: [{
header: 'VIDEO 🎬',
title: `${v.title}`,
description: `${v.timestamp}\n`, 
id: `${usedPrefix}mp4 ${v.url}`
}, {
header: "AUDIO 🎶",
title: `${v.title}`,
description: `${v.timestamp}\n`, 
id: `${usedPrefix}mp3 ${v.url}`
}, {
header: "VIDEO : DOCUMENTO 🎬",
title: `${v.title}`,
description: `${v.timestamp}\n`, 
id: `${usedPrefix}mp4doc ${v.url}`
}, {
header: "AUDIO : DOCUMENTO 🎶",
title: `${v.title}`,
description: `${v.timestamp}\n`, 
id: `${usedPrefix}mp3doc ${v.url}`
}]});
}
await conn.sendList(m.chat, `• *RESULTADOS ENCONTRADOS* •\n`, `- Seleccione el boton de *Ver Lista* para ver la lista de canciones.`, `Ver Lista`, listSections, { quoted: m });
} catch (e) {
await conn.sendMessage(m.chat, {text: `• _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e) 
}}
handler.command = ["playlist", "mplist"]
export default handler
