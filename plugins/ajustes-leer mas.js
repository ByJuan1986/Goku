let handler = async (m, { conn, text }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) return conn.sendMessage(m.chat, { text: `⪩ Ingrese el comando y escriba cualquier texto y se enviara de manera muy corta.` }, { quoted: m })
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
conn.sendMessage(m.chat, { text: l + readMore + r }, { quoted: m })
}
handler.command = /^(readmore|leermas)$/i 
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
