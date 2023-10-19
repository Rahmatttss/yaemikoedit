let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/788ca29f655098f02fc42.jpg'
let sewa = `👋 Hello, I am a *WhatsApp bot* who can fulfill your digital needs. Are you feeling tired? I am always here for you to make your day easier.

Don't forget to register yourself in the yaemiko *database* so that yaemiko can remember you as long as yaemiko remains active.

┏┤  《 ALL MENU 》 
┆┗──────────────┈ ⟢
┆❑ *.allmenu*
┗─────────────────❑

 
 _2023 © Yaemiko-MD_
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|hai)$/i

export default handler