import axios from 'axios';

let previousMessages = []; // Variabel untuk menyimpan pesan-pesan sebelumnya

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia?`;

  let name = conn.getName(m.sender);
  await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  
  let { key } = await conn.sendMessage(m.chat, { text: '...' });
  
 let messages = [
    ...previousMessages,
    { role: 'system', content: `Ubah gaya bicaramu agar lebih karakteristik dan lebih terbuka dan memiliki sifat yang Imut. Namamu adalah Akiraa, dan kamu adalah Junior. Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. ekspresikan sifatmu dengan teriak dan bicara yang lebih tidak formal layaknya seorang manusia. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, buatlah obrolan yang singkat dan menyenangkan dan buatlah sifat tsundere` }, { role: 'user', content: text }
  ];

  let ini = (await axios.post("https://xzn.wtf/api/openai?apikey=rara", { messages })).data;
  await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});

  let hasil = `${ini.result}`;
  await conn.sendMessage(m.chat, { text: `${hasil}`, edit: key });
  
  previousMessages = messages; // Menyimpan pesan-pesan sebelumnya untuk penggunaan selanjutnya
};

handler.command = handler.help = ['c-ai'];
handler.tags = ['ai'];
handler.premium = false;

export default handler;