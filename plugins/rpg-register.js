import db from '../lib/database.js'
import { createHash } from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
  let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
 let bio = 0, fechaBio
  let sinDefinir = 'No encontrado.'
  let biografia = await conn.fetchStatus(m.sender).catch(() => null)
  if (!biografia || !biografia[0] || biografia[0].status === null) {
   bio = sinDefinir
   fechaBio = "Fecha no disponible"
} else {
bio = biografia[0].status || sinDefinir
fechaBio = biografia[0].setAt ? new Date(biografia[0].setAt).toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric", }) : "Fecha no disponible"
}
  if (user.registered === true) return conn.sendMessage(m.chat, { text: `● _Ya estas registrado en este proyecto o quieres eliminar tu verificacion?_\n- _Puedes usar el comando *#reglist* para ver la lista de ajustes.` }, { quoted: m })
  if (!Reg.test(text)) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba su nombre e edad con un punto en el medio para verificarlo._\n\n• *Por ejemplo:*\n#${command} Alan.23` }, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return conn.sendMessage(m.chat, { text: `● _De favor, ingrese su nombre para ser verificado._\n\n• *Por ejemplo:*\n#${command} Alan.23` }, { quoted: m })
  if (!age) return conn.sendMessage(m.chat, { text: `● _La edad es importante para verificarse en este proyecto._\n\n• *Por ejemplo:*\n#${command} Alan.23` }, { quoted: m })
  if (name.length >= 100) return conn.sendMessage(m.chat, { text: `● _El nombre no debe de contener mas de 100 caracteres, intentalo de nuevo._` }, { quoted: m })
  age = parseInt(age)
  if (age > 100) return conn.sendMessage(m.chat, { text: `● _La edad sumamente mayor no puede ser verificada, intentalo de nuevo._` }, { quoted: m })
  if (age < 5) return conn.sendMessage(m.chat, { text: `● _Lo siento, si su edad tiene ese numero, no puede usar este proyecto, tenga buen dia._` }, { quoted: m })
  user.name = name
  user.age = age
  user.regTime = + new Date
  user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
let regbot = `🜲 *\`REGISTRO EXITOSO\`* 🜲
- *Nombre:* ${name}
- *Edad:* ${age} años
- *Codigo:* ${sn}
`
if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: regbot + '> Ahora puede usar el comando: *#perfil* para ver su perfil o el comando *#menu* para ver los menus.' }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: regbot, footer: '¡Puedes ver los siguientes comandos y mejorar tu experiencia!',
buttons: [ {
buttonId: `.perfil`,
buttonText: {
displayText: "PERFIL",
},
type: 1,
},
{
buttonId: `.allmenu`,
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
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler
