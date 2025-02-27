let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, text, command }) => {
  if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba una peticion para llamar a todos los administradores de este grupo._\n\n- _Use este comando solo si hay un problema importante._`, { quoted: m })
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || imagens
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `• @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `${pesan}`

let textoA = `
• *MENSAJE IMPORTANTE* •
_Mensaje:_ ${oi}

Enviando a los admins:
${listAdmin}
`.trim()
await conn.sendFile(m.chat, pp, 'error.jpg', textoA, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.command = /^(admins)$/i
handler.group = true
export default handler
