import BuscarLetra from "../lib/lyricsgg.js";
let handler = async (m, { conn, usedPrefix, command, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : "";
  if (!teks) return conn.sendMessage(m.chat, { text: `⪩ _Ingrese el comando y escriba el nombre de alguna cancion para sacar la letra._\n\n• *Por ejemplo:*\n#${command} Stereo Love.` }, { quoted: m });
  try {
    let res = await BuscarLetra(text);
    let { titulo, artista, albulm, fecha, Generos, letra } = res;
    let txt = `
*\`RESULTADOS ENCONTRADOS\`*
- *Nombre:* ${titulo}
- *Artista:* ${artista}
- *Album:* ${albulm}
- *Publicado:* ${fecha}
- *Genero:* ${Generos}

*Letra:* ${letra}`;
conn.sendMessage(m.chat, { text: txt }, { quoted: m });
//conn.sendFile(m.chat, mxImagens, 'mdmx.jpg', txt, { quoted: m });
} catch (e) {
await conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#${command}*_` }, { quoted: m });
console.log(e)
}};
handler.command = handler.help = [
"lyrics",
"letra"
];
export default handler;
