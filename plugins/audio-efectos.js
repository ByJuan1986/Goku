import {
	unlinkSync,
	readFileSync
} from 'fs'
import {
	join
} from 'path'
import {
	exec
} from 'child_process'
let handler = async (m, {
	conn,
	args,
	__dirname,
	usedPrefix,
	command
}) => {
	try {
		let q = m.quoted ? m.quoted : m
		let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
		let set
		if (/audio1/.test(command)) set = '-af equalizer=f=94:width_type=o:width=2:g=30'
		if (/audio2/.test(command)) set = '-af acrusher=.1:1:64:0:log'
		if (/audio3/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
		if (/audio4/.test(command)) set = '-af volume=12'
		if (/audio5/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
		if (/audio6/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
		if (/audio7/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
		if (/audio8/.test(command)) set = '-filter_complex "areverse"'
		if (/audio9/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
		if (/audio10/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
		if (/audio11/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
		if (/audio12/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
		if (/audio/.test(mime)) {
			let ran = getRandom('.mp3')
			let filename = join(__dirname, '../tmp/' + ran)
			let media = await q.download(true)
			exec(`ffmpeg -i ${media} ${set} ${filename}`, async (err, stderr, stdout) => {
				await unlinkSync(media)
				if (err) return conn.sendMessage(m.chat, {
					text: `⪩ _Ocurrio un error, recuerda responder a una nota de voz o audio mp3 para aplicar el efecto, no funciona para videos o imagenes.`
				}, {
					quoted: m
				})
				let buff = await readFileSync(filename)
				conn.sendFile(m.chat, buff, ran, null, m, true, {
					type: 'audioMessage',
					ptt: true
				})
			})
		} else return conn.sendMessage(m.chat, {
			text: `⪩ _Ingrese el comando y responda a una nota de voz o audio mp3 para aplicar este efecto.`
		}, {
			quoted: m
		})
	} catch (e) {
		return conn.sendMessage(m.chat, {
			text: `⪩ _Ocurrio un error con el comando: *#${command}*_`
		}, {
			quoted: m
		})
	}
}

handler.command = /^(audio1|audio2|audio3|audio4|audio5|audio6|audio7|audio8|audio9|audio10|audio11|audio12)$/i
export default handler

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}