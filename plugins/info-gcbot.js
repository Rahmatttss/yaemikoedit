let handler = async (m, { conn }) => {
conn.reply(m.chat, `_List Group Yaemiko-MD_
*Offcial Group*
${link.gc}

*Yaemiko-MD. Telegram*
https://t.me/
`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
