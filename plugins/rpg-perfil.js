import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
var handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let fotoo = mxImagens
let { premium, level, money, limit, exp, lastclaim, registered, regTime, age, role } = global.db.data.users[m.sender]
let username = conn.getName(who)

let noprem = `
╭───────────────·
│ *Perfil de:* ${username}
╰───────────────·

● *USUARIO:*
🝔 *Nro:* +${who.replace(/@.+/, '')}
🝔 *Registro:* ${registered ? 'Si.': 'No.'}
🝔 *Edad:* ${age ? age : 'No.'}

● *RECURSOS:*
🝔 ${money} ${global.currency}
🝔 ${limit} ${global.currency2}
🝔 ${exp} ${global.currency3}
🝔 *Nivel:* ${level}
🝔 *Rango:* ${role}
🝔 *Premium:* ${premium ? 'Si.': 'No.'}
`.trim()

let prem = `
╭⊰ ·─────────────·
│ ${username}
╰⊰ ·─────────────·

🜲 *USUARIO:*
⪩ *Nro:* +${who.replace(/@.+/, '')}
⪩ *Registro:* ${registered ? 'Si.': 'No.'}
⪩ *Edad:* ${age ? age : 'No.'}

🜲 *RECURSOS:*
⪩ ${money} ${global.currency}
⪩ ${limit} ${global.currency2}
⪩ ${exp} ${global.currency3}
⪩ *Nivel:* ${level}
⪩ *Rango:* ${role}
⪩ *Premium:* ${premium ? 'Si.': 'No.'}`.trim()

//conn.sendMessage(m.chat, { image: { url: fotoo }, caption: `${premium ? prem.trim() : noprem.trim()}` }, { quoted: m })
if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: fotoo }, caption: `${premium ? prem.trim() : noprem.trim()}\n\n${premium ? '> ✓ Este perfil es premium.' : ''}` }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: fotoo }, caption: `${premium ? prem.trim() : noprem.trim()}`, footer: `${premium ? '✓ Este perfil es premium.' : '' }`,
buttons: [ {
buttonId: `#balance`,
buttonText: {
displayText: "BALANCE",
},
type: 1,
},
{
buttonId: `#allmenu`,
buttonText: {
displayText: "MENU",
},
type: 1,
},
],
viewOnce: true,
headerType: 4,
}, { quoted: m });
}
}
handler.command = ['profile', 'perfil']
export default handler
