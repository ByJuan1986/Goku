export function before(m) {
const user = global.db.data.users[m.sender];
if (user.afk > -1) {
conn.sendMessage(m.chat, { text: `
● _El participante ha dejado de estar inactivo._
- _Despues de estar inactivo ahora aparece._

*Razon de inactividad:* ${user.afkReason ? user.afkReason : 'No ha dado una razon.'}
*Tiempo de inactividad:* ${(new Date - user.afk).toTimeString()}
` }, { quoted: m });
user.afk = -1;
user.afkReason = '';
}
const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
for (const jid of jids) {
const user = global.db.data.users[jid];
if (!user) {
continue;
}
const afkTime = user.afk;
if (!afkTime || afkTime < 0) {
continue;
}
const reason = user.afkReason || '';
conn.sendMessage(m.chat, { text: `
● _Favor de no mensionar al participante._
- _Respetemos su inactividad y razon._

*Razon de inactividad:* ${reason ? reason : 'No hay motivo.'}
*Tiempo transcurrido:* ${(new Date - afkTime).toTimeString()}*
  ` }, { quoted: m });
  }
  return true;
}
