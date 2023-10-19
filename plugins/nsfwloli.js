let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🤨',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=rara`, 'nsfw.jpg', 'Lolicon', m)
}
handler.help = ['lolicon']
handler.tags = ['nsfw']
handler.command = /^(lolicon)$/i
handler.premium = true
handler.register = true
handler.limit = 5
export default handler