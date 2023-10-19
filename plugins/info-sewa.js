let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = ` ---『 *LIST HARGA* 』---
❏──「 *Sewa Bot* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.25.000
│ • *Permanen:* Rp.40.000
❏──────────────๑
❏──「 *Premium* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.20.000
│ • *Permanen:* Rp.30.000
❏──────────────๑
❏──「 *Pembayaran* 」
│ • *Ovo:* Hub Owner
│ • *Dana:* Hub Owner
│ • *Qris:* Hub owner
❏──────────────๑
│ Hubungi Owner!!!
│wa.me/6283815142487
❏──────────────๑
 _2023 © Yaemiko-MD
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['menuprem']
handler.tags = ['main']
handler.command = /^(menuprem|sewabot|sewa|prem|premium)$/i

export default handler