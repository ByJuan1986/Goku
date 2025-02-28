import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = '𝐆𝐨𝐤𝐮𝐛𝐨𝐭'
let nombre2 = '𝐁𝐲 𝐉𝐮𝐚𝐧𝟏𝟗𝟖𝟔'
 
const s = [
'https://od.lk/s/NTZfMjUwMDI3NzFf/risa%2001.png',
'https://od.lk/s/NTZfMjUwMDI4MzFf/risa%2002.png',
'https://od.lk/s/NTZfMjUwMDI4MzJf/risa%2003.png',
'https://od.lk/s/NTZfMjUwMDMwNTdf/risa%2004.jpg',
'https://od.lk/s/NTZfMjUwMDI3NjFf/risa%2005.gif',
'https://od.lk/s/NTZfMjUwMDI3NzJf/risa%2006.png',
'https://od.lk/s/NTZfMjUzMzA3MDBf/risa%2007.jpg',
'https://od.lk/s/NTZfMjUzMzA3MDZf/risa%2008.jpeg',
'https://od.lk/s/NTZfMjUzMzA5NTRf/risa%2009.jpeg',
'https://od.lk/s/NTZfMjUzMzA5NTlf/risa%2010.jpg',
'https://od.lk/s/NTZfMjUzMzA5NzJf/risa%2011.gif',
'https://od.lk/s/NTZfMjUzMzA5Nzhf/risa%2012.jpg',
'https://od.lk/s/NTZfMjUzMzA5ODJf/risa%2013.jpg',
'https://od.lk/s/NTZfMjUzMzA5ODVf/risa%2014.jpeg',
'https://od.lk/s/NTZfMjUzMzA5OTFf/risa%2015.jpeg',
'https://od.lk/s/NTZfMjUzMzA5OTVf/risa%2016.jpeg',
'https://od.lk/s/NTZfMjUzMzEwMDJf/risa%2017.png',
'https://od.lk/s/NTZfMjUzMzEwMDlf/risa%2018.jpg',
'https://od.lk/s/NTZfMjU0NDYwMjlf/risa%2019.png',
'https://od.lk/s/NTZfMjUzMzkxNTNf/risa%2020.jpg',
'https://od.lk/s/NTZfMjUzMzkxNTRf/risa%2021.jpg',
'https://od.lk/s/NTZfMjUzMzkxNTVf/risa%2022.jpg',
'https://od.lk/s/NTZfMjUzMzkxNTZf/risa%2023.jpg',
'https://od.lk/s/NTZfMjUzMzkxNTdf/risa%2024.jpg',
'https://od.lk/s/NTZfMjUzMzkyMDRf/risa%2025.gif',
'https://od.lk/s/NTZfMjUzMzkxNThf/risa%2026.gif',
'https://od.lk/s/NTZfMjUzMzkxNTlf/risa%2027.jpg',
'https://od.lk/s/NTZfMjUzMzkxNjBf/risa%2028.gif',
'https://od.lk/s/NTZfMjUzMzkxNjFf/risa%2029.gif',
'https://od.lk/s/NTZfMjUzMzkxNjJf/risa%2030.gif',
'https://od.lk/s/NTZfMjUzMzkxNjNf/risa%2031.jpg',
'https://od.lk/s/NTZfMjUzMzkxNjRf/risa%2032.gif',
'https://od.lk/s/NTZfMjUzNDgwMDBf/risa%2033.gif',
'https://od.lk/s/NTZfMjUzNDgwMDZf/risa%2034.gif',
'https://od.lk/s/NTZfMjUzNDgwMTJf/risa%2035.gif',
'https://od.lk/s/NTZfMjUzNDgwMjhf/risa%2036.gif',
'https://od.lk/s/NTZfMjUzNDgwMjlf/risa%2037.gif',
'https://od.lk/s/NTZfMjUzNDgwMzBf/risa%2038.gif',
'https://od.lk/s/NTZfMjU0NDg2MTZf/risa%2039.png',
'https://od.lk/s/NTZfMjUzNDgwMzdf/risa%2040.gif',
'https://od.lk/s/NTZfMjUzNDgwMzlf/risa%2041.jpeg',
'https://od.lk/s/NTZfMjUzNDgwNDRf/risa%2042.jpg',
'https://od.lk/s/NTZfMjU0NDg2MTdf/risa%2043.png',
'https://od.lk/s/NTZfMjU0NDYwMTNf/risa%2044.jpg',
'https://od.lk/s/NTZfMjU0NDYwMTRf/risa%2045.jpg',
'https://od.lk/s/NTZfMjU3Nzk1Mjhf/risa%2046.png',
'https://od.lk/s/NTZfMjU3Nzk1Mjlf/risa%2047.png',
'https://od.lk/s/NTZfMjU3Nzk1MzBf/risa%2048.png',
'https://od.lk/s/NTZfMjU3Nzk1MzFf/risa%2049.png',
'https://od.lk/s/NTZfMjU3Nzk1MzJf/risa%2050.png'  
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: ceotg, thumbnail: perfilfoto}}}, { quoted: m })
}
handler.customPrefix = /risa|xd|😂|🤣|🤪/i 
handler.command = new RegExp
handler.exp = 50
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
