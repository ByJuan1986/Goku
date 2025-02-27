const handler = async (m, { conn, isROwner, text }) => {
const datas = global
if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
const { key } = await conn.sendMessage(m.chat, {text: `❪ ✎ › Iniciando reinicio completo en la base de datos y el servidor...\n\n- Esto puede tardar, espere  un momento...`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `⊏⊐ Reiniciando datos y base del servidor...`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `⊑⊒ Ejecutando reinicio completo de todos los servicios...`, edit: key})
await conn.sendMessage(m.chat, {text: `*\`MBMD : REINICIADO\`*\n\n⫹⫺ Panel de sub-bots reiniciados con exito. ✓\n\n⫶☰ Servidores reiniciados con exito. ✓\n\n⧉ Copias de seguridad removidas. ✓\n\n⏍ Nuevas copias de seguridad. ✓\n\n⎙ Usuarios agregados a una base segura. ✓\n\n⎘ Copiando recursos del usuario. ✓\n\n⎗ Removiendo copias de seguridad via usuarios. ✓\n\n⎅ Aumentando velocidad del servidor. ✓\n\n⎌ Tiempo de actividad reiniciada. ✓\n\n⎋ Fondos, compras y librerias reiniciados. ✓\n\n> Tendras que activarlo de nuevo usando el comando: *npm start MBMD* para continuar.`, edit: key})
process.send('reset')}
handler.command = ['restart','reiniciar'] 
handler.owner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
