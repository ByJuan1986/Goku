let handler = async (m, { conn, command }) => {
let media = mxImagens
let grupos = `te gustan los grupos de friki aquo te dejo unos cuantos......

*➤ 🤓 🄶🅁🅄🄿🄾🅂 🄵🅁🄸🄺🄸🅂 🤓*

亀🇪🇸 𝔽𝕒𝕟𝕤 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 🇪🇸亀
*${grupo_friki1}*

🌍⚔️🛡️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝒂𝒕𝒂𝒒𝒖𝒆 𝒂 𝒍𝒐𝒔 𝒕𝒊𝒕𝒂𝒏𝒆𝒔 ⚔️🛡️🌍 
*${grupo_friki2}*

🌍🤖 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒃𝒐𝒕𝒔 - 𝑹𝒆𝒅𝒆𝒔 𝒔𝒐𝒄𝒊𝒂𝒍𝒆𝒔 🤖🌍
*${grupo_friki3}*

🌍💪🦲 𝑶𝒏𝒆 𝒑𝒖𝒏𝒄𝒉 𝒎𝒂𝒏 🦲💪🌍  
*${grupo_friki4}*

𝗗𝗿𝗮𝗴𝗼𝗶 𝗯𝗼𝗹𝗮
*${grupo_friki5}*

🌍🎭🐻 𝑩𝒍𝒆𝒂𝒄𝒉 🐻🎭🌍
*${grupo_friki6}*

🌍⚔️🗡️ 𝑲𝒊𝒍𝒍 𝒍𝒂 𝒌𝒊𝒍𝒍 🗡️⚔️🌍
*${grupo_friki7}*

🌍🃏♣️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑲𝒂𝒌𝒆𝒈𝒖𝒓𝒖𝒊 ♣️🃏🌍
*${grupo_friki8}*

🌍😺🐼 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑹𝒂𝒏𝒎𝒂 ½ 🐼😺🌍
*${grupo_friki9}*

🌍 👒⛩️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑶𝒏𝒆 𝒑𝒊𝒆𝒄𝒆 ⛩️👒🌍
*${grupo_friki10}*

🌍🍥🍜 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑵𝒂𝒓𝒖𝒕𝒐 🍜🍥🌍
*${grupo_friki11}*

𝗯𝗼𝗹𝗮 𝗱𝗲 𝗱𝗿𝗮𝗰 𝗲𝗻 𝗰𝗮𝘁𝗮𝗹𝗮
*${grupo_friki12}*

🤖 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒃𝒐𝒕𝒔 - 𝑹𝒆𝒅𝒆𝒔 𝒔𝒐𝒄𝒊𝒂𝒍𝒆𝒔 2 🤖🌍
*${grupo_friki13}*

💣ARCANE💣💥
*${grupo_friki14}*

𝗕𝗼𝗹𝗮 𝗱𝗼 𝗱𝗿𝗮𝗴𝗼𝗻
*${grupo_friki15}*

𝗕𝗼𝗹𝗮 𝗱𝗲 𝗗𝗿𝗮𝗰 𝗲𝗻 𝗩𝗮𝗹𝗲𝗻𝗰𝗶𝗮
*${grupo_friki16}*

𝗠𝗮𝘀 𝗴𝗿𝘂𝗽𝗼𝘀 𝗲𝗻 𝗼𝘁𝗿𝗮𝘀 𝗽𝗹𝗮𝘁𝗮𝗳𝗼𝗿𝗺𝗮𝘀 𝗽𝗼𝗻𝗴𝗮𝗻 𝗹𝗼 𝘀𝗶𝗴𝘂𝗶𝗲𝗻𝘁𝗲:

.𝗰𝗮𝗻𝗮𝗹𝗲𝘀𝘄𝗵𝗮𝘁𝘀𝗔𝗽𝗽
.𝗴𝗿𝘂𝗽𝗼𝘀𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽
.𝗰𝗮𝗻𝗮𝗹𝗲𝘀𝘁𝗲𝗹𝗲𝗴𝗿𝗮𝗺
.𝗴𝗿𝘂𝗽𝗼𝘀𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸

*Actualizado 01/02/25.*
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
handler.command = /^gruposfrikis|gruposfriki/i
export default handler
