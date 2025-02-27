import db from '../lib/database.js'
let handler = async (m, { args, command }) => {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y la cantidad de *${currency2}* que deseas depositar._\n\n• *Por ejemplo:*\n#${command} 50` }, { quoted: m })
if ((args[0]) < 1) return conn.sendMessage(m.chat, { text: `● _De favor, indique la cantidad de *${currency2}* que desea depositar._\n\n• *Por ejemplo:*\n#${command} 50` }, { quoted: m })
if (args[0] == 'todo') {
let count = parseInt(user.limit)
user.limit -= count * 1
user.bankk += count * 1
await conn.sendMessage(m.chat, { text: `✓ _Has depositado ${count} *${currency2}* con exito, ahora estan seguros._` }, { quoted: m })
return !0
}
if (!Number(args[0])) return conn.sendMessage(m.chat, { text: `● _Para indicar la cantidad solo debe ser numeros, no letras ni simbolos._\n\n• *Por ejemplo:*\n#${command} 50` }, { quoted: m })
let count = parseInt(args[0])
if (!user.limit) return conn.sendMessage(m.chat, { text: `● _No tienes esa cantidad de *${currency2}* para depositarlo._\n- _Tienes ${user.limit} *${currency2}* en tu perfil._` }, { quoted: m })
if (user.limit < count) return conn.sendMessage(m.chat, { text: `● _Solo tienes ${user.limit} de *${currency2}*, no puedes hacer un deposito mayor._` }, { quoted: m })
user.limit -= count * 1
user.bankk += count * 1
await conn.sendMessage(m.chat, { text: `✓ _Has depositado ${count} *${currency2}* con exito, ahora estan seguros._` }, { quoted: m })
}
handler.command = ['dep2']
export default handler 
