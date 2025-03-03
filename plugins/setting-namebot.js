let handler = async (m, { conn, isRowner }) => {
    const newName = m.text.trim().split(' ').slice(1).join(' ');
  
   
    if (!newName) {
      return conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba un nuevo nombre para cambiar el nombre del bot *( ${botname} )*` }, { quoted: m });
    }
  
   
    global.botname = newName;  
  
    
    conn.sendMessage(m.chat, { text: `✓ _¡Se ha cambiado el nombre del bot anterior a *${newName}* con exito!_` }, { quoted: m });
  
  
  };
  
 
  handler.command = ['setname']; 
  handler.admin = true
  handler.botAdmin = true

  export default handler;
  
