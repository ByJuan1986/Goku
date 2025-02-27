import db from '../lib/database.js'
let handler = async (m, { args }) => {
let user = global.db.data.users[m.sender]
if (!args[0]) return conn.sendMessage(m.chat, {text: `● _Ingrese el comando y indique la cantidad de *${currency}* para retirar._\n\n• *Por ejemplo:*\n#$ret 50`, { quoted: m })
if (args[0] == 'todo') {
let count = parseInt(user.bank)
user.bank -= count * 1
user.money += count * 1
await conn.sendMessage(m.chat, {text: `✓ _Has retirado ${count} *${currency}* con exito, ahora estan en tu perfil._`, { quoted: m })
return !0
}
if (!Number(args[0])) return conn.sendMessage(m.chat, {text: `● _La cantidad no es valida, recuerde ingresar numeros y no simbolos o letras._\n\n• *Por ejemplo:*\n#ret 50`, { quoted: m })
let count = parseInt(args[0])
if (!user.bank) return conn.sendMessage(m.chat, {text: `● _No tienes *${currency}* depositados para retirar, puedes depositar los *${currency}* que hay en tu perfil para guardarlos de manera segura._`, { quoted: m })
if (user.bank < count) return conn.sendMessage(m.chat, {text: `● _Lo siento, solo tienes ${user.bank} de *${currency}* para retirar_`, { quoted: m })
user.bank -= count * 1
user.money += count * 1
await conn.sendMessage(m.chat, {text: `✓ _Has retirado ${count} de *${currency}* con exito, ahora estan en tu perfil._`, { quoted: m })
handler.command = ['ret']
export default handler
