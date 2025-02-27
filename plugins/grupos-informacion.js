let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || imagens
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`✎ _Informacion del grupo._
_Aqui puede ver la info completa del grupo._

──────────

● *ID:* » ${groupMetadata.id}
● *Nombre:* » ${groupMetadata.subject}
● *Participantes:* » ${participants.length}
● *Creador del grupo:* » @${owner.split('@')[0]}

──────────

● *Descripcion:*
${groupMetadata.desc?.toString() || 'Sin descripcion.'}

──────────
● *Admins:*
${listAdmin}`.trim()
  
await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })   
}
handler.command = /^(infogrupo|grupoinfo)$/i
handler.group = true
export default handler
