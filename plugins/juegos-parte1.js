import util from 'util'
import path from 'path' 
let toM = a => '@' + a.split('@')[0]
let handler = async (m, { conn, groupMetadata, participants, command, text, usedPrefix, sender}) => {
if (!db.data.chats[m.chat].juegosmx) return conn.sendMessage(m.chat, { text: `● _Lo siento, los juegos estan desactivados en este bot._\n- _Puedes usar el comando *#confg* y buscarlo para activarlo._` }, { quoted: m })
try {

let user = a => '@' + a.split('@')[0] 
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom() 
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom() 

if (command == 'parejas') {   
conn.sendMessage(m.chat, { text: `● _¡¡¡URGENTE ENCONTRE ALGO!!!_\n${toM(a)} y ${toM(b)} son parejas.`, mentions: [a, b]}, { quoted: m })
}
  

if (command == 'personalidad' || command == 'person') {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba o mensione a cualquier persona._` }, { quoted: m })

let personalidad = `
╭╮ *Nombre* : ${text}
││ *Buena persona* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
││ *Mala persona* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
││ *Tipo de persona* : ${pickRandom(['De buen corazón','Arrogante','Tacaño','Generoso','Humilde','Tímido','Cobarde','Entrometido','Cristal','No binarie XD', 'Pendejo'])}
││ *Siempre* : ${pickRandom(['Pesado','De malas','Distraido','De molestoso','Chismoso','Pasa jalandosela','De compras','Viendo anime','Chatea en WhatsApp porque esta soltero','Acostado bueno para nada','De mujeriego','En el celular'])}
││ *Inteligencia* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
││ *Vagancia* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
││ *Valentia* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
││ *Miedo* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
╰╯ *Género* : ${pickRandom(['Hombre', 'Mujer', 'Homosexual', 'Bisexual', 'Pansexual', 'Feminista', 'Heterosexual', 'Macho alfa', 'Mujerzona', 'Marimacha', 'Palosexual', 'PlayStationSexual', 'Sr. Manuela', 'Pollosexual'])}
`
conn.sendMessage(m.chat, {text: personalidad, mentions: conn.parseMention(personalidad)}, { quoted: m })
}   

// ------------------------------------------------------------------------------------------------------------------------------------------------

if (command == 'ship' || command == 'amor') {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba el nombre de dos personas para calcular el numero de su amor._` }, { quoted: m })
let [text1, ...text2] = text.split(' ')
text2 = (text2 || []).join(' ')
if (!text2) return conn.sendMessage(m.chat, { text: `● _Intentalo de nuevo, te falta el nombre de la segunda persona._\n\n• *Por ejemplo:*\n#${command} Luis Fatima` }, { quoted: m })
let love = `● _El amor de ${text1} y ${text2} se calcula en un ${Math.floor(Math.random() * 100)}%_ `.trim()
conn.sendMessage(m.chat, {text: texto, mentions: conn.parseMention(love)}, { quoted: m })
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

if (command == 'hacking' || command == 'hacks' || command == 'doxeo') {
let user = global.db.data.users[m.sender]
let time = user.prue + 90000
if (new Date - user.prue < 90000) return await conn.sendMessage(m.chat, { text: `● _Por favor, espere unos segundos antes de usar el comando, asi evitamos mensajes continuos._` }, { quoted: m })
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a alguien para doxearlo._` }, { quoted: m })
let start = `*\`Cargando resultados...\`*`
let boost = `*${pickRandom(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])}%*`
let boost2 = `*${pickRandom(['21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}%*`
let boost3 = `*${pickRandom(['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'])}%*`
let boost4 = `*${pickRandom(['61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'])}%*`
let boost5 = `*${pickRandom(['81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'])}%*`

const { key } = await conn.sendMessage(m.chat, {text: `${start}`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${boost2}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${boost3}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${boost4}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${boost5}`, edit: key})

let old = performance.now()
let neww = performance.now()
let speed = `${neww - old}`
let doxeo = `
\`DOXEO • EXITOSO\`

*Nombre:* ${text}
*Ip:* 192.28.213.234
*N:* 43 7462
*W:* 12.4893
*SS NUMBER:* 6979191519182016
*IPV6:* fe80::5dcd::ef69::fb22::d9888%12 
*UPNP:* Enabled
*DMZ:* 10.112.42.15
*MAC:* 5A:78:3E:7E:00
*ISP:* TORNADO SLK PRODUCTION
*DNS:* 8.8.8.8
*ALT DNS:* 1.1.1.1.1  
*DNS SUFFIX:* TORNADO WI-FI
*WAN:* 100.23.10.90
*WAN TYPE:* private nat
*GATEWAY:* 192.168.0.1
*SUBNET MASK:* 255.255.0.255
*UDP OPEN PORTS:* 8080.80
*TCP OPEN PORTS:* 443
*ROUTER VENDEDOR:* ERICCSON
*DEVICE VENDEDOR:* WIN32-X
*CONNECTION TYPE:* TORNADO SLK PRODUCTION
*ICMPHOPS:* 192.168.0.1 192.168.1.1 100.73.43.4
host-132.12.32.167.ucom.com
host-132.12.111.ucom.com
36.134.67.189 216.239.78.11
Sof02s32inf14.1e100.net
*HTTP:* 192.168.3.1:433-->92.28.211.234:80
*Http:* 192.168.625-->92.28.211.455:80
*Http:* 192.168.817-->92.28.211.8:971
*Upd:* 192.168452-->92.28.211:7265288
*Tcp:* 192.168.682-->92.28.211:62227.7
*Tcp:* 192.168.725-->92.28.211:67wu2
*Tcp:* 192.168.629-->92.28.211.167:8615
*EXTERNAL MAC:* 6U:77:89:ER:O4
*MODEM JUMPS:* 58`
conn.sendMessage(m.chat, {text: doxeo, mentions: conn.parseMention(doxeo), edit: key}, { quoted: m })
user.prue = new Date * 1  
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

if (command == 'ruleta' || command == 'rulet') {
const date = global.db.data.users[m.sender].juegos + 10800000; 
if (new Date - global.db.data.users[m.sender].juegos < 10800000) return conn.sendMessage(m.chat, { text: `● _Por favor, espere ${msToTime(date - new Date())} para volver a jugar._` }, { quoted: m })
if (global.db.data.users[m.sender].exp < 0 || global.db.data.users[m.sender].money < 0 || global.db.data.users[m.sender].limit < 0) return conn.sendMessage(m.chat, { text: `● _No tienes suficientes recursos para jugar este juego._` }, { quoted: m })
let ruletaimg = 'https://qu.ax/hrmRY.jpg'
await conn.sendMessage(m.chat, { image: { url: ruletaimg }, caption: '● _Iniciando el juego, buscando que numero de exito te toca...' }, { quoted: m })
let user = global.db.data.users[m.sender]
const money = Math.floor(Math.random() * 800)
const limit = Math.floor(Math.random() * 130)
const exp = Math.floor(Math.random() * 8500)
let rulet = ['text', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7']; 
let ruleta = rulet[Math.floor(Math.random() * 6)]
global.db.data.users[m.sender].juegos = new Date * 1;
if (ruleta === 'text') return conn.sendMessage(m.chat, { text: `● _¡¡Has ganado, tienes suerte!!_\n- *Obtienes:* ${money} *${currency}*` }, { quoted: m }).catch(global.db.data.users[m.sender].money += money) 
if (ruleta === 'text2') return conn.sendMessage(m.chat, { text: `● _¡¡Has perdido, tienes mala suerte!!_\n- *Pierdes:* ${money} *${currency}*` }, { quoted: m }).catch(global.db.data.users[m.sender].money -= money) 
if (ruleta === 'text3') return conn.sendMessage(m.chat, { text: `● _¡¡Has ganado, tienes suerte!!_\n- *Obtienes:* ${limit} *${currency2}*` }, { quoted: m }).catch(global.db.data.users[m.sender].exp += exp) 
if (ruleta === 'text4') return conn.sendMessage(m.chat, { text: `● _¡¡Has perdido, tienes mala suerte!!_\n- *Pierdes:* ${limit} *${currency2}*` }, { quoted: m }).catch(global.db.data.users[m.sender].exp -= exp) 
if (ruleta === 'text5') return conn.sendMessage(m.chat, { text: `● _¡¡Has ganado, tienes suerte!!_\n- *Obtienes:* ${exp} *${currency3}*` }, { quoted: m }).catch(global.db.data.users[m.sender].limit += limit) 
if (ruleta === 'text6') return conn.sendMessage(m.chat, { text: `● _¡¡Has perdido, tienes mala suerte!!_\n- *Pierdes:* ${exp} *${currency3}*` }, { quoted: m }).catch(global.db.data.users[m.sender].limit -= limit) 
if (ruleta === 'text7') return conn.sendMessage(m.chat, { text: `● _¡¡Has ganado un premio, tienes suerte!!_\n- *Ahora eres un usuario premium por:* 1 Hora ✓` }, { quoted: m }).catch(global.db.data.users[m.sender].premium += prem) 
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

if (command == 'gay') {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {  
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),   
}), 'error.png', `🏳️‍🌈 ¡¡¡KE GEYY!!! 🏳️‍🌈`, m)   
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { 
type: 'audioMessage', 
ptt: true })}

if (command == 'gay2') {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a una persona para ver su porcentaje._` }, { quoted: m })
let juego = `● _El usuario ${text.toUpperCase()} es ${(500).getRandom()}% gay._`.trim()
await conn.sendMessage(m.chat, { text: juego, mentions: conn.parseMention(juego)}, { quoted: m })
}

if (command == 'lesbiana') {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a una persona para ver su porcentaje._` }, { quoted: m })
let juego = `● _El usuario ${text.toUpperCase()} es ${(500).getRandom()}% lesbiana._`.trim()
await conn.sendMessage(m.chat, { text: juego, mentions: conn.parseMention(juego)}, { quoted: m })
}

