import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return;
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba una peticion para hablar con *ChatGPT*._\n\n• *Por ejemplo:*\n#${command} Hola, como estas?`}, { quoted: m })
if (command == 'gpt' || command == 'chatgpt') {
try {
await conn.sendPresenceUpdate('composing', m.chat)
async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true
});
return response.data.result;
} catch (error) {
console.error('Error al obtener:', error);
}}
let query = m.text;
let username = `${m.pushName}`;
let syms1 = `Seras ChatGPT, responderas a todas las preguntas que te hagan, actua de manera seria, justa y sincero, cualquier duda que te hagan, respondelos sinceramente conforme a tu conocimiento, eres ChatGPT en colaboracion con MBMD.`;
let result = await luminsesi(query, username, syms1);
await conn.sendMessage(m.chat, {text: result}, { quoted: m })
} catch {
try {
let gpt = await fetch(`${apis}/ia/gptweb?text=${text}`) 
let res = await gpt.json()
await conn.sendMessage(m.chat, {text: res.gpt}, { quoted: m })
/*await conn.sendMessage(m.chat, { text: res.gpt }, footer: 'Selecciona una opción.',
buttons: [ {
buttonId: `#chagpt Me das mas información por favor`,
buttonText: {
displayText: "MAS INFO",
},
type: 1,
},
{
buttonId: `#chagptvoz ${text}`,
buttonText: {
displayText: "AUDIO GPT",
},
type: 1,
},
],
viewOnce: true,
headerType: 4,
}, { quoted: m })*/
} catch {
}}}

if (command == 'gpt2' || command == 'chatgpt2') {
conn.sendPresenceUpdate('composing', m.chat);
let gpt = await fetch(`${apis}/ia/gptweb?text=${text}`) 
let res = await gpt.json()
await conn.sendMessage(m.chat, {text: res.gpt}, { quoted: m })
/*await conn.sendMessage(m.chat, { text: res.gpt}, footer: 'Selecciona una opción.',
buttons: [ {
buttonId: `#chatgpt2 Me das mas información por favor.`,
buttonText: {
displayText: "MAS INFO",
},
type: 1,
},
{
buttonId: `#chatgptvoz`,
buttonText: {
displayText: "AUDIO GPT",
},
type: 1,
},
],
viewOnce: true,
headerType: 4,
}, { quoted: m })*/
}}
handler.command = ["gpt", "gpt2", "chatgpt", "chatgpt2"];
export default handler;

