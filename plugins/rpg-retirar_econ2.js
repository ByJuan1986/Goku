import db from '../lib/database.js'
let handler = async (m, { args }) => {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: `● _Ingrese el comando y indique la cantidad de *${currency2}* para retirar._\n\n• *Por ejemplo:*\n#ret2 50`, { quoted: m })
if (args[0] == 'todo') {
let count = parseInt(user.bankk)
user.bankk -= count * 1
user.limit += count * 1
await conn.sendMessage(m.chat, {text: `✓ _Has retirado ${count} *${currency2}* con exito, ahora estan en tu perfil._`, { quoted: m })
return !0
}
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: `● _La cantidad no es valida, recuerde ingresar numeros y no simbolos o letras._\n\n• *Por ejemplo:*\n#ret 50`, { quoted: m })
let count = parseInt(args[0])
if (!user.bankk) return conn.sendMessage(m.chat, {text: `● _No tienes *${currency2}* depositados para retirar, puedes depositar los *${currency2}* que hay en tu perfil para guardarlos de manera segura._`, { quoted: m })
if (user.bankk < count) return conn.sendMessage(m.chat, {text: `● _Lo siento, solo tienes ${user.bankk} de *${currency2}* para retirar_`, { quoted: m })
user.bankk -= count * 1
user.limit += count * 1
await conn.sendMessage(m.chat, {text: `✓ _Has retirado ${count} de *${currency2}* con exito, ahora estan en tu perfil._`, { quoted: m })
handler.command = ['ret2']
export default handler