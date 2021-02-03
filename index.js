console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
const CFonts  = require('cfonts')
CFonts.say('SUBSCRIBE RYNZ 01,FOLLOW AXCELLZ_', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say('\'Whatsapp-Bot\' By @Axcellz_', {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

function start() {
  let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
    }
  })
  .on('error', e => {
    console.error(e)
    fs.watchFile(args[0], () => {
      start()
      fs.unwatchFile(args[0])
    })
  })
}

start()

/*
]=====> DOWNLOAD MENU <=====[
*/
                case 'ytmp3':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Url youtube nya mana kak, Bokep kah?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
					anu = await fetchJson(`https://ohto-ai.herokuapp.com/ytmus?URL=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.getVideo)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
					await limitAdd(sender)
					break
                case 'joox':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzKey}`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
				case 'yutubdl':
					if (args.length < 1) return reply('Urlnya mana um?')
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')				
					anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}=${VhtearKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*âž¸ JUDUL* : ${anu.result.title}\n\n*[WAIT] Proses Dumlu Yakan*`
					thumb = await getBuffer(anu.result.imgUrl)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.UrlVideo)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
                    await limitAdd(sender)
					break
				case 'tiktod':
					if (args.length < 1) return reply('Urlnya mana um?')
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
					anu = await fetchJson(`https://api.xteam.xyz/tiktokv2?url=${args[0]}&APIKEY=xteamapi`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*â CAPTION* : ${anu.caption}\n\n*[WAIT] Proses Dumlu Yakan*`
					thumb = await getBuffer(anu.cover)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.server_1)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.judul}.mp4`, quoted: mek})
                    await limitAdd(sender)
					break
                     case 'play':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname)) 
                reply(ind.wait())
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${VhtearKey}`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*[â—] Lagu Ditemukan*\nâž¸ Judul : ${anu.result.title}\nâž¸ Durasi : ${anu.result.duration}\nâž¸ Size : ${anu.result.size}\n\n*[WAIT] Proses Dumlu Yakan*`
                buffer = await getBuffer(anu.result.image)
                lagu = await getBuffer(anu.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
                break
