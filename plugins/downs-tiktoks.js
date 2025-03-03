import axios from 'axios'
const {proto, generateWAMessageFromContent, prepareWAMessageMedia, generateWAMessageContent, getDevice} = (await import("@whiskeysockets/baileys")).default
let handler = async (message, { conn, text, usedPrefix, command }) => {
if (!text) return conn.sendMessage(message.chat, { text: `● _Ingrese el comando y escriba lo que quiera buscar en *TikTok*._\n\n• *Por ejemplo:*\n#${command} Trends de baile popular.` }, { quoted: message })
async function createVideoMessage(url) {
const { videoMessage } = await generateWAMessageContent({ video: { url } }, { upload: conn.waUploadToServer })
return videoMessage
}
async function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]]
}
}
try {
//await conn.sendMessage(message.chat, { text: `_Descargando videos de *TikTok*, espere un momento..._` }, { quoted: message })
await conn.sendMessage(message.chat, { text: `_Buscando videos en *TikTok*, espere un momento..._` }, { quoted: message })
let results = []
let { data: response } = await axios.get('https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=' + text)
let searchResults = response.data
shuffleArray(searchResults)
let selectedResults = searchResults.splice(0, 7)
for (let result of selectedResults) {
results.push({ body: proto.Message.InteractiveMessage.Body.fromObject({ text: '🜲  `T I K T O K S`  🜲' }), footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: wm }), header: proto.Message.InteractiveMessage.Header.fromObject({ title: '• *Titulo:*' + result.title, hasMediaAttachment: true, videoMessage: await createVideoMessage(result.nowm)}), nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })})
}
const responseMessage = generateWAMessageFromContent(message.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.fromObject({ body: proto.Message.InteractiveMessage.Body.create({ text: `RESULTADOS` }), footer: proto.Message.InteractiveMessage.Footer.create({ text: 'V I D E O' }), header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }), carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...results] })})}}
}, { quoted: message })
await conn.relayMessage(message.chat, responseMessage.message, { messageId: responseMessage.key.id })
} catch (error) {
await conn.reply(message.chat, error.toString(), message)
}}
handler.command = ['tiktoks']
export default handler


