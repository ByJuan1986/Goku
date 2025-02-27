let handler = async (m, { conn }) => {
    const chats = global.db.data.chats;
    
   
    const isROwner = m.fromMe || global.owner?.includes(m.sender);
  
    if (/^\.chatsbn$/i.test(m.text)) {
     
      let bannedChats = Object.entries(chats)
        .filter(([id, data]) => data.isBanned)
        .map(([id, data]) => `${id} = ${data.name || 'Sin registro'}`);
      
      if (bannedChats.length === 0) {
        return conn.sendMessage(m.chat, { text: `● _No se han encontrado chats baneados, ingrese el comando mas tarde._` }, { quoted: m });
      }
      
      let message = `${bannedChats.join('\n')}`;
      return conn.sendMessage(m.chat, { text: `● _Aqui tienes la lista de chats baneados._\n- _Para desbanear, entra a los chats y usa *#chatsbx*_\n\n${messsge}` }, { quoted: m });
    }
  
    if (/^\.chatsbx$/i.test(m.text)) {
  
      for (let id in chats) {
        chats[id].isBanned = false;
      }
      return conn.sendMessage(m.chat, { text: `✓ _¡Todos los chats han sido desbaneados con exito!_` }, { quoted: m });
    }
  };

  handler.command = ['chatsbn', 'chatsbx'];
  handler.rowner = true;
  
  export default handler;
  