import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let MessageType = (await import(global.baileys)).default
let handler = async (m, { conn}) => {
try {   
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://nekos.life/api/kiss')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `@${m.sender.split('@')[0]} acaba de darle un beso a ${m.mentionedJid.map((user)=>(user === m.sender)? 'Anonimo. ': `@${user.split('@')[0]}`).join(', ')}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.command = /^(skiss|beso)$/i
export default handler
