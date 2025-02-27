let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) return conn.sendMessage(m.chat, { text: `● _Ahora eres admin de este grupo._` }, { quoted: m })
  if (isAdmin) return conn.sendMessage(m.chat, { text: `● _Ya eres un admin en este chat grupal._` }, { quoted: m })
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^admintt$/i
handler.rowner = true
handler.botAdmin = true
export default handler
