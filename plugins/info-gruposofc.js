let handler = async (m, { conn, command }) => {
let media = mxImagens
let grupos = `⪩ _Aqui tiene una comunidad en donde puedes encontrar los demas grupos, tambien estara el grupo principal._

ᗢ *Comunidad MDMX:*
⚘ 

ᗢ *Grupo Principal:*
⚘ 
`
if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: grupos }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: grupos, footer: textoInfo,
buttons: [{ 
buttonId: `.cuentas`, buttonText: { displayText: "CUENTAS", }, type: 1, }, {
buttonId: `.creador`, buttonText: { displayText: "CREADOR", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}

//conn.sendFile(m.chat, media, 'mbmd.jpg', grupos, { quoted: m })

}
handler.command = /^grupos|comunidades$/i
export default handler
