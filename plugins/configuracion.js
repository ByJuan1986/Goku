import fetch from 'node-fetch'
import fs from 'fs' 
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
m.reply(m.isWABusiness)
console.log(m.isWABusiness)
//try{
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
let name = await conn.getName(m.sender)
let isEnable = /true|enable|(turn)?on|1/i.test(command)
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    
case 'detector': case 'acciones':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
		
case 'eliminar': case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
    
case 'public': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
    
case 'whatsapp': case 'wa':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.noenlace = isEnable
break
    
case 'whatsapp2': case 'wa2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.noenlace2 = isEnable 
break
		
case 'tiktok':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.notiktok = isEnable 
break
		
case 'youtube':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.noyoutube = isEnable 
break
		
case 'telegram':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.notelegram = isEnable 
break
		
case 'facebook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.nofacebook = isEnable 
break
		
case 'instagram':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.noinstagram = isEnable 
break
		
case 'twitter':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.notwitter = isEnable 
break

case 'discord':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.nodiscord = isEnable 
break

case 'threads':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.nothreads = isEnable 
break

case 'twitch':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.notwitch = isEnable 
break
    
case 'eventos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.eventoBot = isEnable          
break
    
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
    
case 'juegos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.juegosmx = isEnable          
break
    
case 'nopasar':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.nopasar = isEnable          
break
    
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
		
case 'autonivel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autoNivel = isEnable          
break
    
case 'autostick':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autoSticks = isEnable          
break
    
case 'emojis': case 'reactions':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
case 'malapalabra': case 'palabras':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.nopalabras = isEnable
break
    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
    
case 'ver': case 'fileview':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
		
case 'pais':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break
		
case 'prebots': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.prebotsmx = isEnable
break 
    
case 'restrict': case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break

case 'xxx':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.noxxx = isEnable          
break
    
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
    
case 'autoread': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
    
case 'llamadas':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'spam':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.antiSpam = isEnable
break

case 'spam2':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.antiSpam2 = isEnable
break

case 'admins':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    

case 'autochat': case 'automx':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autorespond = isEnable 
break
   
case 'bprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['botprivado'] = isEnable
break
    
case 'bgrupal':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['botgrupal'] = isEnable
break
case 'privado': case 'no_privados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.noprivados = isEnable
break
case 'arabes':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.anticommand = isEnable
break
case 'trabas':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'simi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break
case 'chatgpt':
isAll = true;
if (!isOwner) {
global.dfail('owner', m, conn);
throw false;
}
bot.modoia = isEnable;      
break;      
      
case 'swonly': case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return null
//await conn.reply(m.chat, `• _Favor de iniciar con un codigo de activacion._`, m, { mentions: [aa,] })//`
throw false
}

conn.sendMessage(m.chat, { text: `✓ _¡Se ha ${isEnable ? `activado` : `desactivado`} el comando *${type}* con exito._\n- _Para desactivar o activar, puedes usar estos comandos._\n\n• *Por ejemplo:*\n*#on ${type}*\n*#off ${type}*` }, { quoted: m })
/*if (m.isWABusiness) {
await conn.sendMessage(m.chat, { text: `✓ _¡Se ha ${isEnable ? `desactivado` : `activado`} el comando *${type}* con exito._\n- _Para desactivar o activar, puedes usar estos comandos._\n\n• *Por ejemplo:*\n*#on ${type}*\n*#off ${type}*` }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { text: `✓ _¡Se ha ${isEnable ? `desactivado` : `activado`} el comando *${type}* con exito._\n- _Puedes presionar el boton para realizar otra accion negativa o positiva._`, footer: textoInfo,
buttons: [
{ buttonId: `${isEnable ? `.off ${type}` : `.on ${type}`}`, buttonText: { displayText: `${isEnable ? `DESACTIVAR` : `ACTIVAR`}`, }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}*/
}
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
