//Cuando el usuario no le queda mas tiempo de ser premium, el mensaje sera automático una vez que el envie un Mensaje.

let handler = m => m
export async function before(m) {
	let user = global.db.data.users[m.sender]
	if (m.chat.endsWith('broadcast')) return
	if (user.premiumTime != 0 && user.premium) {
		if (new Date() * 1 >= user.premiumTime) {
			await m.reply(`● _Hola_ @${m.sender.split`@`[0]}, _tu tiempo como usuario premium se ha terminado._\n- _Puedes solicitar de nuevo una compra para seguir siendo un usuario premium._`, false, {
				mentions: [m.sender]
			})
			user.premiumTime = 0
			user.premium = false
		}
	}
}