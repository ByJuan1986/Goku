const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkReason = text;
conn.sendMessage(m.chat, { text: `
● _Por favor, no mensione al participante_ ${conn.getName(m.sender)}
- _Respetos su motivo de inactividad._

*Motivo de inactividad:* ${text ? text : 'No ha dado un motivo.'}
` }, { quoted: m });
};
handler.command = /^afk|pronto$/i;
export default handler;
