import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) return conn.sendMessage(m.chat, { text: `⪩ _Ingrese el comando y escriba el nombre del anime que desea buscar._` }, { quoted: m });
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
ᗢ *\`RESULTADOS\`* ᗢ

≽ *Título:* ${result.title}
≽ *Formato:* ${result.type}
≽ *Estado:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
≽ *Episodios totales:* ${result.episodes}
≽ *Duración: ${result.duration}*
≽ *Basado en:* ${result.source.toUpperCase()}
≽ *Estrenado:* ${result.aired.from}
≽ *Finalizado:* ${result.aired.to}
≽ *Popularidad:* ${result.popularity}
≽ *Favoritos:* ${result.favorites}
≽ *Clasificación:* ${result.rating}
≽ *Rango:* ${result.rank}
≽ *Trailer:* ${result.trailer.url}
≽ *URL:* ${result.url}
≽ *Background:* ${resultes.text}
≽ *Ringkasan:* ${resultes2.text}`;
    conn.sendMessage(m.chat, { image: { url: result.images.jpg.image_url }, caption: Animeinfo }, { quoted: m });
  } catch {
    return conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#${command}*_` }, { quoted: m });
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
