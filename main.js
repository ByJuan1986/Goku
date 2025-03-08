process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1'
import './config.js' 
import './plugins/_juan.js'
import { createRequire } from 'module'
import path, { join } from 'path'
import {fileURLToPath, pathToFileURL} from 'url'
import { platform } from 'process'
import * as ws from 'ws'
import fs, { watchFile, unwatchFile, writeFileSync, readdirSync, statSync, unlinkSync, existsSync, readFileSync, copyFileSync, watch, rmSync, readdir, stat, mkdirSync, rename } from 'fs'
import yargs from 'yargs'
import { spawn } from 'child_process'
import lodash from 'lodash'
import chalk from 'chalk'
import syntaxerror from 'syntax-error'
import { format } from 'util'
import pino from 'pino'
import Pino from 'pino'
import { Boom } from '@hapi/boom'
import { makeWASocket, protoType, serialize } from './lib/simple.js'
import {Low, JSONFile} from 'lowdb'
import PQueue from 'p-queue'
import store from './lib/store.js'
import readline from 'readline'
import NodeCache from 'node-cache' 
import { mdmxBots } from './plugins/_mxrent.js';
import pkg from 'google-libphonenumber'
const { PhoneNumberUtil } = pkg
const phoneUtil = PhoneNumberUtil.getInstance()
const { makeInMemoryStore, DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore } = await import('@whiskeysockets/baileys')
const { CONNECTING } = ws
const { chain } = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000
protoType()
serialize()
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') {
  return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString();
}; global.__dirname = function dirname(pathURL) {
  return path.dirname(global.__filename(pathURL, true));
}; global.__require = function require(dir = import.meta.url) {
  return createRequire(dir);
};
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '')
global.timestamp = { start: new Date }
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@').replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&') + ']')

//news
const databasePath = path.join(__dirname, 'database');
if (!fs.existsSync(databasePath)) fs.mkdirSync(databasePath);

const paths = {
    users: path.join(databasePath, 'users'),
    chats: path.join(databasePath, 'chats'),
    settings: path.join(databasePath, 'settings'),
    msgs: path.join(databasePath, 'msgs'),
    sticker: path.join(databasePath, 'sticker'),
    stats: path.join(databasePath, 'stats'),
};

Object.values(paths).forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
});

const queue = new PQueue({ concurrency: 5 });

global.db = {
    data: {
        users: {},
        chats: {},
        settings: {},
        msgs: {},
        sticker: {},
        stats: {},
    },
};

function getFilePath(category, id) {
return path.join(paths[category], `${id}.json`);
}

async function readFile(category, id) {
    const filePath = getFilePath(category, id);
    const db = new Low(new JSONFile(filePath));
    await db.read();
    db.data = db.data || {};
    return db.data;
}

async function writeFile(category, id, data) {
    const filePath = getFilePath(category, id);
    const db = new Low(new JSONFile(filePath));
    await db.read();
    db.data = { ...db.data, ...data };    
    await db.write();
}

global.db.readData = async function (category, id) {
    if (!global.db.data[category][id]) {
        const data = await queue.add(() => readFile(category, id));
        global.db.data[category][id] = data;
    }
    return global.db.data[category][id];
};

global.db.writeData = async function (category, id, data) {
    global.db.data[category][id] = { ...global.db.data[category][id], ...data };
    await queue.add(() => writeFile(category, id, global.db.data[category][id]));
};

global.db.loadDatabase = async function () {
    const categories = ['users', 'chats', 'settings', 'msgs', 'sticker', 'stats'];
    const loadPromises = [];

    for (const category of categories) {
        const files = fs.readdirSync(paths[category]);
        for (const file of files) {
            const id = path.basename(file, '.json');
            if (category === 'users' && (id.includes('@newsletter') || id.includes('lid'))) continue;
            if (category === 'chats' && id.includes('@newsletter')) continue;

            loadPromises.push(
                queue.add(() => readFile(category, id))
                    .then(data => {
                        global.db.data[category][id] = data;
                    })
                    .catch(err => console.error(`Error cargando ${category}/${id}:`, err))
            );
        }
    }

    await Promise.all(loadPromises);
    console.log('Base de datos cargada');
};

