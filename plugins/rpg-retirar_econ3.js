import db from '../lib/database.js'
let handler = async (m, { args }) => {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: `● _Ingrese el comando y indique la cantidad de *${currency3}* para retirar._\n\n• *Por ejemplo:*\n#ret3 50`, { quoted: m })
if (args[0] == 'todo') {
let count = parseInt(user.bankkk)
user.bankkk -= count * 1
user.exp += count * 1
await conn.sendMessage(m.chat, {text: `✓ _Has retirado ${count} *${currency3}* con exito, ahora estan en tu perfil._`, { quoted: m })
return !0
}
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: `● _La cantidad no es valida, recuerde ingresar numeros y no simbolos o letras._\n\n• *Por ejemplo:*\n#ret3 50`, { quoted: m })
let count = parseInt(args[0])
if (!user.bankkk) return conn.sendMessage(m.chat, {text: `● _No tienes *${currency3}* depositados para retirar, puedes depositar los *${currency3}* que hay en tu perfil para guardarlos de manera segura._`, { quoted: m })
if (user.bankkk < count) return conn.sendMessage(m.chat, {text: `● _Lo siento, solo tienes ${user.bankkk} de *${currency3}* para retirar_`, { quoted: m })
user.bankkk -= count * 1
user.exp += count * 1
await conn.sendMessage(m.chat, {text: `✓ _Has retirado ${count} de *${currency3}* con exito, ahora estan en tu perfil._`, { quoted: m })
handler.command = ['ret3']
export default handler