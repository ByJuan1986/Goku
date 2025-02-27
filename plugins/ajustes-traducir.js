import { translate } from '@vitalets/google-translate-api'
const defaultLang = 'es'
const tld = 'cn'
let handler = async (m, { args, usedPrefix, command }) => {
let err = `⪩ _Ingrese el comando y espesifica el idioma e ingrese el texto para traducirlo._

• *Por ejemeplo:*
#${command} en Hola como estas.


*Codigo de idiomas:*
es (Español)
en (English)
pt (Portugués)
id (Indonesio)
`.trim()
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
try {
let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
conn.sendMessage(m.chat, { text: result.text }, { quoted: m })
} catch (e) {
return conn.sendMessage(m.chat, { text: err }, { quoted: m })
}}

handler.command = ['traducir', 'trad', 'traduce']
export default handler