global.db.save = async function () {
    const categories = ['users', 'chats', 'settings', 'msgs', 'sticker', 'stats'];

    for (const category of categories) {
        for (const [id, data] of Object.entries(global.db.data[category])) {
            if (Object.keys(data).length > 0) {
                if (category === 'users' && (id.includes('@newsletter') || id.includes('lid'))) continue;
                if (category === 'chats' && id.includes('@newsletter')) continue;

                await queue.add(() => writeFile(category, id, data));                
            }
        }
    }
};

global.db.loadDatabase().then(() => {
}).catch(err => console.error(err));


/* ------------------------------------------------*/

global.creds = 'creds.json'
global.authFile = 'MdmxSesion'
global.authFileJB  = 'MdmxDirector'
global.rutaBot = join(__dirname, authFile)
global.rutaJadiBot = join(__dirname, authFileJB)
const respaldoDir = join(__dirname, 'BackupSession');
const credsFile = join(global.rutaBot, global.creds);
const backupFile = join(respaldoDir, global.creds);

if (!fs.existsSync(rutaJadiBot)) {
fs.mkdirSync(rutaJadiBot)}

if (!fs.existsSync(respaldoDir)) fs.mkdirSync(respaldoDir);

const {state, saveState, saveCreds} = await useMultiFileAuthState(global.authFile)
const msgRetryCounterMap = new Map();
const msgRetryCounterCache = new NodeCache({ stdTTL: 0, checkperiod: 0 });
const userDevicesCache = new NodeCache({ stdTTL: 0, checkperiod: 0 });
const {version} = await fetchLatestBaileysVersion()
let phoneNumber = global.botNumberCode
const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")
let rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
terminal: true,
})

const question = (texto) => {
rl.clearLine(rl.input, 0)
return new Promise((resolver) => {
rl.question(texto, (respuesta) => {
rl.clearLine(rl.input, 0)
resolver(respuesta.trim())
})})
}

let opcion
if (methodCodeQR) {
opcion = '1'
}
if (!methodCodeQR && !methodCode && !fs.existsSync(`./${authFile}/creds.json`)) {
do {
opcion = await question(`
┌─────────────────
│${chalk.greenBright('SELECCIONE UNA OPCION')}
└─────────────────
❒ ${chalk.greenBright('1 :')} ${chalk.blueBright('Escanear un codigo QR.')}
❒ ${chalk.greenBright('2 :')} ${chalk.blueBright('Vincular con codigo de 8 digitos.')}
\n${chalk.bold.greenBright('---> ')}`)
if (!/^[1-2]$/.test(opcion)) {
console.log(chalk.bold.redBright('ERROR: Solo puedes usar un numero, nada de letras o simbolos.'))
}} while (opcion !== '1' && opcion !== '2' || fs.existsSync(`./${authFile}/creds.json`))
}

const filterStrings = [
"Q2xvc2luZyBzdGFsZSBvcGVu", // "Closing stable open"
"Q2xvc2luZyBvcGVuIHNlc3Npb24=", // "Closing open session"
"RmFpbGVkIHRvIGRlY3J5cHQ=", // "Failed to decrypt"
"U2Vzc2lvbiBlcnJvcg==", // "Session error"
"RXJyb3I6IEJhZCBNQUM=", // "Error: Bad MAC" 
"RGVjcnlwdGVkIG1lc3NhZ2U=" // "Decrypted message" 
]


console.info = () => {} 
console.debug = () => {} 
['log', 'warn', 'error'].forEach(methodName => redefineConsoleMethod(methodName, filterStrings))
const connectionOptions = {
logger: pino({ level: "fatal" }),
printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
mobile: MethodMobile, 
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
},
browser: opcion == '1' ? ['GataBot-MD', 'Edge', '20.0.04'] : methodCodeQR ? ['MDMX', 'Edge', '20.0.04'] : ["Ubuntu", "Chrome", "20.0.04"],
version: version,
generateHighQualityLinkPreview: true
};
    
