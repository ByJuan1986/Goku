let handler = async (m, { conn, userPrefix, command }) => {
let mifoto = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg');
let name = conn.getName(who)
let mxBot =  conn.user.jid.split`@`[0] 
let contextos = `
- _Hola, soy_ ${wm} _este es el menu principal._

╭⋆ *Version:* ${vs}
⪩ *Autor:* ${author}
⪩ *Moneda:* ${currency}
╰⋆ *Asistencia:* ${ceotg}

۰───────────────۰

${readMore}
⫶☰  *\`INFORMATION\`*
⊐ _${usedPrefix}creator_
⊐ _${usedPrefix}cuentas_
⊐ _${usedPrefix}usos_
⊐ _${usedPrefix}donar_
⊐ _${usedPrefix}estado_
⊐ _${usedPrefix}grupos_
⊐ _${usedPrefix}rangos_
⊐ _${usedPrefix}test_
⊐ _${usedPrefix}speed_
⊐ _${usedPrefix}ping_
⊐ _${usedPrefix}infobot_


⫶☰  *\`GROUPS\`*
⊐ _${usedPrefix}add_ » <nro>
⊐ _${usedPrefix}admins_ » <text>
⊐ _${usedPrefix}adm_ » <mention>
⊐ _${usedPrefix}dm_ » <mention>
⊐ _${usedPrefix}warn_ » <mention>
⊐ _${usedPrefix}dwarn_ » <mention>
⊐ _${usedPrefix}dnums_ » <nro>
⊐ _${usedPrefix}kicknrs_ » <nro>
⊐ _${usedPrefix}del_ » <sms>
⊐ _${usedPrefix}kick_ » <mention>
⊐ _${usedPrefix}enlace_
⊐ _${usedPrefix}setevent_ » <config>
⊐ _${usedPrefix}inum_
⊐ _${usedPrefix}kicknum_
⊐ _${usedPrefix}tags_
⊐ _${usedPrefix}newlink_
⊐ _${usedPrefix}mute_ » <mention>
⊐ _${usedPrefix}unmute_ » <mention>
⊐ _${usedPrefix}infogrupo_
⊐ _${usedPrefix}bchat_
⊐ _${usedPrefix}bchat2_

⫶☰  *\`EDIT GROUPS\`*
⊐ _${usedPrefix}cname_ » <>
⊐ _${usedPrefix}cbye_ » <text>
⊐ _${usedPrefix}cwelcom_ » <text>
⊐ _${usedPrefix}cdesc_ » <text>
⊐ _${usedPrefix}cfoto » <img>


⫶☰  *\`CONVERTER\`*
⊐ _${usedPrefix}ts_anime_ » <img>
⊐ _${usedPrefix}timg_ » <sticker>
⊐ _${usedPrefix}turl_ » <img>
⊐ _${usedPrefix}turl2_ » <img>
⊐ _${usedPrefix}ts_pdf_ » <img>
⊐ _${usedPrefix}qrcode_ » <text>
⊐ _${usedPrefix}tstt_ » <text>
⊐ _${usedPrefix}texts_ » <text>
⊐ _${usedPrefix}tsvideo_ » <sticker>
⊐ _${usedPrefix}tsvn_ » <note>
⊐ _${usedPrefix}tsmp3_ » <audio>


⫶☰  *\`DOWNLOAD\`*
⊐ _${usedPrefix}apk_ » <text>
⊐ _${usedPrefix}apk2_ » <text>
⊐ _${usedPrefix}drive_ » <url>
⊐ _${usedPrefix}fb_ » <url>
⊐ _${usedPrefix}storyig_ » <mention>
⊐ _${usedPrefix}imagen_ » <text>
⊐ _${usedPrefix}pints_ » <text>
⊐ _${usedPrefix}imgtiktok_ » <url>
⊐ _${usedPrefix}userig_ » <mention>
⊐ _${usedPrefix}usertiktok_ » <mention>
⊐ _${usedPrefix}instagram_ » <url>
⊐ _${usedPrefix}twitter_ » <url>
⊐ _${usedPrefix}tiktok_ » <url>
⊐ _${usedPrefix}mediafire_ » <url>
⊐ _${usedPrefix}mega_ » <url>
⊐ _${usedPrefix}mp3_ » <text/url>
⊐ _${usedPrefix}mp4_ » <text/url>
⊐ _${usedPrefix}mp3doc_ » <text/url>
⊐ _${usedPrefix}mp4doc_ » <text/url>
⊐ _${usedPrefix}play_ » <text>
⊐ _${usedPrefix}playlist_ » <text>
⊐ _${usedPrefix}spotify_ » <text>
⊐ _${usedPrefix}threads_ » <url>
⊐ _${usedPrefix}musicas_ » <text>
⊐ _${usedPrefix}stickpack_ » <url>
⊐ _${usedPrefix}pptiktok_ » <mention>
⊐ _${usedPrefix}github_ » <url>


⫶☰  *\`SEARCH\`*
⊐ _${usedPrefix}wmusic_ » <video/audio>
⊐ _${usedPrefix}anime_ » <text>
⊐ _${usedPrefix}infobin_ » <bin>
⊐ _${usedPrefix}drivefolder_ » <url>
⊐ _${usedPrefix}usergit_ » <mention>
⊐ _${usedPrefix}google_ » <text>
⊐ _${usedPrefix}letra_ » <artist>
⊐ _${usedPrefix}letra2_ » <artist>
⊐ _${usedPrefix}sfy_ » <text>
⊐ _${usedPrefix}wikipedia_ » <text>
⊐ _${usedPrefix}mdlist2_ » <text>


⫶☰  *\`STICKERS\`*
⊐ _${usedPrefix}sticker_ » <img/video>
⊐ _${usedPrefix}sbg_ » <sticker>
⊐ _${usedPrefix}sc_ » <sticker/text>
⊐ _${usedPrefix}smeme_ » <img/text>
⊐ _${usedPrefix}stg_ » <url>
⊐ _${usedPrefix}scircle_ » <text>


⫶☰  *\`EDIT BOT\`*
⊐ _${usedPrefix}setmenu_ » <img>
⊐ _${usedPrefix}setmenu2_ » <img>
⊐ _${usedPrefix}setmenu3_ » <img>
⊐ _${usedPrefix}setname_ » <text>
⊐ _${usedPrefix}set_info » <text>
⊐ _${usedPrefix}set_econ_ » <text>
⊐ _${usedPrefix}set_econ2_ » <text>
⊐ _${usedPrefix}set_econ3_ » <text>


⫶☰  *\`PARTICIPANT\`*
⊐ _${usedPrefix}perfil_
⊐ _${usedPrefix}reg_ » <name/age>
⊐ _${usedPrefix}wallet_
⊐ _${usedPrefix}dep_ » <count>
⊐ _${usedPrefix}dep2_ » <count>
⊐ _${usedPrefix}dep3_ » <count>
⊐ _${usedPrefix}ret_ » <count>
⊐ _${usedPrefix}ret2_ » <count>
⊐ _${usedPrefix}ret3_ » <count>


⫶☰  *\`RPG ECONOMY\`*
⊐ _${usedPrefix}cofre_
⊐ _${usedPrefix}slut_ » <count>
⊐ _${usedPrefix}levelup_
⊐ _${usedPrefix}mine_
⊐ _${usedPrefix}arbol_


⫶☰  *\`SETTINGS\`*
⊐ _${usedPrefix}yurl_ » <url>
⊐ _${usedPrefix}autochat_ » <text>
⊐ _${usedPrefix}calc_ » <nro>
⊐ _${usedPrefix}wecap_ » <url>
⊐ _${usedPrefix}chatgpt_ » <text>
⊐ _${usedPrefix}gpt2_ » <text>
⊐ _${usedPrefix}gptvoz_ » <text>
⊐ _${usedPrefix}statusbot_ » <media>
⊐ _${usedPrefix}gemini_ » <text>
⊐ _${usedPrefix}geminimg_ » <text/img>
⊐ _${usedPrefix}getbio_
⊐ _${usedPrefix}hd_ » <img>
⊐ _${usedPrefix}hours_
⊐ _${usedPrefix}readmore_ » <text>
⊐ _${usedPrefix}vcs_ » <media>
⊐ _${usedPrefix}newgroup_ » <text>
⊐ _${usedPrefix}ofuscar_ » <js>
⊐ _${usedPrefix}poll_ » <text>
⊐ _${usedPrefix}smsf_ » <text>
⊐ _${usedPrefix}traduce_ » <id/text>
⊐ _${usedPrefix}imagina_ » <text>


⫶☰  *\`MENTIONS\`*
⊐ _${usedPrefix}horny_ » <mention>
⊐ _${usedPrefix}simp_ » <mention>
⊐ _${usedPrefix}ytc_ » <text>
⊐ _${usedPrefix}pixel_ » <mention>
⊐ _${usedPrefix}stupid_ » <mention>
⊐ _${usedPrefix}escribir_ » <text>
⊐ _${usedPrefix}lolis_ » <mention>
⊐ _${usedPrefix}difuminar_ » <mention>


⧠  *\`PROPIETARIO\`*
⊐ _${usedPrefix}add_econ_ » <limit>
⊐ _${usedPrefix}add_econ2_ » <limit>
⊐ _${usedPrefix}add_econ3_ » <limit>
⊐ _${usedPrefix}addw_ » <mention>
⊐ _${usedPrefix}delw_ » <mention>
⊐ _${usedPrefix}prem_h_ » <limit>
⊐ _${usedPrefix}prem_d_ » <limit>
⊐ _${usedPrefix}prem_s_ » <limit>
⊐ _${usedPrefix}prem_m_ » <limit>
⊐ _${usedPrefix}admintt_
⊐ _${usedPrefix}block_ » <mention>
⊐ _${usedPrefix}unblock_ » <mention>
⊐ _${usedPrefix}ddd_
⊐ _${usedPrefix}dtmp_
⊐ _${usedPrefix}noprem_ » <mention>
⊐ _${usedPrefix}fetch_ » <url>
⊐ _${usedPrefix}temps_ » <config>
⊐ _${usedPrefix}nochat_
⊐ _${usedPrefix}pgs_ » <name>
⊐ _${usedPrefix}ofcsms_ » <text>
⊐ _${usedPrefix}rwho_ » <mention>
⊐ _${usedPrefix}restart_
⊐ _${usedPrefix}updatll_
⊐ _${usedPrefix}acz_
⊐ _${usedPrefix}base_mx_
`.trim();
if (m.isWABusiness) {
await conn.sendMessage(m.chat, { image: { url: mxMenu1 }, caption: contextos }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { image: { url: mxMenu1 }, caption: contextos, footer: textoInfo,
buttons: [{ 
buttonId: `.estado`, buttonText: { displayText: "STATUS", }, type: 1, }, {
buttonId: `.infobot`, buttonText: { displayText: "INFO BOT", }, type: 1, },
], viewOnce: true, headerType: 4, }, { quoted: m })
}

/*await conn.sendFile(m.chat, mxImagens, 'mdmx.jpg', txt, { quoted: m })*/
/*await conn.sendMessage(m.chat, { text: txt, contextInfo: { externalAdReply: { title: botname, body: dev, thumbnailUrl: banner, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })*/

};
handler.command = ['allmenu', 'menuall', 'menucompleto'];
export default handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
