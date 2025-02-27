let handler = async (m, { conn, usedPrefix, text }) => {
if (conn.user.jid !== global.conn.user.jid) return conn.sendMessage(m.chat, { text: `Ingrese un texto el cual se enviara a todos los *PreBots* existentes en los servidores de MDMX.` }, { quoted: m })
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
let content = conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '🜲 *`MENSAJE  PRINCIPAL`*🜲\n\n' + teks)
 for (let id of users) {
 await delay(1500)
 await conn.copyNForward(id, content, true)
 }
conn.sendMessage(m.chat, { text: `
⫹⫺ *DIFUSION EXITOSA* ⫹⫺
• _Envio exitoso a ${users.length} *PreBots*_
` }, { quoted: m })
  }
  handler.command = /^subbot_sms$/i
  handler.owner = true
  export default handler
  
  const more = String.fromCharCode(8206)
  const readMore = more.repeat(4001)
  
  const delay = time => new Promise(res => setTimeout(res, time))
