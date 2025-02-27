import {
	canLevelUp
} from '../lib/levelling.js'
export async function before(m, {
	conn
}) {
	let user = global.db.data.users[m.sender]
	if (!user.autolevelup)
		return !0
	let before = user.level * 1
	while (canLevelUp(user.level, user.exp, global.multiplier))
		user.level++
	user.role = global.rpg.role(user.level).name
	if (before !== user.level) {
		conn.sendMessage(m.chat, {
			text: `
🜲 *\`N U E V O N I V E L\`* 🜲
- *Nivel anterior:* ${before}
- *Tu actual nivel:* ${user.level}
- *Tu rango actual:* ${user.role}
`
		}, {
			quoted: m
		})

	}
}