import fs from 'fs'
let handler = async (m, { usedPrefix, command, text }) => {
let ar = Object.keys(plugins)
 let ar1 = ar.map(v => v.replace('.js', ''))
 if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y inicie con el texto start o otro clave._\n\n• *Por ejemplo:*\n#${command} start` }, { quoted: m })
 if (!ar1.includes(text)) return conn.sendMessage(m.chat, { text: `*\`LISTA DE PLUGINS\`*\n\n${ar1.map(v => ' ' + v).join`\n`}\n\n- _Para ver los codigo, ingrese el comando y escriba el nombre completo del plugin._` }, { quoted: m })
m.reply(fs.readFileSync('./plugins/' + text + '.js', 'utf-8'))
}
handler.command = /^(listplugin|listpg|pgs)$/i
handler.owner = true
export default handler