global.conn = makeWASocket(connectionOptions)

if (!fs.existsSync(`./${authFile}/creds.json`)) {
if (opcion === '2' || methodCode) {
opcion = '2'
if (!conn.authState.creds.registered) {
let addNumber
if (!!phoneNumber) {
addNumber = phoneNumber.replace(/[^0-9]/g, '')
} else {
do {
phoneNumber = await question(chalk.bgBlack(chalk.bold.greenBright('(ACCESS): Ingrese un numero de WhatsApp completo y todo junto con el cual se vinculara.\nPor ejemplo: +549387827372\n')))
phoneNumber = phoneNumber.replace(/\D/g,'')
if (!phoneNumber.startsWith('+')) {
phoneNumber = `+${phoneNumber}`
}
} while (!await isValidPhoneNumber(phoneNumber))
rl.close()
addNumber = phoneNumber.replace(/\D/g, '')
setTimeout(async () => {
let codeBot = await conn.requestPairingCode(addNumber)
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot
console.log(chalk.bold.white(chalk.bgGreen('CODIGO:')), chalk.bold.white(chalk.white(codeBot)))
}, 2000)
}}}
}

conn.isInit = false
conn.well = false

if (!opts['test']) {
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.save();
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', "MdmxDirector"], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '2', '-type', 'f', '-delete'])))}, 30 * 1000)}

if (opts['server']) (await import('./server.js')).default(global.conn, PORT)

async function getMessage(key) {
if (store) {
} return {
conversation: 'SimpleBot',
}}

//respaldo de la sesión "MdmxSesion"
const backupCreds = () => {
if (fs.existsSync(credsFile)) {
fs.copyFileSync(credsFile, backupFile);
console.log(`(ACCESS): Se ha creado un respaldo en ${backupFile} exitosamente.`);
} else {
console.log('(ERROR): No se ha encontrado el archivo creds.json para crear un respaldo...');
}};

const restoreCreds = () => {
if (fs.existsSync(credsFile)) {
fs.copyFileSync(backupFile, credsFile);
console.log(`(ACCESS) El archivo creds.json ha sido respaldado exitosamente.`);
} else if (fs.existsSync(backupFile)) {
fs.copyFileSync(backupFile, credsFile);
console.log(`(ACCESS) Se ha retaurado el archivo creds.json en el respaldo exitosamente.`);
} else {
console.log('(RARE): Ocurrio un error desconocido, no se encontro el archivo creds.json ni el archivo de respaldo.');
}};

setInterval(async () => {
await backupCreds();
console.log('(ACCESS): Se ha realizado un respaldo afortunado con exito.');
}, 5 * 60 * 1000);

async function connectionUpdate(update) {  
const {connection, lastDisconnect, isNewLogin} = update
global.stopped = connection
if (isNewLogin) conn.isInit = true
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
await global.reloadHandler(true).catch(console.error)
//console.log(await global.reloadHandler(true).catch(console.error));
global.timestamp.connect = new Date
}
if (global.db.data == null) loadDatabase()
if (update.qr != 0 && update.qr != undefined || methodCodeQR) {
if (opcion == '1' || methodCodeQR) {
console.log(chalk.bold.green('(ACCESS): Escanee el codigo QR para vincular su numero de WhatsApp, el codigo expira en 60 segundos...'))}
}
if (connection == 'open') {
console.log(chalk.bold.greenBright('(ACCESS): Conexion con exito a WhatsApp, puede probar entrando a un chat y ver si responde las respuestas.'))
await joinChannels(conn)}
let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
if (connection === 'close') {
if (reason === DisconnectReason.badSession) {
console.log(chalk.bold.cyanBright(`(ERROR): Se ha detectado un error para iniciar sesion, borre la carpeta ${authFile} para volver a pedir codigo QR o Codigo de 8 digitos.`))
} else if (reason === DisconnectReason.connectionClosed) {
console.log(chalk.bold.yellowBright('(NOTIFY): Se ha cerrado la conexion, se intentara reconectar, de lo contrario reinicie el servidor.'))
restoreCreds();
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.connectionLost) {
console.log(chalk.bold.redBright('(ERROR): Se ha perdido la conexion con el numero vinculado, se intentara vincular, de lo contrario reinicie el servidor.'))
restoreCreds();
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(chalk.bold.yellowBright('(WARNING): El numero ha vinculado otro terminal desconocido, borre esa sesion para evitar errores en esta sesion vinculada.'))
} else if (reason === DisconnectReason.loggedOut) {
console.log(chalk.bold.redBright(`(ERROR): Se ha detectado un error para iniciar sesion, borre la carpeta ${authFile} para volver a pedir codigo QR o Codigo de 8 digitos.`))
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.restartRequired) {
console.log(chalk.bold.cyanBright('(RARE): Parece que se ha reiniciado los datos de la vinculacion, esto puede causar algunos errores, reconectando servicios...'))
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.timedOut) {
console.log(chalk.bold.redBright('(ERROR): El tiempo para vincular el dispositivo ha caducado, no se hayo ninguna respuesta, intentalo de nuevo mas tarde.'))
await global.reloadHandler(true).catch(console.error) //process.send('reset')
} else {
console.log(chalk.bold.redBright('(WARNING): Razon de desconexion desconocida, se ha registrado un error desconocido, consulta con el soporte tegnico.'))
}}
}
process.on('uncaughtException', console.error);


