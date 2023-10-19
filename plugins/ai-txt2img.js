import axios from "axios"

let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Example: .txt2img highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed'
m.reply(wait)
const payloads = {
	"prompt": "(32k, RAW photo, best quality, masterpiece:1.2), (realistic, photo-realistic:1.37)",
  "negative_prompt": "nsfw, bad anatomy, lowres, extra hands, extra legs, extra finger",
  "width": 512,
  "height": 512,
  "steps": 25,
  "model_id": "dream_shaper",
  "sampler": "UniPC",
  "cfg": 7.5,
  "seed": "",
  "enhance_prompt": "yes",
  "multi_lingual": "no",
  "image_num": 1,
  "panorama": "no",
  "safety_checker": "no",
  "safety_checker_type": "blur",
  "lora_model": "",
  "lora_strength": 1,
  "clip_skip": 2,
  "embeddings_model": "",
  "webhook": ""
};
const { data } = await axios
	.request({
		baseURL: "https://api.itsrose.life",
		url: "/image/diffusion/txt2img",
		method: "POST",
		params: {
			apikey: "Rk-3a921ea9af679b3c4663186e_free_tier",
		},
		data: payloads,
	})
	.catch((e) => e?.["response"]);
const { status, message } = data; 

if (!status) {
	return m.reply(message);
}
const { result } = data;
console.log(result);
await conn.sendFile(m.chat, result.images[0], 'conco.jpg', `Prompt: ${text}`, m)
}
handler.help = ['txt2img']
handler.tags = ['ai']
handler.command = /^(txt2img)$/i
handler.premium = true

export default handler