import fs from 'fs';  
import path from 'path';  
import fetch from "node-fetch";
import crypto from "crypto";
import { FormData, Blob } from "formdata-node";
import { fileTypeFromBuffer } from "file-type";

let handler = async (m, { conn, isRowner }) => {

  if (!m.quoted || !/image/.test(m.quoted.mimetype)) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y responda a un enlace de imagen para cambiar la imagen del menu._\n\n• *Por ejemplo:*\n#setmenu https://qu.ax/XDOZP.jpg` }, { quoted: m });

  try {

    const media = await m.quoted.download();
    let link = await catbox(media);
    
    if (!isImageValid(media)) {
      return conn.sendMessage(m.chat, { text: `● _El enlace enviado no es una imagen valida, intenta responder a un enlace de imagen._\n\n*¿No sabes como?*\n_Puedes usar el comando *#turl* respondiendo a una imagen para convertirlo en un enlace y despues usar este comando con el enlace._` }, { quoted: m });
    }

    global.mxMenu1 = `${link}`;  
await conn.sendMessage(m.chat, { text: `✓ _La imagen del menu fue cambiada con exito, puedes probar usando el comando: *#allmenu*_` }, { quoted: m });

  } catch (error) {
    console.error(error);
    await conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#setmenu*_` }, { quoted: m });
  }
};


const isImageValid = (buffer) => {
  const magicBytes = buffer.slice(0, 4).toString('hex');


  if (magicBytes === 'ffd8ffe0' || magicBytes === 'ffd8ffe1' || magicBytes === 'ffd8ffe2') {
    return true;
  }


  if (magicBytes === '89504e47') {
    return true;
  }


  if (magicBytes === '47494638') {
    return true;
  }

  return false; 
};

handler.command = ['setmenu'];

export default handler;

function formatBytes(bytes) {
  if (bytes === 0) {
    return "0 B";
  }
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function catbox(content) {
  const { ext, mime } = (await fileTypeFromBuffer(content)) || {};
  const blob = new Blob([content.toArrayBuffer()], { type: mime });
  const formData = new FormData();
  const randomBytes = crypto.randomBytes(5).toString("hex");
  formData.append("reqtype", "fileupload");
  formData.append("fileToUpload", blob, randomBytes + "." + ext);

  const response = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: formData,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
    },
  });

  return await response.text();
}