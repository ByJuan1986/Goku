let handler = async (m, { conn, isOwner }) => {
let vip = global.db.data.users[m.sender].premium
let prem = Object.entries(global.db.data.users).filter(user => user[1].premium)
let caption = `
╭۰ ⧠ *USUARIOS PREMIUMS:*
╰• *Total : ${prem.length} Usuarios* ${prem ? '\n' + prem.map(([jid], i) => `
⪼ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n⪼') : 'Sin usuarios.'}
`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
handler.command = /^(list_prems|lista_premiums_|lista_premium|lists_prems)$/i
export default handler
