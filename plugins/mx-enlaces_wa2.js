let linkRegex = /\b((https?:\/\/|www\.)?[\w-]+\.[\w-]+(?:\.[\w-]+)*(\/[\w\.\-\/]*)?)\b/i
let handler = m => m
handler.before = async function(m, {
	isAdmin,
	isBotAdmin,
	isOwner,
	isROwner,
	participants
}) {
	if (!m.isGroup) return
	if (isAdmin || isOwner || m.fromMe || isROwner || !isBotAdmin) return

	let chat = global.db.data.chats[m.chat]
	let delet = m.key.participant
	let bang = m.key.id
	const user = `@${m.sender.split`@`[0]}`
	let bot = global.db.data.settings[this.user.jid] || {}
	const isGroupLink = linkRegex.exec(m.text)
	if (chat.antiLink2 && isGroupLink !== null) {
		if (chat.delete) return conn.sendMessage(m.chat, {
			text: `● _Favor de desactivar la anti eliminacion de mensajes para evitar que el bot envie mensajes eliminados..._`
		}, {
			quoted: m
		})
		if (isBotAdmin) {
			const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
			if (m.text.includes(linkThisGroup)) return !0
		}
		if (isBotAdmin) {
			await conn.sendMessage(m.chat, {
				text: `● _Hola participante, acabas de enviar un enlace sospechoso, seras eliminado de inmediato._\n\n_Favor de leer las reglas establecidas en este grupo para evitar una eliminacion._`,
				mentions: [m.sender]
			}, {
				quoted: m
			})
			await conn.sendMessage(m.chat, {
				delete: {
					remoteJid: m.chat,
					fromMe: false,
					id: bang,
					participant: delet
				}
			})
			let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			if (remove[0].status === '404') return
		}
	}
	return !0
}
export default handler