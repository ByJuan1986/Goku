import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba una peticion para hablar con *Gemini*._\n\n• *Por ejemplo:*\n#${command} Hola, como estas?`, { quoted: m })
try {
conn.sendPresenceUpdate('composing', m.chat);
var apii = await fetch(`https://apis-starlights-team.koyeb.app/starlight/gemini?text=${text}`)
var res = await apii.json()
await conn.sendMessage(m.chat, {text: res.result, { quoted: m })
} catch (e) {
await conn.sendMessage(m.chat, {text: `⪩ _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e)
}}
handler.command = ['bard', 'gemini']
export default handler
