import axios from 'axios'

let handler = async (m, { conn, text }) => {
if (!text) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba el nombre del usuario para ver su informacion._\n\n• *Por ejemplo:*\n#infotiktok Exotico` }, { quoted: m })
await conn.sendMessage(m.chat, { text: `_Buscando el usuario en *TikTok*, espere un momento..._` }, { quoted: m })
try {
  let api = await axios.get(`https://vapis.my.id/api/tt-stalk?username=${text}`)
  let json = api.data
  if (!json.status) return conn.sendMessage(m.chat, { text: `● _No se ha encontrado resultados, verifique si el usuario existe._` }, { quoted: m })

  let { user, stats } = json.data
  let { uniqueId, nickname, avatarLarger, avatarMedium, avatarThumb, signature, createTime, verified, secUid, region, language, privateAccount, followingVisibility } = user
  
  let { followerCount, followingCount, heartCount, videoCount } = stats

  let MDMX = `🜲 *\`C U E N T A\`* 🜲
⪩ *Usuario:* ${uniqueId} *( ${nickname} )*
⪩ *Descripcion:* ${signature || "-"}
⪩ *Cuenta Verificada:* ${verified ? "Sí" : "No"}
⪩ *Región:* ${region}
⪩ *Idioma:* ${language}
⪩ *Cuenta Privada:* ${privateAccount ? "Sí" : "No"}
⪩ *Visibilidad de Seguidores:* ${followingVisibility === 2 ? "Visible" : "No Visible"}
⪩ *Cuenta creada en:* ${new Date(createTime * 1000).toLocaleString()}

🜲 *\`D E T A L L E S\`* 🜲
⪩ *Seguidores:* ${followerCount}
⪩ *Siguiendo:* ${followingCount}
⪩ *Corazones:* ${heartCount}
⪩ *Videos Subidos:* ${videoCount}`
  await conn.sendMessage(m.chat, { image: { url: avatarLarger }, caption: MDMX }, { quoted: m })
} catch (error) {
conn.sendMessage(m.chat, { text: `● _Ocurrio un error o el nombre del usuario es incorrecto o no existe._\n- _Vuelva a intentar con otro nombre por favor.` }, { quoted: m })
console.error(error)
}}

handler.command = ['infotiktok', 'usertiktok']

export default handler
