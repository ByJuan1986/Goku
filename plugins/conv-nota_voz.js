import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let nofunca = `⪩ _Lo siento, pero la conversion ha fallado, intentalo de nuevo._\n- _Si el error persiste, reporta el comando._`
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y responda a un video o audio mp3 para convertirlo en una nota de voz._` }, { quoted: m })
let media = await q.download?.()
if (!media && !/video/.test(mime)) return conn.sendMessage(m.chat, { text: `${nofunca}` }, { quoted: m })
if (!media && !/audio/.test(mime)) return conn.sendMessage(m.chat, { text: `${nofunca}` }, { quoted: m })
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) return conn.sendMessage(m.chat, { text: `${nofunca}` }, { quoted: m })
if (!audio.data && !/video/.test(mime)) return conn.sendMessage(m.chat, { text: `${nofunca}` }, { quoted: m })
conn.sendMessage(m.chat, { text: `⪩ _Aqui tiene su nota de voz._` }, { quoted: m })
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' }, { quoted: m })
}
handler.command = ["tsvn", "ts_vn"]
export default handler