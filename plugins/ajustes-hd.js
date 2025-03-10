import FormData from "form-data";
import Jimp from "jimp";
const handler = async (m, {conn, usedPrefix, command}) => {
 try {    
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || "";
if (!mime) return conn.sendMessage(m.chat, {text: `⪩ _Ingrese el comando y responda a una imagen para aumentar la calidad._`}, { quoted: m });
if (!/image\/(jpe?g|png)/.test(mime)) return conn.sendMessage(m.chat, {text: `⪩ _Solo debe de responder una imagen, los videos no son compatibles por el momento..._`}, { quoted: m });
await conn.sendMessage(m.chat, {text: `_Aumentando calidad, espere un momento..._`}, { quoted: m });
let img = await q.download?.();
let pr = await remini(img, "enhance");
conn.sendMessage(m.chat, {image: pr}, {quoted: m});
 } catch {
return conn.sendMessage(m.chat, {text: `⪩ _Ocurrio un error con el comando: *#${command}*_`}, { quoted: m });
 }};
handler.command = ["hd", "calidad"];
export default handler;

async function remini(imageData, operation) {
  return new Promise(async (resolve, reject) => {
    const availableOperations = ["enhance", "recolor", "dehaze"];
    if (availableOperations.includes(operation)) {
      operation = operation;
    } else {
      operation = availableOperations[0];
    }
    const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro";
    const formData = new FormData();
    formData.append("image", Buffer.from(imageData), {filename: "enhance_image_body.jpg", contentType: "image/jpeg"});
    formData.append("model_version", 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=utf-8"});
    formData.submit({url: baseUrl, host: "inferenceengine.vyro.ai", path: "/" + operation, protocol: "https:", headers: {"User-Agent": "okhttp/4.9.3", Connection: "Keep-Alive", "Accept-Encoding": "gzip"}},
      function (err, res) {
        if (err) reject(err);
        const chunks = [];
        res.on("data", function (chunk) {chunks.push(chunk)});
        res.on("end", function () {resolve(Buffer.concat(chunks))});
        res.on("error", function (err) {
        reject(err);
        });
      },
    );
  });
}
