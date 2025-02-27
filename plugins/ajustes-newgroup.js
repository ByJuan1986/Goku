let handler = async (m, { conn, text, command }) => {
if (!text) return conn.sendMessage(m.chat, { text: `⪩ _Ingrese el comando y escriba el nombre del grupo que quiere que el bot lo cree._\n\n• *Por ejemplo:*\n#${command} Nuevo Grupo` }, { quoted: m })
try{
conn.sendMessage(m.chat, { text: `_Creando el grupo, espere un momento..._` }, { quoted: m })
let group = await conn.groupCreate(text, [m.sender])
let link = await conn.groupInviteCode(group.gid)
let url = 'https://chat.whatsapp.com/' + link;
conn.sendMessage(m.chat, { text: `⪩ _Aqui tiene el enlace del grupo creado._\n- ${url}` }, { quoted: m })
} catch (e) {
conn.sendMessage(m.chat, { text: `⪩ _Ocurrio un error con el comando: *#${command}*_` }, { quoted: m })
}}
handler.command = ['newgroup']
handler.mods = true
export default handler