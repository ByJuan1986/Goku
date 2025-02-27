import fs from 'fs'
import archiver from 'archiver'

let handler = async (m, { conn, text, usedPrefix, command }) => {
const databaseFolder = './database';
const zipPath = './database_backup.zip';
let option = parseInt(text);

if (![1, 2].includes(option)) return await conn.sendMessage(m.chat, { text: `● _Puede usar los siguientes comandos para ver, el primer comando es para ver los creds.json y el otro para ver la database._\n\n• *Por ejemplo:*\n#${command} creds\n#${command} database` }, { quoted: m });
try {
let d = new Date();
let date = d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' });

if (option === 'creds') {  
const path = conn.user.jid !== global.conn.user.jid
? `./MdmxSesion/${conn.user.jid.split`@`[0]}/creds.json`
: `./MdmxDirector/creds.json`;
if (!fs.existsSync(path)) return await conn.sendMessage(m.chat, { text: `● _Lo lamento pero el archivo *creds.json* no existe en ninguna parte._` }, { quoted: m });

let creds = fs.readFileSync(path);
await conn.sendMessage(m.chat, { text: `● _Enviando archivo creds.json, espere un momento..._` }, { quoted: m });
await conn.sendMessage(m.sender, { document: creds, mimetype: 'application/json', fileName: `creds.json` }, { quoted: m });

} else if (option === 'database') { 
if (!fs.existsSync(databaseFolder)) return await conn.sendMessage(m.chat, { text: `● _Lo siento, el archivo *database* no existe en ninguna parte._` }, { quoted: m });

await conn.sendMessage(m.chat, { text: `● _Enviando archivo *database*, espere un momento..._` }, { quoted: m });
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', { zlib: { level: 9 } });
output.on('close', async () => {
console.log(`New file: ${archive.pointer()} bytes`);
await conn.sendMessage(m.sender, { document: fs.readFileSync(zipPath), mimetype: 'application/zip', fileName: `database.zip` }, { quoted: m });
fs.unlinkSync(zipPath);
});

archive.on('error', (err) => { throw err; });
archive.pipe(output);
archive.directory(databaseFolder, false);
archive.finalize();
}
} catch (e) {
await conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#${command}*_` }, { quoted: m });
console.log(e)
}}

handler.command = ["base_mx"]
handler.owner = true
export default handler
