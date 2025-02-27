import db from '../lib/database.js'
let handler = async (m, { args, command }) => {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y la cantidad de *${currency3}* que deseas depositar._\n\n• *Por ejemplo:*\n#${command} 50` }, { quoted: m })
if ((args[0]) < 1) return conn.sendMessage(m.chat, { text: `● _De favor, indique la cantidad de *${currency3}* que desea depositar._\n\n• *Por ejemplo:*\n#${command} 50` }, { quoted: m })
if (args[0] == 'todo') {
let count = parseInt(user.exp)
user.exp -= count * 1
user.bankkk += count * 1
await conn.sendMessage(m.chat, { text: `✓ _Has depositado ${count} *${currency3}* con exito, ahora estan seguros._` }, { quoted: m })
return !0
}
if (!Number(args[0])) return conn.sendMessage(m.chat, { text: `● _Para indicar la cantidad solo debe ser numeros, no letras ni simbolos._\n\n• *Por ejemplo:*\n#${command} 50` }, { quoted: m })
let count = parseInt(args[0])
if (!user.exp) return conn.sendMessage(m.chat, { text: `● _No tienes esa cantidad de *${currency3}* para depositarlo._\n- _Tienes ${user.exp} *${currency3}* en tu perfil._` }, { quoted: m })
if (user.exp < count) return conn.sendMessage(m.chat, { text: `● _Solo tienes ${user.exp} de *${currency3}*, no puedes hacer un deposito mayor._` }, { quoted: m })
user.exp -= count * 1
user.bankkk += count * 1
await conn.sendMessage(m.chat, { text: `✓ _Has depositado ${count} *${currency3}* con exito, ahora estan seguros._` }, { quoted: m })
}
handler.command = ['dep3']
export default handler 
