var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split(',')
  if (!args[0]) throw 'Masukkan Text\nContoh : .animediff girl white hair'
  m.reply('_Proses..._')
  var tio = `https://api.xyroinee.xyz/api/ai/animediffusion?q=${q}apikey=AOId4Pr7gl`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['animediff'];
handler.tags = ['ai']; 
handler.premium = true
module.exports = handler;