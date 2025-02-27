import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba un texto para crear un sticker._\n\n• *Por ejemplo:*\n#${command} Hola a todos.` }, { quoted: m })
   if (!text) return conn.sendMessage(m.chat, { text: `Texto faltante, ingrese el texto para crear un sticker.\nPor ejemplo: #${command} Hola a todos.` }, { quoted: m })
   if (text.length > 30) return conn.sendMessage(m.chat, { text: `● _El texto no debe de contener mas de 30 caracteristicas, intentalo de nuevo._` }, { quoted: m })
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#000000",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}

handler.command = /^(qc)$/i
export default handler