if (command == 'manco') {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a una persona para ver su porcentaje._` }, { quoted: m })
let juego = `● _El usuario ${text.toUpperCase()} es ${(500).getRandom()}% manco._`.trim()
await conn.sendMessage(m.chat, { text: juego, mentions: conn.parseMention(juego)}, { quoted: m })
}

if (command == 'manca') {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a una persona para ver su porcentaje._` }, { quoted: m })
let juego = `● _El usuario ${text.toUpperCase()} es ${(500).getRandom()}% manca._`.trim()
await conn.sendMessage(m.chat, { text: juego, mentions: conn.parseMention(juego)}, { quoted: m })
}

if (command == 'pajero') {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a una persona para ver su porcentaje._` }, { quoted: m })
let juego = `● _El usuario ${text.toUpperCase()} es ${(500).getRandom()}% pajero._`.trim()
await conn.sendMessage(m.chat, { text: juego, mentions: conn.parseMention(juego)}, { quoted: m })
}

if (command == 'pajera') {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a una persona para ver su porcentaje._` }, { quoted: m })
let juego = `● _El usuario ${text.toUpperCase()} es ${(500).getRandom()}% pajera._`.trim()
await conn.sendMessage(m.chat, { text: juego, mentions: conn.parseMention(juego)}, { quoted: m })
}

