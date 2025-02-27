let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y el nombre del usuario en *Instagram* para ver sus historias._\n\n• *Por ejemplo:*\n#${command} MD_lolman`, { quoted: m })
try {
await conn.sendMessage(m.chat, {text: `_Buscando resultados, espere un momento..._`, { quoted: m })
const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`)
var anu = await res.json()
var anuku = anu.result
if (anuku == '') return conn.sendMessage(m.chat, {text: `⪩ _No se han encontrado resultados del nombre de usuario._\n- _Verifica si esta bien escrito y intenta de nuevo._\n\n- *Otra razon, puede que el usuario no tenga historias que ver.*`, { quoted: m })
for (var i of anuku) {
let res = await axios.head(i)
let mime = res.headers['content-type'] 
if (/image/.test(mime)) await conn.sendFile(m.chat, i, 'error.jpg', 'Imagen descargada.', m).catch(() => { return conn.sendMessage(m.chat, {text: `⪩ _Usuario no encontrado o sin historias..._`, { quoted: m })})
if (/video/.test(mime)) await conn.sendFile(m.chat, i, 'error.mp4', 'Video descargado.', m).catch(() => { return conn.sendMessage(m.chat, {text: `⪩ _Usuario no encontrado o sin historias..._`, { quoted: m })})
}} catch (e) {
await conn.sendMessage(m.chat, {text: `• _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e)
}}
handler.command = ['storyig', 'igstatus']
export default handler