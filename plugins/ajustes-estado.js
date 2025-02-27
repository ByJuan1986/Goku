import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
let handler = async (m, { conn, text }) => {
    if (!m.quoted && !text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el texto y responda a una imagen, texto o video para subirlo al estado del bot._`, { quoted: m });

    let media = false;
    let mime = (m.quoted?.mimetype || m.mimetype) || '';
    let url = '';
    let caption = text || '';

    if (/image|video/.test(mime)) {
        media = await m.quoted.download(); 
        if (/video/.test(mime)) {
            url = await uploadFile(media);
        } else {
            url = await uploadImage(media); 
        }
    } else if (/webp/.test(mime)) {
        media = await m.quoted.download();
        url = await uploadFile(media); 
    }

    if (url && /image/.test(mime)) {
        await conn.sendMessage('status@broadcast', { image: { url }, caption });
    } else if (url && /video/.test(mime)) {
        await conn.sendMessage('status@broadcast', { video: { url }, caption });
    } else if (text) {
        await conn.sendMessage('status@broadcast', { text: caption });
    } else {
        return conn.sendMessage(m.chat, {text: `⪩ _No se ha podido enviar el contenido, intentalo de nuevo._`, { quoted: m });
    }
conn.sendMessage(m.chat, {text: `✓ _Se ha subido el estado con exito, puede verlo si tienes agregado el bot en tus contactos._`, { quoted: m })
};
handler.command = /^(statusbot)$/i
export default handler