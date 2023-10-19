let handler = async (m, { conn, text, usedPrefix, command }) => {
    let chat = global.db.data.chats[m.chat]
    if (m.isGroup) {
        switch (text) {
            case 'off': {
                if (chat.isBanned) throw '_Bot Sudah Offline_'
                chat.isBanned = true
                conn.reply(m.chat, 'Bot Telah Dimatikan Oleh Owner❌', m)
}
                break
            case 'on': {
                if (!chat.isBanned) throw '_Bot Sudah Online_'
                chat.isBanned = false
                conn.reply(m.chat, 'Bot Telah Di Nyalakan Oleh Owner✅ ', m)
}
                break
            default: {
                m.reply(`Format Salah!\n\nContoh:\n${usedPrefix + command} on\n${usedPrefix + command} off`)
            }
        }
    } 
}
handler.help = ['bot <on/off>']
handler.tags = ['group', 'adminry']
handler.command = /^(bot)$/i
handler.group = true
handler.admin = true
export default handler