import JavaScriptObfuscator from 'javascript-obfuscator'
let handler = async(m, { conn, text }) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas el codigo *JavaScript* para ofuscarlo._`, { quoted: m });
function obfuscateCode(code) {
  return JavaScriptObfuscator.obfuscate(code, { compact: false, controlFlowFlattening: true, deadCodeInjection: true, simplify: true, numbersToExpressions: true }).getObfuscatedCode();
}
let obfuscatedCode = await obfuscateCode(text);
conn.sendMessage(m.chat, {text: `_Aqui tiene su codigo ofuscado._`, { quoted: m });
conn.sendMessage(m.chat, {text: obfuscatedCode}, {quoted: m});
}
handler.command = /^(encriptar|ofuscar)$/i
export default handler
