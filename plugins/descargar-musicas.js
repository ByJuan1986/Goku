import axios from 'axios'
let handler = async (m,{ command, args, text, usedPrefix}) => {
if (!text) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y escriba el nombre de la cancion que desea buscar._\n\n• *Por ejemplo:*\n#${command} Stereo love version TikTok`, { quoted: m })
    try{
        if(command.toLowerCase() !=="soundcloudr"){
            let response = await axios.get(`https://m.soundcloud.com/search/sounds?q=${text}`);
            let data=response.data
            let regex = /(?<="permalink_url":")[^"]*/g;
            let urls = data.match(regex);
            
            let regex2 = /(?<="permalink":")[^"]*/g
            let nombres = data.match(regex2);
            
            
            let listSections = [];
            for (let index = 0; index< urls.length; index++) {	
                let counts = urls[index].split('/').length - 1;
                if(counts>3){
                    listSections.push({
                        rows: [
                            {
                                header: `${nombres[index]}`,
                                title: `Descargar.\n`,
                                description: `GOKU : SCLOUD\n`, 
                                id: `${usedPrefix}scloud ${urls[index]}`
                            }
                        ]
                    });
                }
            }
        
        return await conn.sendList(m.chat, `• *RESULTADOS ENCONTRADOS* •\n`, `- Ingrese el boton de *Ver Lista* para ver la lista de musicas.`, `Ver Lista`, listSections, m);
        }
           
        let dddata = await axios.get(`https://btch.us.kg/soundcloud?url=${text}`)
        let ddlink=dddata.data.result.url
        let ddname=dddata.data.result.title
        let portada=dddata.data.result.imageURL
        await delay(2000)
        conn.sendMessage(m.chat, {image: {url: portada}, caption: `Enviando musica, espere un momento...`}, {quoted: m});
        await delay(15000)
        conn.sendMessage(m.chat, { audio: { url: ddlink }, fileName: `${ddname}`,mimetype: 'audio/mpeg'},{ quoted: m })   
    }catch(e){
    return conn.sendMessage(m.chat, {text: `✎ _Ocurrio un error con el comando: *#${command}*_`, { quoted: m })
    }}

handler.command = /^(musicas)$/i
export default handler

const delay = time => new Promise(res => setTimeout(res, time))
