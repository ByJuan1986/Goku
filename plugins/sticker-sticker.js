import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let usuario = conn.getName(who)
  let text1 = `Bot:  ≽  ${wm}\nCreador:  ≽  ${usuario}\nVersion  ≽  ${vs}`
  let stiker = false
  let user = db.data.users[m.sender]
  let time = user.lastmining + 10000 //tiempo de espera en min
if (new Date - user.lastmiming < 10000) return await conn.sendMessage(m.chat, { text: `● _Espere unos segundos para volver a crear un sticker, esto para evitar spam._` }, { quoted: m })
  try {
  	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return conn.sendMessage(m.chat, { text: `● _El video no debe de durar mas de 10 segundos, recortalo y intentalo de nuevo._` }, { quoted: m })
      let img = await q.download?.()
      if (!img) conn.sendMessage(m.chat, { text: `● _Ingrese el comando y responda a un enlace, gif, video o imagen para crear un sticker._` }, { quoted: m })
      let out
      try {
        stiker = await sticker(img, false, global.wm, global.author)
      } catch (e) {
        console.error(e)
      } finally {
      await conn.sendMessage(m.chat, { text: `_Creando el sticker, espere un momento..._` }, { quoted: m })
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.wm, global.author)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.wm, global.author)
      else return conn.sendMessage(m.chat, { text: `● _El enlace que has respondido no es valido._\n- _Recuerda que debes responder a un enlace con la terminacion jpg, jpeg, png._` }, { quoted: m })
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
     if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: textoInfo, mediaType: 2, sourceUrl: ceotg, thumbnail: mxImgs}}}, { quoted: m })
    else return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y responda a un enlace, gif, video o imagen para crear un sticker._` }, { quoted: m })
  }
user.lastmiming = new Date * 1
}

handler.command = ['s', 'sticker', 'stiker'] 

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + ":" + seconds
}

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
