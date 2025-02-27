import uploadFile from '../lib/uploadFile.js';
import upload from '../lib/uploadFile2.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (!mime) return conn.sendMessage(m.chat, { text: `⪩ _Ingrese el comando y responda a una imagen para convertirlo en un enlace._` }, { quoted: m });
const media = await q.download();
try {
const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
const link = await (isTele ? uploadImage : uploadFile)(media);
conn.sendMessage(m.chat, { text: `⪩ _Aqui tiene su enlace:_\n- ${link}` }, { quoted: m });
} catch (e) {
try {    
const link = await upload(media);
conn.sendMessage(m.chat, { text: `⪩ _Aqui tiene su enlace:_\n- ${link}` }, { quoted: m });
} catch (e) {
conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#turl*_` }, { quoted: m })
console.log(e) 
}}}
handler.command = /^(turl)$/i
export default handler
