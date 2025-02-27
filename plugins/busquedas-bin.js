import request from 'request'
let handler = async (m,{ command, args, text, usedPrefix}) => {
if (!text) return conn.sendMessage(m.chat, {text: `● _Ingrese el comando mas el codigo bin para ver su informacion._\n\n• *Por ejemplo:*\n#${command} xxxxx`, { quoted: m });
request(`https://bins.antipublic.cc/bins/${text.slice(0, 6)}`, (error, response, body) => {
if (body.includes('Invalid BIN') || body.includes('not found.') || body.includes('Error code 521') || body.includes('cloudflare')) {
conn.sendMessage(m.chat, {text: `● _El bin mensionado no es valido o no existe, intentalo de nuevo._`, { quoted: m })
} else {
const js = JSON.parse(body);
const binnn = js['bin'];
const brand = js['brand'];
const country = js['country'];
const country_name = js['country_name'];
const country_flag = js['country_flag'];
const country_currencies = js['country_currencies'][0];
const bank = js['bank'];
const level = js['level'];
const type = js['type'];
const info = `
*╭─────────·*
*│Bin:* ${text.slice(0, 6)}
*│Tipo:* ${type} - ${brand} - ${level} 
*│Banco:* ${bank} 
*│País:* ${country_name} ${country_flag} ${country_currencies}
*╰─────────·*`
conn.sendMessage(m.chat, {text: `${info}`, { quoted: m })
}});
}
export default handler;
handler.command = /^(bininfo|infobin)$/i
