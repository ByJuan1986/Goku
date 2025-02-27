export async function before(m, conn) {
   
if (!m.isGroup)
return
let chats = global.db.data.chats[m.chat]
if (!chats.expired)
return !0
if (+new Date() > chats.expired) {
await m.reply(`¡¡Adios a todos!!! Mi tiempo de estar aqui ya se ha terminado, espero verlos próximamente, ¡adios! :3`)
await this.groupLeave(m.chat)
chats.expired = null
}}

