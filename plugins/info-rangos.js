let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let rangos = `
╭─· *\`INFORMACION DE RANGOS\`*
╰─· _Tipos de rangos en MDMX_
_Cada rango tendra mas bentajas y sera mas beneficioso._

${readMore}
[ 𔗍 : *Rango novato* ]
- _Todos los iniciados tienen el nivel 0 como novato, pueden empezar con ganancias bajas._


[ 𔗚 : *Rango piedra* ]
- _Se consigue al tener el nivel 3, algunos tienen hasta 3 rangos de piedra, aumenta un 3% de conseguir premios basicos._


[ 𔗙 : *Rango pulido* ]
- _Se consigue al tener el nivel 5, algunos tienen hasta 3 rangos de pulido, aumenta un 6% de tener otra oportunidad para jugar o apostar._


[ 𔗘 : *Rango refinado* ]
- _Se consigue al tener el nivel 8, algunos tienen hasta 3 rangos refinados, beneficia la perdida de recursos para que siga teniendo sus recursos salvos._


[ 𔓕 : *Rango de fuego* ]
- _Se consigue al tener el nivel 11, algunos tienen 3 rangos de fuego y tienen beneficios en ganar mas *${currency3}*, en el juego *#slut* aumenta un 3% de ganancias al ganar._


[ ✦ : *Rango brillante* ]
- _Se consigue al tener el nivel 14, algunos tienen 3 rangos brillantes y tienen beneficios en apostar o jugar juegos, puede dar un 12% de protección a perder recursos en su equipo._


[ 𔘓 : *Rango de vida* ]
- _Se consigue al tener el nivel 17, algunos tienen 3 rangos de vida y tienen beneficios en jugar o apostar unas veces mas al perder partidas, tambien puede dar un 6% de oportunidad de repetir las partidas de los *Rangos novato* y *piedra* que esten en su equipo._


[ 𔒝 : *Rango elevado* ]
- _Se consigue al tener el nivel 20, algunos tienen 3 rangos elevados y tienen mas beneficios en jugar y ganar grandes premios del doble, le da un 7% mas de beneficios a los *Rangos de fuego* que esten en su equipo._


[ ✯ : *Rango estrella* ]
- _Se consigue al tener el nivel 23, algunos tienen 3 rangos estrellas y tiene mas beneficios de ganar el triple al jugar juegos difíciles o se multiplican los resultados aleatoriamente, tiene un 35% de protección a sus recursos y 20% de protección a su equipo, si tiene 3 estrellas, mas beneficio._


[ 👑 : *Tres coronas* ]
- _Se consigue al tener el nivel 30, uno empieza a tener una corona pero si son tres mas mejor todavía, ganara triples premios y puntos mas altos, cada corona aumentara su capacidad en este proyecto._`
if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: rangos }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: rangos, footer: textoInfo,
buttons: [{ 
buttonId: `.levelup`, buttonText: { displayText: "SUBIR NIVEL", }, type: 1, }, {
buttonId: `.perfil`, buttonText: { displayText: "PERFIL", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}

//await conn.sendMessage(m.chat, { image: { url: mxImgs }, caption: creador, { quoted: m })

}
handler.command = /^inforole|rangos$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)