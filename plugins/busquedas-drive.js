/* Script Hecha por Edder ミ⁠●⁠﹏⁠☉⁠ミ  */
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) return conn.sendMessage(m.chat, { text: `● _Ingrese el comando mas un enlace de un archivo de folder drive para descargarlo._` }, { quoted: m })
    let url=args[0]
    if (!(url && url.match(/drive\.google/i))) return conn.sendMessage(m.chat, { text: `● _El enlace ingresado no es valido, recuerde copiar un enlace directo de un archivo de folder drive para descargarlo._` }, { quoted: m })
    url=url.replace('/mobile', '');
    try{
    let re1=(await getData(url)).join("\n\n")
    conn.sendMessage(m.chat, { text: `_Enviando archivos y subcarpetas, espere un momento..._` }, { quoted: m })
    }catch{
    conn.sendMessage(m.chat, { text: `● _Ocurrio un error inesperado con el comando y el enlace ingresado no es valido._` }, { quoted: m })
    }
}

async function getData(folderUrl) {
      let res = await fetch(folderUrl);
      let text = await res.text();
      let archivos = text.match(/https:\/\/drive.google.com\/file\/d\/([^\s\\]+)usp\b/g);
      let folders=text.match(/https:\/\/drive.google.com\/drive\/folders\/([^\s"|\\|&|?|%]+)/g);
      let regex =/(?<=\\x22\\x5d,\\x22)(.*?)(?=\\x22)/g
      let nombres=text.match(regex);
      folders=eliminarDuplicados(folders)
      archivos=eliminarDuplicados(archivos)
      folders.shift();
      let con=folders.concat(archivos);
      let resultado=[]
      let index=0
      while (nombres.length > 0) {
      let elemento = nombres.shift(); 
      resultado.push(`${elemento} ${con[index]}`)
      index ++;
      }
      return resultado
    }

function eliminarDuplicados(lista) {
    return Array.from(new Set(lista));
}

handler.command = /^(drivefolder)$/i
export default handler
