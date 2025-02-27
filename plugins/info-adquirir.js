let handler  = async (m, { conn, usedPrefix, command }) => {
let picture = mxImagens
let adquirir = `- _¿Quieres alojar/adquirir este proyecto en tus grupos? Puedes comprar estos planes para tener a MBMD en tus grupos._

▢──≻ \`Plan 1\`
│• _1 mes + asistencia 24/7_
│• _Comandos exclusivos._
│• _Precio ARS:_ $20.000
│• _Precio USD:_ $20
╰────────•

▢──≻ \`Plan 2\`
│• _2 meses + asistencia 24/7_
│• _Comandos exclusivos._
│• _Precio ARS:_ $25.000
│• _Precio USD:_ $25
╰────────•

▢──≻ \`Plan 3\`
│• _3 meses + asistencia 24/7_
│• _Comandos exclusivos._
│• _Premium_ *Activo*
│• _Precio ARS:_ $30.000
│• _Precio USD:_ $30
╰────────•

▢──≻ \`Plan 4\`
│• _4 meses + asistencia 24/7_
│• _Comandos exclusivos._
│• _Premium:_ *Activo*
│• _Edicion:_ *Autorizado*
│• _Precio ARS:_ $35.000
│• _Precio USD:_ $35
╰────────•

▢──≻ \`Plan 5\`
│• _12 meses + asistencia 24/7_
│• _Comandos exclusivos._
│• _Premium:_ *Activo*
│• _Edicion:_ *Autorizado*
│• _Velocidad:_ *Avanzado*
│• _Business:_ *Personalizado*
│• _Precio ARS:_ $50.000
│• _Precio USD:_ $50
╰────────•
`
if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: adquirir }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: mxMenu1 }, caption: adquirir, footer: textoInfo,
buttons: [{ 
buttonId: `.comprar`, buttonText: { displayText: "COMPRAR UNO", }, type: 1, }, {
buttonId: `.allmenu`, buttonText: { displayText: "MENU", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}

//conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: adquirir }, { quoted: m })

}
handler.command = /^(adquirir|alojar)/i
export default handler


