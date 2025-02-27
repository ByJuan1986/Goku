let handler = async (m, { conn, command }) => {
let donar = `
No hay texto en este coomando.
`
if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: donar }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: donar, footer: textoInfo,
buttons: [{ 
buttonId: `.estado`, buttonText: { displayText: "STATUS", }, type: 1, }, {
buttonId: `.allmenu`, buttonText: { displayText: "MENU", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}
}
handler.command = /^donar|comprar$/i
export default handler
