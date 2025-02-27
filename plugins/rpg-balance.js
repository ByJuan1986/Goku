let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
let d = `
╭───────────────⊹
│ *WALLET* • ${name}
╰───────────────⊹

● *\`RECURSOS\`*
⪩ ${global.db.data.users[who].money} ${currency}
⪩ ${global.db.data.users[who].limit} ${currency2}
⪩ ${global.db.data.users[who].exp} ${currency3}

● *\`GUARDADOS\`*
⪩ ${global.db.data.users[who].bank} ${currency}
⪩ ${global.db.data.users[who].bankk} ${currency2}
⪩ ${global.db.data.users[who].bankkk} ${currency3}
`

if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: d + '\n\n*¿Quieres deposirar o retirar?*\n_Usa estos comandos para ver sus opciones.\n\n*#depositar*\n*#retirar*' }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: d, footer: textoInfo,
buttons: [{ 
buttonId: `.depositar`, buttonText: { displayText: "DEPOSITAR", }, type: 1, }, {
buttonId: `.retirar`, buttonText: { displayText: "RETIRAR", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}

}
handler.command = ['bal', 'cartera', 'wallet', 'balance'] 
export default handler