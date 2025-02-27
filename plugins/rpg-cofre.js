let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 86400000 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) return conn.sendMessage(m.chat, { text: `● _Ya has reclamado el cofre, vuelve en ${msToTime(time - new Date())} segundos para volver a reclamar._`

let dia = Math.floor(Math.random() * 30)
let kiwa = Math.floor(Math.random() * 4000)
let expp = Math.floor(Math.random() * 5000)

  global.db.data.users[m.sender].limit += dia
  global.db.data.users[m.sender].money += kiwa
  global.db.data.users[m.sender].exp += expp
  
let texto = `
🜲 *\`RECOMPENSA\`* 🜲

❒ ${dia} *${currency}*
❒ ${kiwa} *${currency2}*
❒ ${expp} *${currency3}*

- _¡Se han sumado estos resultados a tu perfil._
_Vuelva mas tarde para reclamar otra recompensa._`

if (m.isWABusiness) {
await conn.sendMessage(m.chat, { text: texto }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { text: texto, footer: textoInfo,
buttons: [{ 
buttonId: `.status`, buttonText: { displayText: "PERFIL", }, type: 1, }, {
buttonId: `.wallet`, buttonText: { displayText: "WALLET", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}

global.db.data.users[m.sender].lastcofre = new Date * 1
}

handler.command = ['coffer', 'cofre', 'claim'] 
handler.level = 5
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}