let isInit = true;
let handler = await import('./handler.js');
global.reloadHandler = async function(restatConn) {
try {
const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error);
if (Object.keys(Handler || {}).length) handler = Handler;
} catch (e) {
console.error(e);
}
if (restatConn) {
const oldChats = global.conn.chats;
try {
global.conn.ws.close();
} catch { }
conn.ev.removeAllListeners();
global.conn = makeWASocket(connectionOptions, {chats: oldChats});
isInit = true;
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler);
conn.ev.off('group-participants.update', conn.participantsUpdate);
conn.ev.off('groups.update', conn.groupsUpdate);
conn.ev.off('message.delete', conn.onDelete);
conn.ev.off('call', conn.onCall);
conn.ev.off('connection.update', conn.connectionUpdate);
conn.ev.off('creds.update', conn.credsUpdate);
}

conn.welcome = `╭─• ≻ *¡¡¡BIENVENIDO!!!*\n╰• _¡Nos alegra que hayas entrado aqui!_\n\n*Nuevo:* ➛ @user\n\n*Nombre grupal:* ➛ @subject\n\n*\`REGLAS:\`*\n${String.fromCharCode(8206).repeat(850)}\n@desc`
conn.bye = `╭─• ≻ *¡¡¡HASTA PRONTO!!!*\n╰• _¡Que tus dias vayan mejor, adios!_\n\n*Usuario:* ➛ @user` 
conn.spromote = `● _¡Se ha asignado un nuevo admin en el grupo!_\n\n- *Nuevo admin:* @user` 
conn.sdemote = `● _¡Se ha designado un admin en el grupo!_\n\n- *Admin designado:* @user` 
conn.sDesc = `● _¡Se ha modificado la descripcion del grupo recientemente!_` 
conn.sSubject = `● _¡Se ha modificado el nombre grupal recientemente!_` 
conn.sIcon = `● _¡Se ha modificado el perfil grupal recientemente!_` 
conn.sRevoke = `● _¡Se ha restablecido el enlace grupal recientemente!_\n\n- *Nuevo enlace:* @revoke` 
conn.handler = handler.handler.bind(global.conn);
conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
conn.onDelete = handler.deleteUpdate.bind(global.conn);
conn.onCall = handler.callUpdate.bind(global.conn);
conn.connectionUpdate = connectionUpdate.bind(global.conn);
conn.credsUpdate = saveCreds.bind(global.conn, true);
conn.ev.on('messages.upsert', conn.handler);
conn.ev.on('group-participants.update', conn.participantsUpdate);
conn.ev.on('groups.update', conn.groupsUpdate);
conn.ev.on('message.delete', conn.onDelete);
conn.ev.on('call', conn.onCall);
conn.ev.on('connection.update', conn.connectionUpdate);
conn.ev.on('creds.update', conn.credsUpdate);
isInit = false
return true
}
/** Arranque nativo para subbots by - ReyEndymion >> https://github.com/ReyEndymion
 */
