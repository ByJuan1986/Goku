const handler = async (m, {conn, text}) => {
  if (!text) return conn.sendMessage(m.chat, { text: `Ingrese el comando y escriba lo que quiera para publicar el comentario en YouTube.` }, { quoted: m })
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender),
  }), 'error.png', '✓ _¡Has comentado en YouTube!_', m);
};
handler.command = /^(ytc)$/i;
export default handler;
