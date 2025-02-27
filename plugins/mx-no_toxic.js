const toxicRegex = /g0re|g0r3|g.o.r.e|sap0|sap4|malparido|malparida|malparidos|malparidas|m4lp4rid0|m4lp4rido|m4lparido|malp4rido|m4lparid0|malp4rid0|chocha|chup4la|chup4l4|chupalo|chup4lo|chup4l0|chupal0|chupon|chupameesta|sabandija|hijodelagranputa|hijodeputa|hijadeputa|hijadelagranputa|kbron|kbrona|cajetuda|laconchadedios|putita|putito|put1t4|putit4|putit0|put1to|put1ta|pr0stitut4s|pr0stitutas|pr05titutas|pr0stitut45|prostitut45|prostituta5|pr0stitut45|fanax|f4nax|drogas|droga|dr0g4|nepe|p3ne|p3n3|pen3|p.e.n.e|pvt0|pvto|put0|hijodelagransetentamilparesdeputa|Chingadamadre|coño|c0ño|coñ0|c0ñ0|afeminado|drog4|cocaína|marihuana|chocho|chocha|cagon|pedorro|agrandado|agrandada|pedorra|cagona|pinga|joto|sape|mamar|chigadamadre|hijueputa|chupa|caca|bobo|boba|loco|loca|chupapolla|estupido|estupida|estupidos|polla|pollas|idiota|maricon|chucha|verga|vrga|naco|zorra|zorro|zorras|zorros|pito|huevon|huevona|huevones|rctmre|mrd|ctm|csm|cepe|sepe|sepesito|cepecito|cepesito|hldv|ptm|baboso|babosa|babosos|babosas|feo|fea|feos|feas|mamawebos|chupame|bolas|qliao|imbecil|embeciles|kbrones|cabron|capullo|carajo|gore|gorre|gorreo|gordo|gorda|gordos|gordas|sapo|sapa|mierda|cerdo|cerda|puerco|puerca|perra|perro|dumb|fuck|shit|bullshit|cunt|semen|bitch|motherfucker|foker|fucking/i

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner }) { 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
let delet = m.key.participant
let bang = m.key.id
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let img = mxImagens
const isToxic = toxicRegex.exec(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin && isBotAdmin) {
if (chat.delete) return conn.sendMessage(m.chat, { text: `● _Por favor, desactive la anti eliminacion para evitar que el bot envie mensajes eliminados. Gracias._` }, { quoted: m })
user.warn += 1
if (!(user.warn >= 4)) {
await conn.sendMessage(m.chat, { text: `● _Hola participante_ @${m.sender.split`@`[0]}, _la palabra que mensionaste_ *( ${isToxic} )* _no esta echa para decirse en este chat._\n_Por ende, tendras una advertencia mas, si llegas a 5 advertencias, seras expulsado de este chat._\n\_Advertencias:_ *${user.warn}* de *5*` }, { quoted: m })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}

if (user.warn >= 4) {
if (chat.delete) return conn.sendMessage(m.chat, { text: `● _Por favor, desactive la anti eliminacion para evitar que el bot envie mensajes eliminados. Gracias._` }, { quoted: m })
user.warn = 0
await conn.sendMessage(m.chat, { text: `● _Hola participante_ @${m.sender.split`@`[0]}, _te he dado las suficientes advertencias, has echo_ *${user.warn}* _de_ *5* _de ellas, seras eliminado de inmediato por no cumplir las reglas establecidas._` }, { quoted: m })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//await this.updateBlockStatus(m.sender, 'block')
}}
return !1
}
export default handler

