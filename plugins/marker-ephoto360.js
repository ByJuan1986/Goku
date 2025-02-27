let handler = async (m, { conn, args, command }) => { 
    let response = args.join(' ').split('|')
    if (!args[0]) return     await conn.sendMessage(m.chat, { text: `● _Ingrese el comando y escriba un texto sea nombre o cualquira para aplicar este efecto._\n\n• *Por ejemplo:*\n#${command} Daniel` }, m)
    try {    
    if (command == 'logohacker') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'aovwallpaper') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}

         if (command == 'link1') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://api.lolhuman.xyz/api/creator1/affect?apikey=${Key360}&img=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)} ///test
        
    if (command == 'logofreefire') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'meme1') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://api.lolhuman.xyz/api/meme4?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'meme2') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://api.lolhuman.xyz/api/creator/kannagen?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'boom') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/boom-comic?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'graffiticartoon') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/cartoon-graffiti?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'girlgamer') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/cute-girl-gamer?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'firework') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/firework-effect?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'cardchristmas') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/card-christmas?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'flowercard') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/flower-card?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
    
    if (command == 'gold') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/gold-effect?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'handlove') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/hand-love?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'heartcup') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/heart-cup?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'heartflashlight') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/heart-flashlight?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'birthdaycake') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/birthday-cake?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)} 

    if (command == 'birthdaycake2') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/birthday-cake10?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}

    if (command == 'birthdaycake3') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/birthday-cake2?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}

    if (command == 'facebooksilverplay') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/facebook-silver-play-button?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}

    if (command == 'facebooksilverplay2') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/facebook-gold-play-button?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}

    if (command == 'neonsantin') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/neon-satin?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}

    if (command == 'womenday') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/women-day?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
    
    if (command == 'summerysand') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/summerysand?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)} 
    
    if (command == 'wetglass') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/wet-glass?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}

    if (command == 'mylove') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/my-love?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
        
    if (command == 'pikachu') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/pikachu?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
      
    if (command == 'logochristmas') {
    await conn.sendMessage(m.chat, { text: `_Creando logo, espere un momento por favor..._` }, m)
    let res = `https://violetics.pw/api/ephoto360/christmas-snow?apikey=beta&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', '_Aqui tiene su logo._', m)}
      
    } catch {
    conn.sendMessage(m.chat, { text: `● _Ocurrio un error con el comando: *#${command}*_` }, m)
    }}
    handler.command = /^logohacker|logofreefire|meme1|meme2|aovwallpaper|link1|wetglass|sumerysand|womenday|batshalloween|neonsantin|facebooksilverplay|facebooksilverplay2|bear2|birthdaycake|birthdaycake2|birthdaycake3|boom|graffiticartoon|girlgamer|mylove|pikachu|firework|gold|handlove|heartcup|heartflashlight/i
    export default handler
