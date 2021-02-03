let handler = async m => m.reply(`
Tidak boleh spam
Tidak boleh telpon
gunakan bot dengan sebaik baik nya
}
handler.tags = ['rules']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 10
handler.limit = false

module.exports = handler