if (global.gataJadibts) {
const readRutaJadiBot = readdirSync(rutaJadiBot)
if (readRutaJadiBot.length > 0) {
const creds = 'creds.json'
for (const gjbts of readRutaJadiBot) {
const botPath = join(rutaJadiBot, gjbts)
const readBotPath = readdirSync(botPath)
if (readBotPath.includes(creds)) {
mdmxBots({pathMdmxBotsWa: botPath, m: null, conn, args: '', usedPrefix: '/', command: 'serbot'})
}}
}}

/*const pluginFolder = global.__dirname(join(__dirname, './plugins/index'));
const pluginFilter = (filename) => /\.js$/.test(filename);
global.plugins = {};
async function filesInit() {
for (const filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
const file = global.__filename(join(pluginFolder, filename));
const module = await import(file);
global.plugins[filename] = module.default || module;
} catch (e) {
conn.logger.error(e);
delete global.plugins[filename];
}}}
filesInit().then((_) => Object.keys(global.plugins)).catch(console.error)*/

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = (filename) => /\.js$/.test(filename)
global.plugins = {}
async function filesInit() {
for (const filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
const file = global.__filename(join(pluginFolder, filename))
const module = await import(file)
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(e)
delete global.plugins[filename]
}}}
filesInit().then((_) => Object.keys(global.plugins)).catch(console.error)

