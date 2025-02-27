import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let group = m.chat
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || imagens
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu)).buffer(), sourceUrl: redesMenu }}}

try{
await conn.sendMessage(m.chat, {text: `✎ _Aqui tiene el enlace grupal._\n\n- https://chat.whatsapp.com/` + await conn.groupInviteCode(group), m, adReply)
} catch (e) {
await conn.sendMessage(m.chat, {text: `✎ _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e)
}}
handler.command = /^(link|enlace)$/i
handler.group = true
handler.botAdmin = true
export default handler
