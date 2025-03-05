import fetch from 'node-fetch'
import fs from 'fs' 
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let isEnable = /true|enable|(turn)?on|1/i.test(command)
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false

let funciones = `● _Aqui estan todas las funciones disponibles en *${wm}*._
- _Algunos seran para grupos y algunos para owners o privados._

${readMore}
\`\`\`
╭───────────────────
│• Este apartado es para
│grupos y admins gruapales.
├───────────────────
│ • ENLACES WHATSAPP •
├───────────────────
│whatsapp │ ${m.isGroup ? chat.noenlace ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│whatsapp2│ ${m.isGroup ? chat.noenlace2 ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
├───────────────────
│  • OTROS ENLACES •
├───────────────────
│tiktok   │ ${m.isGroup ? chat.notiktok ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│youtube  │ ${m.isGroup ? chat.noyoutube ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│telegram │ ${m.isGroup ? chat.notelegram ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│facebook │ ${m.isGroup ? chat.nofacebook ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│instagram│ ${m.isGroup ? chat.noinstagram ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│twitter  │ ${m.isGroup ? chat.notwitter ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│discord  │ ${m.isGroup ? chat.nodiscord ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│threads  │ ${m.isGroup ? chat.nothreads ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│twitch   │ ${m.isGroup ? chat.notwhitch ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
├───────────────────
│ • CONFIGURACIONES •
├───────────────────
│welcome  │ ${m.isGroup ? chat.welcome ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│acciones │ ${m.isGroup ? chat.detect ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
├───────────────────
│ • CONFIGURACIONES •
├───────────────────
│eventos  │ ${m.isGroup ? chat.eventoBot ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│stickers │ ${m.isGroup ? chat.stickers ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│juegos   │ ${m.isGroup ? chat.juegosmx ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│autostick│ ${m.isGroup ? chat.autoSticks ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│nopasar  │ ${m.isGroup ? chat.nopasar ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│autonivel│ ${m.isGroup ? chat.autoNivel ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│emojis   │ ${m.isGroup ? chat.reaction ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│palabras │ ${m.isGroup ? chat.nopalabras ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│audios   │ ${m.isGroup ? chat.audios ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│fileview │ ${m.isGroup ? chat.antiver ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│pais     │ ${m.isGroup ? chat.antifake ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│xxx      │ ${m.isGroup ? chat.noxxx ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│admins   │ ${m.isGroup ? chat.modoadmin ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│autochat │ ${m.isGroup ? chat.autorespond ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│trabas   │ ${m.isGroup ? chat.antiTraba ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
│simi     │ ${m.isGroup ? chat.simi ? 'Activado ✓' : 'Apagado ✘' : 'Entra a un grupo.'}
╰───────────────────


╭───────────────────
│• Este apartado es para
│el propietario del proyecto.
├───────────────────
│spam     │ ${bot.antiSpam ? 'Activado ✓' : 'Apagado ✘'}
│spam2    │ ${bot.antiSpam2 ? 'Activado ✓' : 'Apagado ✘'}
│bprivado │ ${global.opts['botprivado'] ? 'Activado ✓' : 'Apagado ✘'}
│bgrupal  │ ${global.opts['botgrupal'] ? 'Activado ✓' : 'Apagado ✘'}
│privado  │ ${bot.noprivados ? 'Activado ✓' : 'Apagado ✘'}
│arabes   │ ${bot.anticommand ? 'Activado ✓' : 'Apagado ✘'}
│chatgpt  │ ${bot.modoia ? 'Activado ✓' : 'Apagado ✘'}
│publico  │ ${global.opts['self'] ? 'Activado ✓' : 'Apagado ✘'}
│temporal │ ${bot.temporal ? 'Activado ✓' : 'Apagado ✘'}
│prebots  │ ${bot.prebotsmx ? 'Activado ✓' : 'Apagado ✘'}
│restrict │ ${bot.restrict ? 'Activado ✓' : 'Apagado ✘'}
│autoread │ ${bot.autoread ? 'Activado ✓' : 'Apagado ✘'}
│llamadas │ ${bot.antiCall ? 'Activado ✓' : 'Apagado ✘'}
╰───────────────────\`\`\`
`
if (m.isWABusiness) {
await conn.sendMessage(m.chat, { text: funciones + `\n\n- _Para activarlos, usa el comando de la siguiente manera._\n• *Por ejemplo:*\n\n#off tiktok *(para desactivar)*\n#on tiktok *(para activar)*` }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { text: funciones + `\n\n- _Para activarlos, usa el comando de la siguiente manera._\n• *Por ejemplo:*\n\n#off tiktok *(para desactivar)*\n#on tiktok *(para activar)*`, footer: textoInfo,
buttons: [{ 
buttonId: `.status`, buttonText: { displayText: "ESTADO", }, type: 1, }, {
buttonId: `.allmenu`, buttonText: { displayText: "MENU", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}

//await conn.sendMessage(m.chat, { image: { url: mxImgs }, caption: creador, { quoted: m })

}

handler.command = /^config|settings$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