global.reload = async (_ev, filename) => {
if (pluginFilter(filename)) {
const dir = global.__filename(join(pluginFolder, filename), true)
if (filename in global.plugins) {
if (existsSync(dir)) conn.logger.info(`( UPDATE ): Se ha actualizado el archivo '${filename}' exitosamente.`)
else {
conn.logger.warn(`( DELETE FILE ): Se ha eliminado el archivo '${filename}' exitosamente.`)
return delete global.plugins[filename];
}
} else conn.logger.info(`( NEW ): Se ha agregado un nuevo archivo '${filename}' exitosamente.`)
const err = syntaxerror(readFileSync(dir), filename, {
sourceType: 'module',
allowAwaitOutsideFunction: true,
});
if (err) conn.logger.error(`( SINTAXIS ERROR ): Se ha detectado un error de sintaxis en el archivo '${filename}'\nTipo de error: ${format(err)}`);
else {
try {
const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`));
global.plugins[filename] = module.default || module;
} catch (e) {
conn.logger.error(`( REQUIRE ERROR ): Se ha detectado un error, requiere el plugin: '${filename}\nTipo de error: ${format(e)}'`);
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)));
}}}};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
const test = await Promise.all([
spawn('ffmpeg'),
spawn('ffprobe'),
spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
spawn('convert'),
spawn('magick'),
spawn('gm'),
spawn('find', ['--version']),
].map((p) => {
return Promise.race([
new Promise((resolve) => {
p.on('close', (code) => {
resolve(code !== 127);
});
}),
new Promise((resolve) => {
p.on('error', (_) => resolve(false));
})]);
}));
const [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test;
const s = global.support = {ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find};
Object.freeze(global.support);
}
function clearTmp() {
const tmpDir = join(__dirname, 'tmp')
const filenames = readdirSync(tmpDir)
filenames.forEach(file => {
const filePath = join(tmpDir, file)
unlinkSync(filePath)})
}
function purgeSession() {
let prekey = []
let directorio = readdirSync("./MdmxSesion")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-')
})
prekey = [...prekey, ...filesFolderPreKeys]
filesFolderPreKeys.forEach(files => {
unlinkSync(`./MdmxSesion/${files}`)
})
} 
function purgeSessionSB() {
try {
const listaDirectorios = readdirSync('./MdmxDirector/');
let SBprekey = [];
listaDirectorios.forEach(directorio => {
if (statSync(`./MdmxDirector/${directorio}`).isDirectory()) {
const DSBPreKeys = readdirSync(`./MdmxDirector/${directorio}`).filter(fileInDir => {
return fileInDir.startsWith('pre-key-')
})
SBprekey = [...SBprekey, ...DSBPreKeys];
DSBPreKeys.forEach(fileInDir => {
if (fileInDir !== 'creds.json') {
unlinkSync(`./MdmxDirector/${directorio}/${fileInDir}`)
}})
}})
if (SBprekey.length === 0) {
console.log(chalk.bold.green('(ACCESS): No hay archivos innecesarios disponibles en la carpeta de PreBots para eliminar.'))
} else {
console.log(chalk.bold.greenBright('(ACCESS): Se han eliminado los archivos innecesarios en la carpeta de PreBots con exito.'))
}} catch (err) {
console.log(chalk.bold.red('(ERROR): Ocurrio un error inesperado al eliminar archivos innecesarios dentro de la carpera PreBots.\nTipo de error: ' + err))
}}
function purgeOldFiles() {
const directories = ['./MdmxSesion/', './MdmxDirector/']
directories.forEach(dir => {
readdirSync(dir, (err, files) => {
if (err) throw err
files.forEach(file => {
if (file !== 'creds.json') {
const filePath = path.join(dir, file);
unlinkSync(filePath, err => {
if (err) {
console.log(chalk.bold.red(`(ERROR): No se ha podido eliminar el archivo ${file}\nTipo de error: ` + err))
} else {
console.log(chalk.bold.green(`(ACCESS): Se ha eliminado el archivo ${file} exitosamente.`))
} }) }
}) }) }) }
function redefineConsoleMethod(methodName, filterStrings) {
const originalConsoleMethod = console[methodName]
console[methodName] = function() {
const message = arguments[0]
if (typeof message === 'string' && filterStrings.some(filterString => message.includes(atob(filterString)))) {
arguments[0] = ""
}
originalConsoleMethod.apply(console, arguments)
}}

setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
await clearTmp()
console.log(chalk.bold.cyanBright('(ACCESS): Se han eliminado los archivos innecesarios de la carpeta tmp con exito.'))}, 1000 * 60 * 4) // 4 min 

setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
await purgeSessionSB()
await purgeSession()
console.log(chalk.bold.greenBright(`(ACCESS): Se han eliminado los archivos innecesarios de la carpeta ${authFile} con exito.`))
await purgeOldFiles()
console.log(chalk.bold.greenBright(`(ACCESS): Archivos duplicados fueron eliminados con exito.`))}, 1000 * 60 * 10)

_quickTest().then(() => conn.logger.info(chalk.bold(`Cargando mensajes entrantes, espere un momento...`.trim()))).catch(console.error)

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(`(ACCESS): Se ha actualizado el archivo main.js con exito.`.trim()))
import(`${file}?update=${Date.now()}`)
})

async function isValidPhoneNumber(number) {
try {
number = number.replace(/\s+/g, '')
if (number.startsWith('+521')) {
number = number.replace('+521', '+52'); 
} else if (number.startsWith('+52') && number[4] === '1') {
number = number.replace('+52 1', '+52'); 
}
const parsedNumber = phoneUtil.parseAndKeepRawInput(number)
return phoneUtil.isValidNumber(parsedNumber)
} catch (error) {
return false
}}

async function joinChannels(conn) {
for (const channelId of Object.values(global.miscanales)) {
await conn.newsletterFollow(channelId).catch(() => {})
}}
