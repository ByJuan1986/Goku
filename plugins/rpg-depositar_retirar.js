import axios from "axios"  
import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command, conn, text}) => {
  
if (command == 'depositar') {
let depositar = `
● _Para depositar tus recursos en la cartera de guardados, puedes seguir estos pasos._
_Recuerda que debes de poner un numero valido y de cuantos recursos tengas._

• *Por ejemplo:*
#dep 50

● _Aqui tienes los demas recursos por si quieres depositarlos a la cartera de guardados._

*#dep* (${currency})
*#dep2* (${currency2})
*#dep3* (${currency3})
`
conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: depositar }, { quoted: m })
}

if (command == 'retirar') {
let retirar = `
● _Para retirar tus recursos en la cartera de guardados y ponerlos a tu perfil, sigue estos pasos._
_Recuerda que debes de poner un numero valido y de cuantos recursos tengas._

• *Por ejemplo:*
#ret 50

● _Aqui tienes los demas recursos por si quieres retirarlos de la cartera de guardados y ponerlos a tu perfil._

*#ret* (${currency})
*#ret2* (${currency2})
*#ret3* (${currency3})
`
conn.sendMessage(m.chat, { image: { url: mxImagens }, caption: retirar }, { quoted: m })
}   
} 
handler.command = ['depositar', 'retirar'] 
export default handler

