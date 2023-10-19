import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw `*Contoh:* \n${usedPrefix} Siapa Yang Suka Jual Pulau\n\n_2023 © Yaemiko-MD_`
    try {
        let configuration = new Configuration({
            apiKey: "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"
        });
        let openai = new OpenAIApi(configuration);
        let response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
        m.reply(response.data.choices[0].text.trim())
    } catch (e) {
        throw '_Terjadi Error, Silahkan Coba Lagi_'
    }
}
handler.help = ['ai']
handler.tags = ['tools']
handler.command = /^(ai|jokowi|vynaa)$/i
handler.limit = true
handler.onlyprem = true
export default handler