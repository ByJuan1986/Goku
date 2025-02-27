let handler = async (m, { conn, isOwner }) => {
let adv = Object.entries(global.db.data.users).filter(user => user[1].warn)
let warns = global.db.data.users.warn
let user = global.db.data.users
let caption = `
╭۰ ⧠ *USUARIOS ADVERTIDOS:*
│╰۰u⎙ *total:* ${adv.length} ${adv ? '\n' + adv.map(([jid, user], i) => `
⪼ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n⪼') : 'Sin usuarios.'} `
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
handler.command = /^(lista_warn)$/i 
export default handler
