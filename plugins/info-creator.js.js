let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let creador = `✎ Contactar al propietario del proyecto, puedes empezar aqui.

● *WhatsApp:*
- https://wa.me/5493873655135

● *Telegram:*
- https://t.me/MDMX_MKTG
`
if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: creador }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: creador, footer: textoInfo,
buttons: [{ 
buttonId: `.grupos`, buttonText: { displayText: "GRUPOS", }, type: 1, }, {
buttonId: `.cuentas`, buttonText: { displayText: "CUENTAS", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}

//await conn.sendMessage(m.chat, { image: { url: mxImgs }, caption: creador, { quoted: m })

}
handler.command = /^creador|creator$/i
export default handler
