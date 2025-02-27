import axios from 'axios';
import cheerio from 'cheerio';
const apkpureApi = 'https://apkpure.com/api/v2/search?q=';
const apkpureDownloadApi = 'https://apkpure.com/api/v2/download?id=';
async function searchApk(text) {
  const response = await axios.get(`${apkpureApi}${encodeURIComponent(text)}`);
  const data = response.data;
  return data.results;
}
async function downloadApk(id) {
  const response = await axios.get(`${apkpureDownloadApi}${id}`);
  const data = response.data;
  return data;
}

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y el nombre de la aplicacion que desea buscar._\n\n• *Por ejemplo:*\n#apk2 WhatsApp`, { quoted: m });
  try {
    const searchResults = await searchApk(text);
    const apkData = await downloadApk(searchResults[0].id);
    const response = `${apkData.name}
۰────────────۰
❒ *Paquete:* ${apkData.package}
❒ *Publicado en:* ${apkData.lastup}
❒ *Peso:* ${apkData.size}`;
    await conn.sendMessage(m.chat, { image: { url: apkData.icon }, caption: response }, { quoted: m });
    await conn.sendMessage(m.chat, {text: `_Descargando, espere un momento..._`, { quoted: m })
    if (apkData.size.includes('GB') || apkData.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, { text: 'Lo siento, la aplicacion pesa mucho, no podra ser enviado.' }, { quoted: m });
    }
    await conn.sendMessage(m.chat, { document: { url: apkData.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: apkData.name + '.apk', caption: null }, { quoted: m });
  } catch (e) {
    await conn.sendMessage(m.chat, {text: `✎ _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
    console.log(e);
  }
};

handler.command = ["apk2"];
export default handler;
