let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba un texto para aplicar este efecto._\n\n• *Por ejemplo:*\n#${command} Hola Mundo.` }, { quoted: m })
let img = global.API('fgmods', '/api/maker/txt', { text: teks }, 'apikey')
conn.sendFile(m.chat, img, 'img.png', `_Aqui tiene su texto._`, m)}
handler.command = ['txt', 'escribir']

export default handler
  
