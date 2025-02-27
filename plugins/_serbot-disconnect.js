import { DisconnectReason } from "@whiskeysockets/baileys";
import fs from "fs";
import path from "path";
const handler = async (m, { conn, text, mentionedJid }) => {
let userJid;
if (m.quoted) {
userJid = m.quoted.sender;
} else if (mentionedJid?.[0]) {
userJid = mentionedJid[0];
} else if (text) {
let cleanedNumber = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
userJid = cleanedNumber;
}
if (!userJid) {
return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y mensione a un *PreBot* o escriba su numero para eliminarlo del servidor._\n\n• *Por ejemplo:*\n#${command} +583747373384` }, { quoted: m });
}
const userName = userJid.split("@")[0];
const folderPath = path.join(process.cwd(), "MdmxSesion", userName);
const subBotIndex = global.conns.findIndex(bot => bot.user?.jid === userJid);
if (subBotIndex === -1) {
return conn.sendMessage(m.chat, { text: `● _El usuario *( PreBot @${userName} )* no se encuentra en el servidor o esta desconectado._` }, { quoted: m });
}
let subBot = global.conns[subBotIndex];
global.conns.splice(subBotIndex, 1);
 try {
 if (subBot.ws.readyState === subBot.ws.OPEN) {
 subBot.ws.close(DisconnectReason.loggedOut);
 }
 subBot.ev.removeAllListeners();
} catch (error) {
 console.error(error);
}
 if (fs.existsSync(folderPath)) {
 fs.rmdirSync(folderPath, { recursive: true });
}
 conn.sendMessage(m.chat, { text: `✓ _Se ha desconectado el *(PreBot @${userName} )* con exito._` }, { quoted: m });
};
handler.command = ["del_prebot"];
handler.owner = true;
export default handler;
