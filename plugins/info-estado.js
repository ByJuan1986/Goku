import ws from 'ws'
let handler = async (m, { conn, command, usedPrefix }) => {
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])]
const totalUsers = users.length
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let pp = mxImagens
let uptime = clockString(_uptime)
let estado = `
🜲 *ESTADO • PRINCIPAL* 🜲
• _Estado de_ ${botname}

● *ID:* ￫ Kfj7k8M7n3lKSBDAkLGPJn0l83J
● *Modo:* ￫ ${global.opts['self'] ? 'Privado.' : 'Publico.'}
● *Actividad:* ￫ ${uptime}
● *Servidores:* ￫ ${totalUsers || 0}
● *Usuarios:* ￫ ${Object.keys(global.db.data.users).length} 
● *Chats bloqueados:* ￫ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
● *Usuarios bloqueados:* ￫ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}`

if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: estado }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: estado, footer: textoInfo,
buttons: [{ 
buttonId: `.perfil`, buttonText: { displayText: "PERFIL", }, type: 1, }, {
buttonId: `.infobot`, buttonText: { displayText: "INFO BOT", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}

//await conn.sendFile(m.chat, pp, 'error.png', estado, m)

}
handler.command = /^(estado|status)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
