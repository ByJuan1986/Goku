let handler = async (m, { conn }) => {
let dados=[
  'https://tinyurl.com/gdd01',
  'https://tinyurl.com/gdd02',
  'https://tinyurl.com/gdd003',
  'https://tinyurl.com/gdd004',
  'https://tinyurl.com/gdd05',
  'https://tinyurl.com/gdd006'
]
let url = dados[Math.floor(Math.random() * dados.length)]
await conn.sendMessage(m.chat, { text: `● _Primer dado lanzado..._` }, { quoted: m })
conn.sendFile(m.chat, url, 'error.webp', null, m, { asSticker: true })}
handler.command = ['dado', 'dados'] 
export default handler
