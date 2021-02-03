let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.salam)}”`, m)
}
handler.customPrefix = /assalamualaikum|Assalamualaikum/i
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
global.salam = [
waalaikumsalam kak,
waalaikumsalam kakak,
waalaikumsalam jangan lupa bahagia,
]