if (command == 'sabio') {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a una persona para ver su porcentaje._` }, { quoted: m })
let juego = `● _El usuario ${text.toUpperCase()} es ${(500).getRandom()}% sabio._`.trim()
await conn.sendMessage(m.chat, { text: juego, mentions: conn.parseMention(juego)}, { quoted: m })
}

if (command == 'inteligente') {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a una persona para ver su porcentaje._` }, { quoted: m })
let juego = `● _El usuario ${text.toUpperCase()} es ${(500).getRandom()}% inteligente._`.trim()
await conn.sendMessage(m.chat, { text: juego, mentions: conn.parseMention(juego)}, { quoted: m })
}

if (command == 'maduro') {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a una persona para ver su porcentaje._` }, { quoted: m })
let juego = `● _El usuario ${text.toUpperCase()} es ${(500).getRandom()}% maduro._`.trim()
await conn.sendMessage(m.chat, { text: juego, mentions: conn.parseMention(juego)}, { quoted: m })
}

if (command == 'hot') {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a una persona para ver su porcentaje._` }, { quoted: m })
let juego = `● _El usuario ${text.toUpperCase()} es ${(500).getRandom()}% hot._`.trim()
await conn.sendMessage(m.chat, { text: juego, mentions: conn.parseMention(juego)}, { quoted: m })
}

if (command == 'topgays') {
let top = `🜲 *TOP GRUPAL* 🜲
- _¡Personas mas gays del grupo!_

㇣ ${user(a)} • ${user(b)}
㇣ ${user(c)} • ${user(d)}
㇣ ${user(e)} • ${user(f)}
㇣ ${user(g)} • ${user(h)}
㇣ ${user(i)} • ${user(j)}`
conn.sendMessage(m.chat, { text: top, mentions: conn.parseMention(top)}, { quoted: m })
}

