import axios from 'axios';
const handler = async (m, { conn, command, args }) => {
 if (!args[0]) {
  await conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba un texto para crear una imagen_\n\n• *Por ejemplo:*\n#${command} Crea una imagen de arboles rodeando un pantano.`, { quoted: m });
 return;
}
 const prompt = args.join(' ');
const apiUrl = `https://eliasar-yt-api.vercel.app/api/ai/text2img?prompt=${prompt}`;
 try { 
 await conn.sendMessage(m.chat, {text: '_Creando imagen, espere un momento..._'}, {quoted: m});
 const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
 await conn.sendMessage(m.chat, {text: `_Aqui tiene su imagen._`, { quoted: m });
 await conn.sendMessage(m.chat, { image: Buffer.from(response.data) }, { quoted: m });
 } catch (error) {
conn.sendMessage(m.chat, {text: `⪩ _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
}};
handler.command = ['dalle', 'imagina'];
export default handler;