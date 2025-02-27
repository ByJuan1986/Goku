import {
	sticker
} from '../lib/sticker.js'
let handler = m => m
handler.before = async function(m) {
	let chat = db.data.chats[m.chat]
	let user = db.data.users[m.sender]
	if (chat.autosticker && m.isGroup) {
		let q = m
		let stiker = false
		let mime = (q.msg || q).mimetype || q.mediaType || ''
		if (/webp/g.test(mime)) return
		if (/image/g.test(mime)) {
			let img = await q.download?.()
			if (!img) return
			stiker = await sticker(img, false, wm, author)
		} else if (/video/g.test(mime)) {
			if (/video/g.test(mime))
				if ((q.msg || q).seconds > 10) return await conn.sendMessage(m.chat, {
					text: `● _El video enviado no debe de durar mas de 10 segundos, por favor recorte el video e intente de nuevo._`
				}, {
					quoted: m
				})
			let img = await q.download()
			if (!img) return
			stiker = await sticker(img, false, wm, author)
		} else if (m.text.split(/\n| /i)[0]) {
			if (isUrl(m.text)) stiker = await sticker(false, m.text.split(/\n| /i)[0], wm, author)
			else return
		}
		if (stiker) {
			await conn.sendFile(m.chat, stiker, null, {
				asSticker: true
			}, {
				quoted: m
			})
		}
	}
	return !0
}
export default handler
const isUrl = (text) => {
	return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'))
}