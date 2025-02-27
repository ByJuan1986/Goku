import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs} from "fs"
import path, { join } from 'path'

let handler  = async (m, { conn, usedPrefix, command}, args) => {
let parentw = conn
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let uniqid = `${who.split`@`[0]}`
let userS = `${conn.getName(who)}`
    
if (global.conn.user.jid !== conn.user.jid) {
return conn.sendMessage(m.chat, 
{text: 
`⪩ _Debes usar este comando en el chat privado del bot principal._`
}, 
{ 
quoted: m
 }) 
} else {
try {
await fs.rmdir("./MdmxDirector/" + uniqid, { recursive: true, force: true })
await conn.sendMessage(m.chat, 
{ text: `_Eliminando datos, sesion, recursos y registros, espere un momento..._` }, 
{ quoted: m })
await conn.sendMessage(m.chat, 
{ text : 
`✓ _¡Listo, ya no estas conectado a ${botname}, tu sesion y token fueron eliminados con exito!_`
 } , 
 { quoted: m })
} catch(err) {
if (err.code === 'ENOENT' && err.path === `./MdmxDirector/${uniqid}`) {
await conn.sendMessage(m.chat, 
{ text:
 "● _No eres un *PreBot*, solo los *PreBots* pueden usar este comando si desean desconectar el vinculo con MDMX._" 
 }, 
 { quoted: m })
} else {
await conn.sendMessage(m.chat, { 
text: 
`● _Ocurrio un error con el comando: *#${command}*_` 
}, { 
quoted: m 
})
console.error(err)
}}}
}

handler.command = /^(subclear|clearsub)$/i
handler.private = true
handler.fail = null

export default handler

