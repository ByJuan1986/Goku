import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
await conn.fetchBlocklist().then(async data => {
let txt = `*USUARIOS BLOQUEADOS*\n*Total :* ${data.length}\n\n`
for (let i of data) {
txt += `@${i.split("@")[0]}\n`
}
txt += "\n\nHaciendo una llamada a este chat, puede provocar el bloqueo, de favor no llame."
return conn.reply(m.chat, txt, fkontak, m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err);
return conn.reply(m.chat, `No hay chats bloqueados por el momento...`, m) 
})} 
handler.command = ['list_blocks', 'block_list']
export default handler
