import fetch from 'node-fetch'

const isEnlace1 = /\b(?:https?:\/\/)?(?:www\.)?tiktok\.com(\/\S*)?/i
const isEnlace2 = /\b(?:https?:\/\/)?(?:www\.)?(youtube\.com|youtu\.be)(\/\S*)?/i
const isEnlace3 = /\b(?:https?:\/\/)?(?:www\.)?(telegram\.org|t\.me)(\/\S*)?/i
const isEnlace4 = /\b(?:https?:\/\/)?(?:www\.)?(facebook\.com|fb\.me|fb\.watch)(\/\S*)?/i
const isEnlace5 = /\b(?:https?:\/\/)?(?:www\.)?instagram\.com(\/\S*)?/i
const isEnlace6 = /\b(?:https?:\/\/)?(?:www\.)?(twitter\.com|x\.com)(\/\S*)?/i
const isEnlace7 = /\b(?:https?:\/\/)?(?:www\.)?(discord\.com|discord\.gg)(\/\S*)?/i
const isEnlace8 = /\b(?:https?:\/\/)?(?:www\.)?threads\.net(\/\S*)?/i
const isEnlace9 = /\b(?:https?:\/\/)?(?:www\.)?twitch\.tv(\/\S*)?/i


let handler = m => m
handler.before = async function(m, {
	conn,
	isAdmin,
	isBotAdmin,
	isOwner,
	isROwner
}) {
	if (!m.isGroup) return
	if (isAdmin || isOwner || m.fromMe || isROwner || !isBotAdmin) return

	//if (!isAdmin || !isOwner || !isROwner || m.fromMe || !isBotAdmin) return

	let chat = global.db.data.chats[m.chat]
	let bot = global.db.data.settings[this.user.jid] || {}
	let delet = m.key.participant
	let bang = m.key.id
	let toUser = `${m.sender.split("@")[0]}`
	let aa = toUser + '@s.whatsapp.net'

	const isEnviado1 = isEnlace1.exec(m.text)
	const isEnviado2 = isEnlace2.exec(m.text)
	const isEnviado3 = isEnlace3.exec(m.text)
	const isEnviado4 = isEnlace4.exec(m.text)
	const isEnviado5 = isEnlace5.exec(m.text)
	const isEnviado6 = isEnlace6.exec(m.text)
	const isEnviado7 = isEnlace7.exec(m.text)
	const isEnviado8 = isEnlace8.exec(m.text)
	const isEnviado9 = isEnlace9.exec(m.text)

	if (chat.notiktok && isEnviado1) {
		if (chat.delete) return conn.sendMessage(m.chat, {
			text: `● _Por favor, desactive la anti eliminacion para evitar que el bot envie los mensajes eliminados._`
		}, {
			quoted: m
		})
		if (isBotAdmin) {
			await conn.reply(m.chat, `● _Hola participante @${toUser}, acabas de enviar un enlace de *TikTok* a este chat._\n- _Seras eliminado de inmediato por incumplir las reglas establecidas._`, null, {
				mentions: [aa]
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

	if (chat.noyoutube && isEnviado2) {
		if (chat.delete) return conn.sendMessage(m.chat, {
			text: `● _Por favor, desactive la anti eliminacion para evitar que el bot envie los mensajes eliminados._`
		}, {
			quoted: m
		})
		if (isBotAdmin) {
			await conn.reply(m.chat, `● _Hola participante @${toUser}, acabas de enviar un enlace de *YouTube* a este chat._\n- _Seras eliminado de inmediato por incumplir las reglas establecidas._`, null, {
				mentions: [aa]
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

	if (chat.notelegram && isEnviado3) {
		if (chat.delete) return conn.sendMessage(m.chat, {
			text: `● _Por favor, desactive la anti eliminacion para evitar que el bot envie los mensajes eliminados._`
		}, {
			quoted: m
		})
		if (isBotAdmin) {
			await conn.reply(m.chat, `● _Hola participante @${toUser}, acabas de enviar un enlace de *Telegram* a este chat._\n- _Seras eliminado de inmediato por incumplir las reglas establecidas._`, null, {
				mentions: [aa]
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

	if (chat.nofacebook && isEnviado4) {
		if (chat.delete) return conn.sendMessage(m.chat, {
			text: `● _Por favor, desactive la anti eliminacion para evitar que el bot envie los mensajes eliminados._`
		}, {
			quoted: m
		})
		if (isBotAdmin) {
			await conn.reply(m.chat, `● _Hola participante @${toUser}, acabas de enviar un enlace de *Facebook* a este chat._\n- _Seras eliminado de inmediato por incumplir las reglas establecidas._`, null, {
				mentions: [aa]
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

	if (chat.noinstagram && isEnviado5) {
		if (chat.delete) return conn.sendMessage(m.chat, {
			text: `● _Por favor, desactive la anti eliminacion para evitar que el bot envie los mensajes eliminados._`
		}, {
			quoted: m
		})
		if (isBotAdmin) {
			await conn.reply(m.chat, `● _Hola participante @${toUser}, acabas de enviar un enlace de *Instagram* a este chat._\n- _Seras eliminado de inmediato por incumplir las reglas establecidas._`, null, {
				mentions: [aa]
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

	if (chat.notwitter && isEnviado6) {
		if (chat.delete) return conn.sendMessage(m.chat, {
			text: `● _Por favor, desactive la anti eliminacion para evitar que el bot envie los mensajes eliminados._`
		}, {
			quoted: m
		})
		if (isBotAdmin) {
			await conn.reply(m.chat, `● _Hola participante @${toUser}, acabas de enviar un enlace de *Twitter* a este chat._\n- _Seras eliminado de inmediato por incumplir las reglas establecidas._`, null, {
				mentions: [aa]
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

	if (chat.nodiscord && isEnviado7) {
		if (chat.delete) return conn.sendMessage(m.chat, {
			text: `● _Por favor, desactive la anti eliminacion para evitar que el bot envie los mensajes eliminados._`
		}, {
			quoted: m
		})
		if (isBotAdmin) {
			await conn.reply(m.chat, `● _Hola participante @${toUser}, acabas de enviar un enlace de *Discord* a este chat._\n- _Seras eliminado de inmediato por incumplir las reglas establecidas._`, null, {
				mentions: [aa]
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

	if (chat.nothreads && isEnviado8) {
		if (chat.delete) return conn.sendMessage(m.chat, {
			text: `● _Por favor, desactive la anti eliminacion para evitar que el bot envie los mensajes eliminados._`
		}, {
			quoted: m
		})
		if (isBotAdmin) {
			await conn.reply(m.chat, `● _Hola participante @${toUser}, acabas de enviar un enlace de *Threads* a este chat._\n- _Seras eliminado de inmediato por incumplir las reglas establecidas._`, null, {
				mentions: [aa]
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

	if (chat.notwitch && isEnviado9) {
		if (chat.delete) return conn.sendMessage(m.chat, {
			text: `● _Por favor, desactive la anti eliminacion para evitar que el bot envie los mensajes eliminados._`
		}, {
			quoted: m
		})
		if (isBotAdmin) {
			await conn.reply(m.chat, `● _Hola participante @${toUser}, acabas de enviar un enlace de *Twitch* a este chat._\n- _Seras eliminado de inmediato por incumplir las reglas establecidas._`, null, {
				mentions: [aa]
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