if (command == 'toplindos') {
let top = `🜲 *TOP GRUPAL* 🜲
- _¡Personas mas lindas y lindos del grupo!_

㇣ ${user(a)} • ${user(b)}
㇣ ${user(c)} • ${user(d)}
㇣ ${user(e)} • ${user(f)}
㇣ ${user(g)} • ${user(h)}
㇣ ${user(i)} • ${user(j)}`
conn.sendMessage(m.chat, { text: top, mentions: conn.parseMention(top)}, { quoted: m })
}

if (command == 'tophots') {
let top = `🜲 *TOP GRUPAL* 🜲
- _¡Personas mas hots del grupo!_

㇣ ${user(a)} • ${user(b)}
㇣ ${user(c)} • ${user(d)}
㇣ ${user(e)} • ${user(f)}
㇣ ${user(g)} • ${user(h)}
㇣ ${user(i)} • ${user(j)}`
conn.sendMessage(m.chat, { text: top, mentions: conn.parseMention(top)}, { quoted: m })
}

if (command == 'topvagos') {
let top = `🜲 *TOP GRUPAL* 🜲
- _¡Personas mas vagos del grupo!_

㇣ ${user(a)} • ${user(b)}
㇣ ${user(c)} • ${user(d)}
㇣ ${user(e)} • ${user(f)}
㇣ ${user(g)} • ${user(h)}
㇣ ${user(i)} • ${user(j)}`
conn.sendMessage(m.chat, { text: top, mentions: conn.parseMention(top)}, { quoted: m })
}

if (command == 'topinteligentes') {
let top = `🜲 *TOP GRUPAL* 🜲
- _¡Personas mas inteligentes del grupo!_

㇣ ${user(a)} • ${user(b)}
㇣ ${user(c)} • ${user(d)}
㇣ ${user(e)} • ${user(f)}
㇣ ${user(g)} • ${user(h)}
㇣ ${user(i)} • ${user(j)}`
conn.sendMessage(m.chat, { text: top, mentions: conn.parseMention(top)}, { quoted: m })
}

if (command == 'topsabios') {
let top = `🜲 *TOP GRUPAL* 🜲
- _¡Personas mas sabios del grupo!_

㇣ ${user(a)} • ${user(b)}
㇣ ${user(c)} • ${user(d)}
㇣ ${user(e)} • ${user(f)}
㇣ ${user(g)} • ${user(h)}
㇣ ${user(i)} • ${user(j)}`
conn.sendMessage(m.chat, { text: top, mentions: conn.parseMention(top)}, { quoted: m })
}

if (command == 'topfamosos') {
let top = `🜲 *TOP GRUPAL* 🜲
- _¡Personas mas famosos del grupo!_

㇣ ${user(a)} • ${user(b)}
㇣ ${user(c)} • ${user(d)}
㇣ ${user(e)} • ${user(f)}
㇣ ${user(g)} • ${user(h)}
㇣ ${user(i)} • ${user(j)}`
conn.sendMessage(m.chat, { text: top, mentions: conn.parseMention(top)}, { quoted: m })
}
   
if (command == 'topamores') {
let top = `🜲 *TOP GRUPAL* 🜲
- _¡Las 5 parejas encontradas en el grupo!_

❤️ ${user(a)} • ${user(b)}
❤️ ${user(c)} • ${user(d)}
❤️ ${user(e)} • ${user(f)}
❤️ ${user(g)} • ${user(h)}
❤️ ${user(i)} • ${user(j)}`
conn.sendMessage(m.chat, { text: top, mentions: conn.parseMention(top)}, { quoted: m })
}

if (command == 'txtc') {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba lo que quiera para usar este efecto._\n\n• *Por ejemplo:*\n#${command} Hola buenas.` }, { quoted: m })
await conn.sendMessage(m.chat, { text: `_Creando texto, espere un momento..._` }, { quoted: m })
let img = global.API('fgmods', '/api/maker/txt', { text: teks }, 'apikey')
conn.sendMessage(m.chat, { image: { url: img }, caption: '_Aqui tiene su texto._' }, { quoted: m })
}

} catch (e) {
await conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#${command}*_` }, { quoted: m })
console.log(e)}}
handler.command = [
"parejas", "personalidad", "person", "ship", "amor", "hacking", "hacks", "doxeo",
"ruleta", "rulet", "gay", "gay2", "lesbiana", "manco", "manca", "pajero", "pajera",
"sabio", "inteligente", "maduro", "hot", "topgays", "toplindos", "tophots", "topvagos",
"topinteligentes", "topsabios", "topfamosos", "topamores", "txtc"
]
handler.group = true
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}
