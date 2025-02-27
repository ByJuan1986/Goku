import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas un enlace valido de un repositorio de *GitHub* para descargarlo._`, { quoted: m })
if (!regex.test(args[0])) return conn.sendMessage(m.chat, {text: `⪩ _El enlace que has ingresado no son correctos._\n\n• *Por ejemplo:*\n#${command} https://github.com/LolMD/Librerias`, { quoted: m })
try {   
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, {text: `_Descargando archivos, espere un momento..._`, { quoted: m })
conn.sendFile(m.chat, url, filename, null, m)
} catch (e) { 
await conn.sendMessage(m.chat, {text: `● _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e)
}}
handler.command = ["github", "git"];
export default handler
