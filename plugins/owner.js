let handler = async(m, { conn }) => {
    let msg = await conn.sendContact(m.chat, owner, m)
    await delay(1000)
    await conn.sendMessage(m.chat, { text: `Hallo Kak @${m.sender.split('@')[0]}, Itu Nomor Ownerku Jangan Di Spam Ya!
––––––『 *BIODATA* 』––––––
⫹⫺ *💌 Nama* : Rara
⫹⫺ *♀️ Gender* : Wanita
⫹⫺ *📞 Nomor* : https://wa.me/6283815142487
⫹⫺ *🕋 Agama* : Islam
⫹⫺ *⏰ Tanggal lahir* : PRIVATE
⫹⫺ *🎨 Umur* : 17
⫹⫺ *🧮 Kelas* : SMK XI
⫹⫺ *🧩 Hobby* : MAIN MUSIK, GAME, WATCH ANIME, SUKA GAMBAR ART 
⫹⫺ *💬 Sifat* : ASIK DAH KALAU DAH KENAL
⫹⫺ *🗺️ Tinggal* : PRIVATE 
•·––––––––––––––––––––––––––·•
`, mentions: [m.sender] }, { quoted: msg })
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler

const delay = time => new Promise(res => setTimeout(res, time))