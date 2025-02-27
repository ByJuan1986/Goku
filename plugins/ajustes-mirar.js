var handler = async (m, { conn }) => {
if (!/viewOnce/.test(m.quoted?.mtype)) return conn.sendMessage(m.chat, { text: `⪩ _Ingrese el comando y responda a un archivo enviado de *Ver una vez*.` }, { quoted: m })
let mtype = Object.keys(m.quoted.message)[0]
let buffer = await m.quoted.download()
let caption = m.quoted.message[mtype].caption || ''
conn.sendMessage(m.chat, { [mtype.replace(/Message/, '')]: buffer, caption }, { quoted: m })
}
handler.command = /^ver|vcs/i
export default handler
