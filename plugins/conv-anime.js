import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || q.mediaType || '';
if (!/image/g.test(mime)) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y responda a una imagen que tenga una cara visible para convertirlo en anime._`}, {quoted: m});
await conn.sendMessage(m.chat, {text: `_Cargando resultados, espere un momento..._`}, {quoted: m});
const data = await q.download?.();
const image = await uploadImage(data);
try {
const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
await conn.sendFile(m.chat, anime, 'error.jpg', 'Aqui tiene la imagen.', { quoted: m });
} catch (i) {
try {
const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
await conn.sendFile(m.chat, anime2, 'error.jpg', 'Aqui tiene la imagen.', { quoted: m });
} catch (a) {
try {
const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
await conn.sendFile(m.chat, anime3, 'error.jpg', 'Aqui tiene la imagen.', { quoted: m });
} catch (e) {
return conn.sendMessage(m.chat, {text: `• _Ocurrio un error inesperado, esto puede ser por que la imagen no tenga una cara visible._`}, {quoted: m});
}}}}
handler.command = /^(ts_anime)$/i;
export default handler;
