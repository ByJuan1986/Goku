//import db from '../lib/database.js'
let reg = 10
let maxap = 20000
let cooldown = 30000
let handler = async (m, { conn, args, usedPrefix, command }) => {
let apostarr = `● _Ingrese el comando y la cantidad que va a apostar._
- _Se usaran 100 de tus *${currency}* para apostar._

• *Para jugar use este ejemplo:*
#${command} 100`.trim()

    if (!args[0]) return conn.sendMessage(m.chat, { text: apostarr }, { quoted: m });
    if (isNaN(args[0])) return conn.sendMessage(m.chat, { text: apostarr }, { quoted: m });
    let apuesta = parseInt(args[0])
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastslot < cooldown) return conn.sendMessage(m.chat, { text: `● _Ya has jugado, espere ${msToTime((user.lastslot + cooldown) - new Date())} minutos para jugar de nuevo._` }, { quoted: m });
    if (apuesta < 100) return conn.sendMessage(m.chat, { text: `● _Solo puedes apostar *${currency}* o un numero mayor que eso._` }, { quoted: m });
    if (user.money < apuesta) return conn.sendMessage(m.chat, { text: `● _Lo siento, no tienes suficientes *${currency}* para jugar, puedes jugar otros juegos y conseguir *${curreny}* para jugar este juego._` }, { quoted: m });
   if (maxap < apuesta) return conn.sendMessage(m.chat, { text: `● _Hay un limite para apostar, el maximo para apostar en este juego es de_ ${maxap} *${currency}*\n- _Intentalo de nuevo otra vez pero con numeros que no pasen al maximo._` }, { quoted: m });
   	
    let emojis = ["👑", "📦", "🧧"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        end = `✓ _¡Has ganado la apuesta!_\n_Tienes_ +1000 _mas de *${currency}* en tu perfil._`
        user.money += 1000
    } else if (a == b || a == c || b == c) {
        end = `- _¡Apuesta cercada!_\n- _Casi lo logras, por tu fallo se suman +50 mas de *${currency}* en tu perfil._`
        user.money += 50
    } else {
        end = `✘ _¡Has perdido la apuesta!_\n_Perdiste tus 100 *${currency}* en la apuesta, puedes volver cuando acabe el tiempo de espera._`
        user.money -= 100
    }
    user.lastslot = new Date * 1
    return await conn.sendMessage(m.chat, { text: `_¡¡Iniciando apuesta!!_` }, { quoted: m }):
conn.sendMessage(m.chat, { text: `
╭──────────────·
│${x[0]} │ ${y[0]} │ ${z[0]}
│${x[1]} │ ${y[1]} │ ${z[1]}
│${x[2]} │ ${y[2]} │ ${z[2]}
╰──────────────·
` }, { quoted: m }) ;
conn.sendMessage(m.chat, { text: end }, { quoted: m });
}

handler.command = ['apostar', 'slut']
handler.group = true

export default handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return seconds
}
