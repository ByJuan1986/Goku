import { execSync } from 'child_process';
const handler = async (m, { conn, text, command }) => {
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString();
if (messager.includes('Already up to date.')) {
messager = `● _No hay actualizaciones recientes, vuelva pronto._`;
} else if (messager.includes('Updating')) {
const updatedPlugins = messager.match(/Updated\s+(\d+)\s+(.*)/g);
const newPlugins = messager.match(/New\s+(\d+)\s+(.*)/g);
//-----------
let updatedText = '';
let newText = '';
let updatedList = '';
let newList = '';
//------------
if (updatedPlugins && updatedPlugins.length > 0) {
updatedText = `- *Plugins mejorados:* ${updatedPlugins[0].match(/\d+/g)[0]}`;
updatedList = updatedPlugins.map(plugin => {
const fileName = plugin.replace(/Updated\s+\d+\s+/, '');
return '• ' + fileName;
}).join('\n');
} else {
updatedText = '- *Plugins mejorados:* 0';
updatedList = 'No hay plugins actualizados.';
}
if (newPlugins && newPlugins.length > 0) {
newText = `- *Plugins nuevos:* ${newPlugins[0].match(/\d+/g)[0]}`;
newList = newPlugins.map(plugin => {
const fileName = plugin.replace(/New\s+\d+\s+/, '');
return '• ' + fileName;
}).join('\n');
} else {
newText = '- *Plugins nuevos:* 0';
newList = 'No hay plugins nuevos.';
}
messager = `🜲 *\`ACCESS • UPDATE\`* 🜲\n${newText}\n${updatedText}\n·───────·\n\n- *LISTA NUEVA:*\n${newList}\n\n- *LISTA MEJORADA:*\n${updatedList}`;
}
conn.sendMessage(m.chat, { text: messager }, { quoted: m });
} catch {
try {
const status = execSync('git status --porcelain');
if (status.length > 0) {
const conflictedFiles = status
 .toString()
 .split('\n')
 .filter(line => line.trim() !== '')
 .map(line => {
 if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('MdmxSesion/') || line.includes('npm-debug.log')) {
return null;
}
return '*• ' + line.slice(3) + '*';
})
 .filter(Boolean);
 if (conflictedFiles.length > 0) {
const errorMessage = `- _Hay archivos en conflicto, por ende tienes que actualizarlo manualmente._`;
await conn.sendMessage(m.chat, { text: errorMessage }, { quoted: m });
   }
  }
 } catch (error) {
console.error(error);
if (error.message) {
const errorMessage2 = `ERROR_UPDATE: ` + error.message;
}
await conn.sendMessage(m.chat, { text: `- _Ocurrio un error con el comando: *#${command}*_` }, { quoted: m });
}}
};

handler.command = /^(prueba)$/i;
handler.owner = true;
export default handler;
