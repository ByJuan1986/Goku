const handler = async (m, {conn, isOwner}) => {
  const chats = Object.entries(global.db.data.chats).filter((chat) => chat[1].isBanned);
  const users = Object.entries(global.db.data.users).filter((user) => user[1].banned);
  const caption = `
╭• ⧠ *USUARIOS DESCARTADOS:*
╰۰ *\`total:\`* ${users.length} ${users ? '\n' + users.map(([jid], i) => `
⪼ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n⪼') : 'Sin usuarios.'}


╭• ⧠ *CHATS DESCARTADOS:*
╰۰  *\`total:\`* ${chats.length} ${chats ? '\n' + chats.map(([jid], i) => `
⪼ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n│⪼') : 'Sin usuarios.'}

`.trim();
m.reply(caption, null, {mentions: conn.parseMention(caption)});
};
handler.command = /^list_baners|list_ban|lista_baners|lista_baner|list_baners$/i;
handler.admin = true;
export default handler;
