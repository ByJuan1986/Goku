import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
const owner = 'ByJuan1986';
const repo = 'Goku';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
      const { sha, commit: { message }, html_url } = response.data[0]

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha
        previousUpdatedAt = message
    conn.sendMessage(m.chat, { text: `- _El repositorio fue actualizado con exito a una version mas reciente._` }, { quoted: m })
   } 
  } catch (error) {
    await conn.sendMessage(m.chat, { text: `- _Ocurrio un error con el comando: *#${command}*_` }, { quoted: m })
   }
  }
 setInterval(checkRepoUpdates, 60000)
}
handler.command = /^(updatll)/i
handler.owner = true
export default handler
