const handler = async (m, {conn}) => {
let tu = conn.getName(who) || 'Tu'
let { age } = global.db.data.users[m.sender]
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/horny', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'hornycard.png', `
• *Nombre:* ${tu}
• *Edad:* ${age ? age : 'Sin registro.' }
• *Estado:* Caliente 🔥
• *Pensamientos:* Impuros
`, m);
};
handler.command = ["horny"];
export default handler;
