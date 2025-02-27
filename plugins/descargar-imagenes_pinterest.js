import axios from 'axios'
let handler = async (m, {
			conn,
			text,
			usedPrefix,
			command
		}) => {
			if (!text) return conn.sendMessage(m.chat, {
							text: `● _Ingrese el comando y escriba cualquier cosa para buscarlo en *Pinterest*._\n\n• *Por ejemplo:*\n#${command} Messi`,
							{
								quoted: m
							}) try {
							let {
								data: response
							} = await axios.get(`${apis}/search/pinterestv2?text=${encodeURIComponent(text)}`);
							if (!response.status || !response.data || response.data.length === 0) return conn.sendMessage(m.chat, {
									text: `✎ _No se han encontrado resultados de la busqueda: *${text}*_`,
									{
										quoted: m
									});
								let searchResults = response.data;
								let selectedResults = searchResults.slice(0, 6);
								let messages = selectedResults.map(result => [
									result.description || null, `*Pinterest:* @${result.username}`, result.image
								]); await conn.sendCarousel(m.chat, `• *PINTEREST : RESULTADO* •\n- Busqueda: *${text}*`, "Imagenes desde MBMD.", messages, m);
							}
							catch (e) {
								await conn.sendMessage(m.chat, {
										text: `● _Ocurrio un error con el comando: *#${command}*_`,
										{
											quoted: m
										}) console.log(e)
								}
							}
							handler.command = ["pinterest", "pints"]
							export default handler