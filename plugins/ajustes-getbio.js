import moment from "moment-timezone";
import _ from "lodash";
const handler = async (m, { conn }) => {
let who = m.isGroup ? _.get(m, "mentionedJid[0]", m.quoted?.sender || m.sender) : m.sender
try {
let bios = await conn.fetchStatus(who)
bios = _.castArray(bios)
let messages = _.map(bios, (bio) => {
let setAt = moment.utc(bio.setAt, "YYYY-MM-DDTHH:mm:ssZ").format("YYYY-MM-DD") || ""
return `⪧ *Usuario:* ${bio.user?.split("@")[0] || "Undefined."}\n⪧ *Estado:* ${bio.status || "Undefined."}\n⪧ *Fecha actualizada:* ${setAt}`
}).join("\n\n")
await conn.sendMessage(m.chat, {text: messages, { quoted: m })
} catch (error) {
return conn.sendMessage(m.chat, {text: `⪩ _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
}}
handler.command = /^(usersbio|getbio)$/i
export default handler
