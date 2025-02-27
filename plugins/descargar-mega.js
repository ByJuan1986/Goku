import { File } from "megajs";
import mime from 'mime-types';

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
        if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas un enlace valido de un archivo de *Mega* para descargarlo._`, { quoted: m });
        const file = File.fromURL(text);
        await file.loadAttributes();
        const fileExtension = file.name.split('.').pop().toLowerCase();
        const mimeType = mime.lookup(fileExtension);
        let caption = `${file.name}
۰────────────۰
❒ *Peso:* ${formatBytes(file.size)}
❒ *Tipo:* ${mimeType}`.trim()
conn.reply(m.chat,caption, m)
        if (file.size >= 1800000000 && !file.directory) return conn.sendMessage(m.chat, {text: `Lo siento, el archivo pesa mucho, no podra ser enviado.`, { quoted: m });
        const data = await file.downloadBuffer();
        await conn.sendFile(m.chat, data, file.name, null, m, null, { mimeType, asDocument: true });

    } catch (error) {
        return conn.sendMessage(m.chat, {text: `• _Ocurrio un error con el comando: *#${command}*_`, { quoted: m });
    }
}
handler.command = /^(mega)$/i
export default handler

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
