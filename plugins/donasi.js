let handler = async m => m.reply(`
╭─「 Donasi •OM 」
│ • GO PAY[6282135450269]
│ • YOUTUBE RYNZ 01
│•INSTAGRAM AXCELLZ_
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
