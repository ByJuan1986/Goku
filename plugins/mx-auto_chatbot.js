import fetch from 'node-fetch'
let handler = m => m
handler.before = async (m) => {
if (m.fromMe) return
let chat = global.db.data.chats[m.chat]
if (chat.simi) {
if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
if (!m.text) return
let textodem = m.text  
if (m.text.includes('rentmx') || m.text.includes('prebots')|| m.text.includes('mxrent')|| m.text.includes('menu')|| m.text.includes('play')|| m.text.includes('play2') || m.text.includes('playdoc') || m.text.includes('tiktok') || m.text.includes('facebook') || m.text.includes('perfil') ||  m.text.includes('stat') || m.text.includes('estado') ||  m.text.includes('ping') ||  m.text.includes('infobot') ||  m.text.includes('sc') ||  m.text.includes('sticker') ||  m.text.includes('s') || m.text.includes('wm') ||  m.text.includes('qc')) return  
try {
await conn.sendPresenceUpdate('composing', m.chat)
let simsimi = await fetch(`${apis}/tools/simi?text=${encodeURIComponent(textodem)}`)
let res = await simsimi.json() 
if (data.success == 'No s\u00e9 lo qu\u00e9 est\u00e1s diciendo. Por favor ense\u00f1ame.') return conn.sendMessage(m.chat, { text: lol }, { quoted: m })
await conn.sendMessage(m.chat, { text: res.data.message }, { quoted: m })
} catch {
if (textodem.includes('Hola')) textodem = textodem.replace('Hola', 'Hello')
if (textodem.includes('hola')) textodem = textodem.replace('hola', 'hello')
if (textodem.includes('HOLA')) textodem = textodem.replace('HOLA', 'HELLO')    
let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + textodem)
let resu = await reis.json()  
let nama = m.pushName || '1'
let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + resu[0][0][0])
let res = await api.json()
let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=" + res.cnt)
let resu2 = await reis2.json()
await conn.sendMessage(m.chat, { text: resu2[0][0][0] }, { quoted: m })
}
return !0
}
return true
}
export default handler
