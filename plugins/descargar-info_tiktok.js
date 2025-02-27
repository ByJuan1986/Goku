import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba el nombre del usuario en *TikTok* para ver su informacion._\n\n• *Por ejemplo:*\n#${command} 00.44.h`, { quoted: m });
try {
await conn.sendMessage(m.chat, {text: `_Buscando resultados, espere un momento..._`, { quoted: m });
const apiUrl = `${apis}/tools/tiktokstalk?q=${encodeURIComponent(args[0])}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.result || !delius.result.users) return m.react("❌");
const profile = delius.result.users;
const stats = delius.result.stats;
let resultados = `- *_Se ha encontrado los siguientes resultados:_*

*Usuario:* ≻ ${profile.username}
*Nombre:* ≻ ${profile.nickname}
*Verificado:* ≻ ${profile.verified ? 'Sí' : 'No'}
*Seguidores:* ≻ ${stats.followerCount.toLocaleString()}
*Seguidos:* ≻ ${stats.followingCount.toLocaleString()}
*Likes:* ≻ ${stats.heartCount.toLocaleString()}
*Videos:* ≻ ${stats.videoCount.toLocaleString()}
*Firma:* ≻ ${profile.signature}
*Enlace:* ≻ ${profile.url}
`.trim()

await conn.sendFile(m.chat, profile.avatarLarger, 'tt.png', resultados, m);
} catch (e2) {
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let resultados = `- *_Se han encontrado los siguientes resultados:_*

*Usuario:* ≻ ${json.result.username}
*Nombre:* ≻ ${json.result.nickname}
*Seguidores:* ≻ ${json.result.followers}
*Seguidos:* ≻ ${json.result.followings}
*Likes:* ≻ ${json.result.likes}
*Videos:* ≻ ${json.result.video}
*Biografia:* ≻ ${json.result.bio}`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', resultados, m)
} catch (e) {
await conn.sendMessage(m.chat, {text: `✎ _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e)
}}}
handler.command = /^(usertiktok|tiktokuser)$/i
export default handler
