let handler = async (m, { conn, text }) => {
let id = m.chat
conn.math = conn.math ? conn.math : {}
if (id in conn.math) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
conn.sendMessage(m.chat, {text: `⪩ _Sabias que hacer trampa, aumenta la mente cada vez mas similar a un burro? jsjdkk_`, { quoted: m })
}
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
conn.sendMessage(m.chat, {text: `${format} = ${result}`, { quoted: m })
} catch (e) {
if (e == undefined) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando mas una operacion matematica para calcular._\n\n• *Por ejemplo:*\n#${command} 244 × 933`, { quoted: m })
return conn.sendMessage(m.chat, {text: `⪩ _Solo se admiten simbolos, nada de emojis o letras._\n\n• *Simbolos admitidos:*\n-, +, * , /, ×, ÷, π, e, (, )`, { quoted: m })
}}
handler.command = /^(calcular|calc)$/i
export default handler
