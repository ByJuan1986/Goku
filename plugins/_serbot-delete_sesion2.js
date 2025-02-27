import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
const handler = async (m, { conn, usedPrefix }) => {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './MdmxSesion/';
try {
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
}}
if (filesDeleted === 0) {
await conn.sendMessage(m.chat, { text: `⪩ _Lo siento, no encontre la *ID* correspondiente en este chat, asegurate de haber tenido el *token* de seguridad.` }, { quoted: m });
} else {
await conn.sendMessage(m.chat,
{ text: `✓ _¡Se han eliminado ${filesDeleted} archivos de sesion con exito!_` },
{ quoted: m }
)}
} catch (err) {
console.error(`⪩ _La carpeta o el archivo de sesion no existe en ninguna parte.`, err);
await conn.sendMessage(m.chat,
{ text: `⪩ _Ocurrio un error al eliminar la carpera de sesion, puede deberse a otras sesiones eliminadas sin previo aviso.` },
{ quoted: m }
)}
await conn.sendMessage(m.chat, {text: `✓ _Eliminacion completada, ahora el bot puede generar mas datos de sesion y almacenando mas vinculos._`}, { quoted: m })};
handler.command = /^(dsub)$/i;
export default handler;