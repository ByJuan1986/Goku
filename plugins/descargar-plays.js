import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) return conn.sendMessage(m.chat, { text: `⪩ _Ingrese el comando y escriba el nombe de la cancion que quieres buscar._\n\n• *Por ejemplo:*\n#${command} Stereo Love` }, { quoted: m })
let res = await yts(text)
let vid = res.videos[0]
if (!vid) return conn.sendMessage(m.chat, { text: `⪩ _Lo siento, el video solicitado no fue encontrado._` }, { quoted: m })
let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
let play = `
⩠ *\`R E S U L T A D O S\`* ⩠
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
╭· *Titulo:* 
╰─· ${vid.title}

╭· *Publicado:* 
╰─· ${vid.ago}

╭· *Duracion:* 
╰─· ${vid.timestamp}

╭· *Vistas:* 
╰─· ${vid.views.toLocaleString()}
`
if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: play }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: play, footer: textoInfo,
buttons: [{ 
buttonId: `.mp4`, buttonText: { displayText: "VIDEO", }, type: 1, }, {
buttonId: `.mp3`, buttonText: { displayText: "AUDIO", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}}
handler.command = ['play']
handler.disabled = false
export default handler
