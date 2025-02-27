let handler = async (m, { conn, isRowner }) => {
    const newDev = m.text.trim().split(' ').slice(1).join(' '); 

    if (!newDev) {
        return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba la nueva un texto para cambiar la descripcion del bot *( ${textoInfo} )*_` }, { quoted: m });
    }

    global.dev = newDev;

    conn.sendMessage(m.chat, { text: `✓ _¡Se ha cambiado la descripcion del bot anterior a *( ${newDev} )* con exito!_` }, { quoted: m });
};

handler.command = ['set_info']; 
handler.admin = true
handler.botAdmin = true

export default handler;
