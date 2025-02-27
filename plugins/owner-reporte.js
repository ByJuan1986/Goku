let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.sendMessage(m.chat, { text: `⪩ _Ingrese el comando y escriba su reporte para enviarlo a los desarrolladores del bot._\n\n• *Ppor ejemplo:*\n#report Hola, el comando #allmenu no envia la respuesta.` }, { quoted: m })
if (text.length < 8) return conn.sendMessage(m.chat, { text: `⪩ _Debe de escribir al menos 10 caracteres, intentalo de nuevo._` }, { quoted: m })
if (text.length > 1000) return conn.sendMessage(m.chat, { text: `⪩ _El maxino de reporte que puedes hacer es de 1000 caracteres, intentalo de nuevo._` }, { quoted: m })
let teks = `🜲 *\`R E P O R T E\`* 🜲\n\n- *Numero:* +${m.sender.split`@`[0]}\n- *Mensaje:*\n${text}`
conn.reply('5493873655135@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: { mentionedJid: [m.sender] }})
conn.reply('573108625104@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: { mentionedJid: [m.sender] }})
conn.sendMessage(m.chat, { text: `✓ _¡El reporte fue enviado con exito a los desarrolladores del bot!_` }, { quoted: m })
}
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
