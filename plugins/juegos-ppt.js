const timeout = 60000;
const ganancia = 2;
const ganancia_lose = -1;
const ganancia_bot = 2;
const handler = async (m, {conn, usedPrefix, command, text}) => {
conn.suit = conn.suit ? conn.suit : {};
if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) return conn.sendMessage(m.chat, { text: 'Todavia estas jugando una partida, terminala para jugar otra partida.' }, { quoted: m });
if (!m.mentionedJid[0]) return conn.sendMessage(m.chat, { text: `Ingresa el comando y mensione a una persona para jugar piedra, papel y tijera.\n\n• *Por ejemplo:*\n${usedPrefix + command} @${m.sender.split`@`[0]}` }, { quoted: m });
if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) return conn.sendMessage(m.chat, { text: `El participante mensionado, esta jugando con otra persona, espera a que terminen de jugar para asi jugar con el.` }, { quoted: m });
const id = 'suit_' + new Date() * 1;
conn.suit[id] = {
 chat: conn.reply(m.chat, `Hola @${m.mentionedJid[0].split`@`[0]}, fuiste desafiado, aceptaras o rechazaras el desafio?\n- *Escriba lo siguiente sin prefijos.*\nAceptar\nRechazar`
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.sendMessage(m.chat, { text: `Se ha terminado el tiempo de espera, se cancela el juego por falta de respuesta.` }, { quoted: m });
delete conn.suit[id];
}, timeout), ganancia, ganancia_lose, ganancia_bot, timeout,
}
};
handler.command = ["suitpvp", "ppt"];
handler.group = true;
export default handler;
