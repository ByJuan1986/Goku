import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) { if ((q.msg || q).seconds > 20) return conn.sendMessage(m.chat, {text: `⪩ _El contenido no debe de durar mas de 20 segundos, recortalo y vuelva a intentarlo._`, { quoted: m })
await conn.reply(m.chat, wait, m)
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `_Aqui estan los resultados encontrados segun la cancion estimada._

● *Titulo:* ${title}
● *Artista:* ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'Sin resultado.'}
● *Album:* ${album.name || 'Sin resultado.'}
● *Publicado en:* ${release_date || 'Sin resultado.'}
`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
conn.sendMessage(m.chat, {text: txt, { quoted: m })
} else return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y responda a un audio o video de 10 o 20 segundos para buscar la cancion._`, { quoted: m })
}
handler.command = /^(wmusic$/i
export default handler
