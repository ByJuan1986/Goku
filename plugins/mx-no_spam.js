const userSpamData = {}
let handler = m => m
handler.before = async function(m, {
	conn,
	isAdmin,
	isBotAdmin,
	isOwner,
	isROwner,
	isPrems
}) {
	if (m.chat === "120363368769201105@newsletter") return
	const chat = global.db.data.chats[m.chat]
	const bot = global.db.data.settings[conn.user.jid] || {}
	if (m.fromMe) return
	if (!bot.antiSpam) return
	if (m.isGroup) {
		if (chat.modoadmin) return
		if (!isBotAdmin) return
		if (isOwner || isROwner || isAdmin || isPrems) return
	} else {
		if (isOwner || isROwner || isPrems) return
	}

	let user = global.db.data.users[m.sender]
	const sender = m.sender
	const currentTime = new Date().getTime()
	const timeWindow = 5000
	const messageLimit = 10

	let time, time2, time3, mensaje, motive
	time = 30000
	time2 = 60000
	time3 = 120000

	if (!(sender in userSpamData)) {
		userSpamData[sender] = {
			lastMessageTime: currentTime,
			messageCount: 1,
			antiBan: 0,
			message: 0,
			message2: 0,
			message3: 0,
		}
	} else {
		const userData = userSpamData[sender]
		const timeDifference = currentTime - userData.lastMessageTime

		if (userData.antiBan === 1) {
			if (userData.message < 1) {
				userData.message++
				await conn.reply(m.chat, `● _Hola participante, le pedimos amablemente que no haga spam para evitar ser eliminado._`, m, {
					mentions: [m.sender]
				})
				user.messageSpam = motive
			}
		} else if (userData.antiBan === 2) {
			if (userData.message2 < 1) {
				userData.message2++
				await conn.reply(m.chat, `● _Hola participante, por segunda vez le recordamos que no haga spam para evitar ser eliminado._`, m, {
					mentions: [m.sender]
				})
				user.messageSpam = motive
			}
		} else if (userData.antiBan === 3) {
			if (userData.message3 < 1) {
				userData.message3++
				await conn.reply(m.chat, `● _Hola participante, este es el ultimo aviso, seras eliminado de inmediato por mensajes instantes._`, m, {
					mentions: [m.sender]
				})
				user.messageSpam = motive
				await conn.groupParticipantsUpdate(m.chat, [sender], 'remove')
			}
		}

		if (timeDifference <= timeWindow) {
			userData.messageCount += 1

			if (userData.messageCount >= messageLimit) {
				if (userData.antiBan > 2) return
				await conn.reply(m.chat, `Hola participante, le recordamos que por favor no haga spam de mensajes instantes.\nEvite ser eliminado para continuar con nosotros en esta comunidad. :)`, m, {
					mentions: [m.sender]
				})
				user.banned = true
				userData.antiBan++
				userData.messageCount = 1

				if (userData.antiBan === 1) {
					setTimeout(() => {
						if (userData.antiBan === 1) {
							userData.antiBan = 0
							userData.message = 0
							userData.message2 = 0
							userData.message3 = 0
							user.antispam = 0
							motive = 0
							user.messageSpam = 0
							user.banned = false
						}
					}, time)

				} else if (userData.antiBan === 2) {
					setTimeout(() => {
						if (userData.antiBan === 2) {
							userData.antiBan = 0
							userData.message = 0
							userData.message2 = 0
							userData.message3 = 0
							user.antispam = 0
							motive = 0
							user.messageSpam = 0
							user.banned = false
						}
					}, time2)

				} else if (userData.antiBan === 3) {
					setTimeout(() => {
						if (userData.antiBan === 3) {
							userData.antiBan = 0
							userData.message = 0
							userData.message2 = 0
							userData.message3 = 0
							user.antispam = 0
							motive = 0
							user.messageSpam = 0
							user.banned = false
						}
					}, time3)

				}
			}
		} else {
			if (timeDifference >= 2000) {
				userData.messageCount = 1
			}
		}
		userData.lastMessageTime = currentTime
	}
}

export default handler