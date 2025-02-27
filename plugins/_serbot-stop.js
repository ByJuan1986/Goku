let handler = async (m, { conn, command, usedPrefix }) => {
let resp
try {
if (global.conns.some(c => c.user.jid === conn.user.jid)) {
if (/stop/i.test(command)) {
let i = global.conns.indexOf(conn)
if (global.conn.user.jid != conn.user.jid && m.sender != global.conn.user.jid) {
if (i < 0) return
resp = `● _¡Se ha detenido tu *PreBot* con exito!_\n- _Puedes usarlo mas tarde si quieres._`
if (m.isWABusiness) {
await conn.sendButton(m.chat, resp, 'Si quieres activarlo de nuevo, usa el siguiente boton.', null, [['ACTIVAR ✓', '#mxrent']], null, null, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: fotoo }, caption: resp, footer: `Si quieres activarlo de nuevo, usa el siguiente boton.`,
buttons: [ {
buttonId: `#mxrent`,
buttonText: {
displayText: "ACTIVAR",
},
type: 1,
},
{
buttonId: `#prebots`,
buttonText: {
displayText: "PRE BOTS",
},
type: 1,
},
],
viewOnce: true,
headerType: 4,
}, { quoted: m });
}
await conn.sendMessage(m.chat, { text: resp }, { quoted: m })
conn.ev.removeAllListeners()
conn.ws.close()
conn.isInit = false
global.conns.splice(i, 1)
return 
}}
} else {
resp = `● _Este comando solo puede ser ejecutado por *PreBots*, si quieres ser un *PreBot* usa el comando *#adquirir*`
return conn.sendMessage(m.chat, { text: resp }, { quoted: m })
}} catch (e) {
resp = '● _Ocurrio un error al apagar el *PreBot*, verifique si el servidor tiene dos sesiones activas._'
return conn.sendMessage(m.chat, { text: resp }, { quoted: m })
}}

handler.command = ['stopbot', 'rprebot']
handler.private = true  
export default handler

