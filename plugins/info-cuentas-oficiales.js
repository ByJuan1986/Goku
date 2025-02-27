let handler = async (m, { conn, command }) => {
let str = `
Lo siento, por el momento no se pueden establecer todas las cuentas aqui.
`
if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: str }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: str, footer: textoInfo,
buttons: [{ 
buttonId: `.allmenu`, buttonText: { displayText: "MENU", }, type: 1, }, {
buttonId: `.perfil`, buttonText: { displayText: "PERFIL", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}

//await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: str, { quoted: m })

}
handler.command = /^cuentas|redes$/i
export default handler
