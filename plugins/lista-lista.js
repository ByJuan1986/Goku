let handler = async (m, { conn, command, text, usedPrefix }) => {
let listas = `✶ *_Lista de usuarios y chats._*
- _Para ver las demas listas, pueden comenzar a usar los comandos de la siguiente manera:._

> ✿ *Usuarios y chats baneados:*
*\`#list_baners\`*

> ✿ *Usuarios premium:*
*\`#list_prems\`*

> ✿ *Usuarios bloqueados:*
*\`#list_blocks\`*

> ✿ *Usuarios advertidos:*
*\`#list_warn\`*`
}
handler.command = /^listas|lists?$/i
export default handler
