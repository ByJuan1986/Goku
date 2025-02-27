let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined) return conn.sendButton(m.chat, `⪩ _¿Quieres abrir o cerrar el grupo?_`, 'Seleccione una opcion.', null, [['ABRIR', '.grupo abrir'], ['CERRAR', '.grupo cerrar']], null, null, { quoted: m })
await conn.groupSettingUpdate(m.chat, isClose)
  
if (isClose === 'not_announcement'){
conn.sendMessage(m.chat, {text: `⪩ _El grupo se ha abierto con exito, ahora todos pueden hablar._`, { quoted: m })
}
  
if (isClose === 'announcement'){
conn.sendMessage(m.chat, {text: `⪩ _El grupo se ha cerrado con exito, solo los administradores pueden hablar._`, { quoted: m })
}}
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
