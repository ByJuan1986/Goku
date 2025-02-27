const handler = (m) => m;
handler.before = async function(m) {
  this.suit = this.suit ? this.suit : {};
  if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0;
  const room = Object.values(this.suit).find((room) => room.id && room.status && [room.p, room.p2].includes(m.sender));
  if (room) {
    let win = '';
    let tie = false;
    if (m.sender == room.p2 && /^(acc(ept)?|terima|aceptar|gas|aceptare?|nao|gamau|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
      if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) {
        const textno = `El participante @${room.p2.split`@`[0]} ha rechazado el desafio, el juego se cancela.`;
        m.reply(textno, null, {mentions: this.parseMention(textno)});
        delete this.suit[room.id];
        return !0;
      }
      room.status = 'play';
      room.asal = m.chat;
      clearTimeout(room.waktu);
      const textplay = `El juego comienza, @${room.p.split`@`[0]} y @${room.p2.split`@`[0]} tienen que ir al privado del bot para elegir las opciones.`;
      m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)});
      const comienzop = `Hola participante, tiene que elegir una opcion para continuar y ver quien gana!\n- *Responde a este mensaje con la respuesta.*\n\nPiedra\nPapel\nTijera`;
      const comienzop2 = `Hola participante, tiene que elegir una opcion para continuar y ver quien gana!\n- *Responde a este mensaje con la respuesta.*\n\nPiedra\nPapel\nTijera`;
      if (!room.pilih) this.sendMessage(room.p, {text: comienzop}, {quoted: m});
      if (!room.pilih2) this.sendMessage(room.p2, {text: comienzop2}, {quoted: m});
      room.waktu_milih = setTimeout(() => {
        const iniciativa = `Ningun jugador ha empezado el juego, por falta de respuesta el juego se cancela...`;
        if (!room.pilih && !room.pilih2) this.sendMessage(m.chat, {text: iniciativa}, {quoted: m});
        else if (!room.pilih || !room.pilih2) {
          win = !room.pilih ? room.p2 : room.p;
          const textnull = `Hola @${(room.pilih ? room.p2 : room.p).split`@`[0]}, como no elegiste ninguna opcion y por falta de respuesta, el juego se cancela.`;
          this.sendMessage(m.chat, {text: textnull}, {quoted: m}, {mentions: this.parseMention(textnull)});
          db.data.users[win == room.p ? room.p : room.p2].exp += room.ganancia;
          db.data.users[win == room.p ? room.p : room.p2].exp += room.ganancia_bot;
          db.data.users[win == room.p ? room.p2 : room.p].exp -= room.ganancia_lose;
        }
        delete this.suit[room.id];
        return !0;
      }, room.timeout);
    }
    const jwb = m.sender == room.p;
    const jwb2 = m.sender == room.p2;
    const g = /tijera/i;
    const b = /piedra/i;
    const k = /papel/i;
    const reg = /^(tijera|piedra|papel)/i;
    if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
      room.pilih = reg.exec(m.text.toLowerCase())[0];
      room.text = m.text;
      m.reply(`✓ Ahora regresa al grupo y ${room.pilih2 ? `revisa el resultado final.` : 'espera el resultado.'}`);
      if (!room.pilih2) this.reply(room.p2, 'El jugador ya ha elegido una opcion, te toca.', 0);
    }
    if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
      room.pilih2 = reg.exec(m.text.toLowerCase())[0];
      room.text2 = m.text;
      m.reply(`✓ Ahora regresa al grupo y ${room.pilih ? `revisa el resultado final.` : 'espera el resultado.'}`);
      if (!room.pilih) this.reply(room.p, 'El jugador ya ha elegido una opcion, te toca.', 0);
    }
    const stage = room.pilih;
    const stage2 = room.pilih2;
    if (room.pilih && room.pilih2) {
      clearTimeout(room.waktu_milih);
      if (b.test(stage) && g.test(stage2)) win = room.p;
      else if (b.test(stage) && k.test(stage2)) win = room.p2;
      else if (g.test(stage) && k.test(stage2)) win = room.p;
      else if (g.test(stage) && b.test(stage2)) win = room.p2;
      else if (k.test(stage) && b.test(stage2)) win = room.p;
      else if (k.test(stage) && g.test(stage2)) win = room.p2;
      else if (stage == stage2) tie = true;
      this.reply(room.asal, `
*\`RESULTADOS DEL JUEGO:\`*
${tie ? '- *Empatados:*' : '- *Un ganador:*'}

- @${room.p.split`@`[0]} ha elegido *${room.text}*
> ${tie ? '' : room.p == win ? `*Ganaste:* ${room.ganancia} dolares.` : `*Perdiste:* ${room.ganancia_lose} exp...`}

@${room.p2.split`@`[0]} ha elegido *${room.text2}* 
> ${tie ? '' : room.p2 == win ? `*Ganaste:* ${room.ganancia} dolares.` : `*Perdiste:* ${room.ganancia_lose} exp...`}
`.trim(), m, {mentions: [room.p, room.p2]} );
      if (!tie) {
        db.data.users[win == room.p ? room.p : room.p2].money += room.ganancia;
        db.data.users[win == room.p ? room.p : room.p2].money += room.ganancia_bot;
        db.data.users[win == room.p ? room.p2 : room.p].money -= room.ganancia_lose;
      }
      delete this.suit[room.id];
    }
  }
  return !0;
};
export default handler;
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
