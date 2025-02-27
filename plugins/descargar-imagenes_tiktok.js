import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas un enlace de imagenes en *TikTok* para descargarlos._`, { quoted: m })
if (!(text.includes('http://') || text.includes('https://'))) return conn.sendMessage(m.chat, {text: `⪩ _El enlace que has ingresado no es correcto, debe de ser un enlace de imagenes en *TikTok.*_`, { quoted: m })
if (!text.includes('tiktok.com')) return conn.sendMessage(m.chat, {text: `⪩ _El formato no es correcto, debe de ser un enlace de *tiktok.com* con imagenes._`, { quoted: m })
try {
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkeysapi}&url=${text}`)
let anu = await res.json()
if (anu.status != '200') throw Error(anu.message)
anu = anu.result
if (anu.length == 0) throw Error('Error : no data')
let c = 0 
for (let x of anu) {
if (c == 0) await conn.sendMessage(m.chat, { image: { url: x }, caption: `Aqui tiene su imagen.` }, { quoted : m })
else await conn.sendMessage(m.sender, { image: { url: x }, caption: ''}, { quoted : m })
c += 1
}
} catch (e) {
await conn.sendMessage(m.chat, {text: `● _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e)
}}
handler.command = /^(imgtiktok|tiktokimg)$/i
export default handler
