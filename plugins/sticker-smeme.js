import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba el texto que quiere seguido de otro texto separado con una barra para crear un meme._\n\n• *Por ejemplo:*\n#${command} La vida es|Muy bonita.` }, { quoted: m })
    if (!/image\/(jpe?g|png)/.test(mime)) return conn.sendMessage(m.chat, { text: `● _Ocurrio un error inesperado, favor de responder a una imagen jpg o png, nada de videos o musicas._` }, { quoted: m })
    m.reply(global.wait)
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    let stiker = await sticker(false, meme, global.packname, global.author)
    if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, '', { asSticker: 1 })
}
handler.command = /^(smeme)$/i
export default handler