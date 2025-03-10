import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.sendMessage(m.chat, {text: `● _Ingrese el comando y escriba el nombre del usuario en *Instagram* para ver su informacion._\n\n• *Por ejemplo:*\n#${command} MD_thelol`, { quoted: m })
try {
const apiUrl = `${apis}/tools/igstalk?username=${encodeURIComponent(args[0])}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.data) return m.react("❌");
const profile = delius.data;
const txt = `⟢ Resultados encontrados.
Nombre de usuario existente: ${profile.username}

● *Nombre:* ${profile.full_name}
● *Biografia:* ${profile.biography}
● *Verificado:* ${profile.verified ? 'Sí.' : 'No.'}
● *Cuenta:* ${profile.private ? 'Privada.' : 'Publica.'}
● *Seguidores:* ${profile.followers}
● *Seguidos:* ${profile.following}
● *Posts:* ${profile.posts}
● *Enlace:* ${profile.url}`;
await conn.sendFile(m.chat, profile.profile_picture, 'insta_profile.jpg', txt, { quoted: m });
} catch (error) {
try {
let res = await igstalk(args[0].replace(/^@/, ''))
let res2 = await fetch(`https://api.lolhuman.xyz/api/stalkig/${args[0].replace(/^@/, '')}?apikey=${lolkeysapi}`)
let res3 = await res2.json()
let json = JSON.parse(JSON.stringify(res))
let iggs = `⟢ Resultados encontrados.
Nombre de usuario existente: ${json.username}

● *Nombre:* ${json.fullname}
● *Seguidores:* ${json.followers}
● *Seguidos:* ${json.following}
● *Posts:* ${json.post}
● *Biografia:* ${json.bio}
● *Enlace:* https://instagram.com/${json.username.replace(/@/, '')}
`.trim() 
let aa = `${res3.result.photo_profile || res.profile}`
await conn.sendFile(m.chat, aa, 'error.jpg', iggs, { quoted: m })
} catch (e) {
await conn.sendMessage(m.chat, {text: `● _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
console.log(e)
}}}
handler.command = ["iguser", "userig"]
export default handler

async function igstalk(Username) {
return new Promise((resolve, reject) => {
axios.get('https://dumpor.com/v/'+Username, {
headers: { "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8", "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36" }}).then(res => {
const $ = cheerio.load(res.data)
const result = {
profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()}
resolve(result)})})}
