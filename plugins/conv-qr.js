import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba un texto para convertirlo en un codigo QR._`, { quoted: m })
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', wm, m)
}
handler.command = /^(qrcode)$/i
export default handler
