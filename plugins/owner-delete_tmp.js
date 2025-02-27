import { tmpdir } from 'os'
import path, { join } from 'path'
import {
readdirSync,
statSync,
unlinkSync,
existsSync,
readFileSync,
watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => { 
conn.sendMessage(m.chat, { text: `✓ _Archivos innecesarios de la carpeta tmp fueron eliminados con exito._` }, { quoted: m })
const tmp = [tmpdir(), join(__dirname, '../tmp')]
const filename = []
tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
return filename.map(file => {
const stats = statSync(file)
unlinkSync(file)
})} 
handler.command = /^(dtmp|borrartemp)$/i
handler.rowner = true
export default handler
