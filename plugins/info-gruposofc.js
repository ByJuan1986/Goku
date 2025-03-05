let handler = async (m, { conn, command }) => {
let media = mxImagens
let grupos = `⪩ _Aqui tiene una comunidad en donde puedes encontrar los demas grupos, tambien estara el grupo principal._

*➤ 🄼🅄🄽🄳🄾 🄳🅁🄰🄶🄾🄽 🄱🄰🄻🄻*

*🔥🐉🐲亀𝔽𝕒𝕞𝕚𝕝𝕚𝕒 𝕊𝕒𝕚𝕪𝕒𝕟亀🐲🐉🔥*
*${grupo1}*

*🐉🐲亀𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕕𝕚𝕓𝕦𝕛𝕠𝕤亀🐲🐉*
*${grupo2}*

*🐉🐲🌍 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕃𝕖𝕘𝕖𝕟𝕕𝕤 🌍🐲🐉*
*${grupo3}*

*🐉🐲亀𝕍𝕚𝕕𝕖𝕠𝕤 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝亀🐲🐉*
*${grupo4}*

*🐲🐉𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕊𝕥𝕚𝕔𝕜𝕖𝕣𝕤🐉🐲*
*${grupo5}*
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
handler.command = /^grupos|grupowhatsApp$/i
export default handler
