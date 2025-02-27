let handler = async (m, { conn }) => {
let stats = Object.entries(db.data.stats).map(([key, val]) => {
let name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join(' , ') : plugins[key]?.help || key 
    
if (/exec/.test(name)) return
return { name, ...val }
})
 
stats = stats.sort((a, b) => b.total - a.total)
var txt = stats.slice(0, 10).map(({ name, total, last }) => {
return `
│ᗢ *Comando:* ${name}
│⚘ *Uso total:* ${total} usos.
├·───────────·`
}).join`\n`
conn.sendMessage(m.chat, {text: `✎ _Aqui tiene la lista de comandos mas usados en MBMD._\n\n╭────────────·\n${txt}\n│ _@mdmx_mktg_\n╰────────────·`, { quoted: m })
handler.command = /^usos$/i

export default handler

export function parseMs(ms) {
  if (typeof ms !== 'number') throw 'Parameter must be filled with number'
  return {
    dias: Math.trunc(ms / 86400000),
    horas: Math.trunc(ms / 3600000) % 24,
    minutos: Math.trunc(ms / 60000) % 60,
    segundos: Math.trunc(ms / 1000) % 60,
    milisegundos: Math.trunc(ms) % 1000,
    microsegundos: Math.trunc(ms * 1000) % 1000,
    nanosegundos: Math.trunc(ms * 1e6) % 1000
  }
}

export function getTime(ms) {
  let now = parseMs(+new Date() - ms)
  if (now.days) return `${now.days} days ago`
  else if (now.hours) return `${now.hours} hours ago`
  else if (now.minutes) return `${now.minutes} minutes ago`
else return `hace unos segunos`
}
