import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import ws from 'ws'

async function handler(m, { conn, usedPrefix, command }) {
const __filename = fileURLToPath(import.meta?.url)
const __dirname = path?.dirname(__filename)
const carpetaBase = path?.resolve(__dirname, '..', 'MdmxDirector')
const cantidadCarpetas = (fs?.readdirSync(carpetaBase, { withFileTypes: true }).filter(item => item?.isDirectory())?.length) || 0
let _uptime = process.uptime() * 1000
let uptime = convertirMs(_uptime)
  
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])]

const message = users.map((v, index) => `
┍·────────────ㅇ
│🝔 *Servidor:* \`MDMX-chrome\` 
│🝔 *Rent By:* ${v.user.name || global.db.data.users[v.user.jid]?.name || 'Oculto.' }
│🝔 *Tiempo activo:* ${v.uptime ? convertirMs(Date.now() - v.uptime) : "Oculto."}
│🝔 *Nro:* wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}ping
│🝔 *Asistencia:* 24/7 (@mdmx_mktg)
│🝔 *Bot:* ${index + 1} de ${totalUsers || 0}
┕·────────────ㅇ`).join('\n\n')
const replyMessage = message.length === 0 ? `No hay *Sub-Bots* por el momento, vuelva pronto...` : message
const totalUsers = users.length
const responseMessage = `
*\`SUB-BOTS / GOKUBOT\`*
- _Puedes usar estos bots para agregarlos a grupos o descargar cosas, con permiso claramante._
_Ya que los compradores han adquirido este proyecto y son publicos._

${replyMessage.trim()}`.trim()
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: responseMessage }, { quoted: m })
}
handler.command = /^(subbots|gokus)$/i
export default handler

function convertirMs(ms) {
const s = Math.floor(ms / 1000) % 60;
const m = Math.floor(ms / 60000) % 60;
const h = Math.floor(ms / 3600000) % 24;
const d = Math.floor(ms / 86400000);
return [ d > 0 ? `${d}d` : "", `${h}h`, `${m}m`, `${s}s` ].filter(Boolean).join(" ")
}
