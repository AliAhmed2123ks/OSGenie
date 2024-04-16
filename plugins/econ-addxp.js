//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ Tag the user'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ Enter the amount of *XP* you want to add'
  if (isNaN(txt)) throw ' 🔢 only numbers'
  let xp = parseInt(txt)
  let exp = xp
  if (exp < 1) throw '✳️ Mínimum *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ *XP ADDED*
──────────────
  *Total:* ${xp}
──────────────`)
}

handler.help = ['addxp <@user>']
handler.tags = ['economy']
handler.command = ['addxp'] 
handler.rowner = true
handler.admin = true
handler.botAdmin = true

export default handler

