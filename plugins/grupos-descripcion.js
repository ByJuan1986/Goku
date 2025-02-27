let handler = async (m, { conn, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || imagens
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
conn.sendMessage(m.chat, {text: `✓ _Se ha actualizado la descripcion grupal con exito._`, { quoted: m })
}
handler.command = /^(cdesc)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
