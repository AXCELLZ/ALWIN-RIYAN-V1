let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pe)}”`, m)
}
handler.customPrefix = /p|P/i
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.pe = [
P mulu salam kenapa?,
Salam dulu lah biar sopan,
]