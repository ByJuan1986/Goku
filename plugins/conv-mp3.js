import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) return conn.sendMessage(m.chat, { text: `⪩ _Ingrese el comando y responda a una nota de voz o un video para convertirlo en audio mp3._` }, { quoted: m })
await conn.sendPresenceUpdate('recording', m.chat)
let media = await q.download?.()
if (!media && !/video/.test(mime)) return conn.sendMessage(m.chat, { text: `● _Ocurrio un error durante el proceso, intentalo de nuevo._` }, { quoted: m })
if (!media && !/audio/.test(mime)) return conn.sendMessage(m.chat, { text: `● _Ocurrio un error durante el proceso, intentelo de nuevo._` }, { quoted: m })
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) return conn.sendMessage(m.chat, { text: `● _Ocurrio un error durante el proceso, intentalo de nuevo._` }, { quoted: m })
if (!audio.data && !/video/.test(mime)) return conn.sendMessage(m.chat, { text: `● _Ocurrio un error durante el proceso, intentelo de nuevo._` }, { quoted: m })
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' }, { quoted: m })
}

handler.command = ["ts_mp3", "tsmp3"]
export default handler
