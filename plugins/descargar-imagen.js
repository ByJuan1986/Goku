import {
	googleImage
} from '@bochilteam/scraper'
let handler = async (m, {
			conn,
			text,
			usedPrefix,
			command
		}) => {
			if (!text) return conn.sendMessage(m.chat, {
							text: `¢ _Ingrese el comando y escriba cualquier cosa para buscar una imagen._\n\n? *Por ejemplo:*\n#imagen Arboles`,
							{
								quoted: m
							}) const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito', 'pussy', 'hentai', 'pene', 'co単o', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cepesito', 'hot', 'buceta', 'xxx', 'Violet Myllers', 'Violet Myllers pussy', 'Violet Myllers desnuda', 'Violet Myllers sin ropa', 'Violet Myllers culo', 'Violet Myllers vagina', 'Pornograf鱈a', 'Pornograf鱈a infantil', 'ni単a desnuda', 'ni単as desnudas', 'ni単a pussy', 'ni単a pack', 'ni単a culo', 'ni単a sin ropa', 'ni単a siendo abusada', 'ni単a siendo abusada sexualmente', 'ni単a cogiendo', 'ni単a fototeta', 'ni単a vagina', 'hero Boku no pico', 'Mia Khalifa cogiendo', 'Mia Khalifa sin ropa', 'Mia Khalifa comiendo polla', 'Mia Khalifa desnuda']
						if (prohibited.some(word => m.text.toLowerCase().includes(word))) return conn.sendMessage(m.chat, {
										text: `? _Lo siento, ese tipo de pedidos no esta autorizado, lea las politicas de seguridad de MBMD._`,
										{
											quoted: m
										}) try {
										const res = await googleImage(text)
										let image = res.getRandom()
										let link = image
										conn.sendMessage(m.chat, { image: { url: imagen }, caption: 'Aqui tiene la imagen.' }, { quoted: m })
										//conn.sendFile(m.chat, link, 'error.jpg', `${text}`, { quoted: m })
									} catch (e) {
										conn.sendMessage(m.chat, {
												text: `? _Ocurrio un error con el comando: *#${command}*_`,
												{
													quoted: m
												}) console.log(e)
										}
									}
									handler.command = /^(imagen)$/i
									export default handler