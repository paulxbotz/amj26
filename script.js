const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))

const timestampp = speed();
const latensii = speed() - timestampp

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
autorespon = false
playmusic = false
baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || false
}
offline = false
banChats = true;
waktuafk = 'Nothing'
alasanafk = 'Nothing'
targetpc = "628155266668";
owners = "628155266668@s.whatsapp.net";
owner = "628155266668";
numbernye = "0";
petik = '```'

// APIKEY
HunterApi = settings.HunterApi
YuzApi = 'Yuzzu'

//========================================= Thumbnail ========================================================//
const thumb = fs.readFileSync("./stik/thumb.jpeg");
//========================================= Tata Cara ========================================================//
const taca = fs.readFileSync("./stik/tatacara/1.jpeg");
//========================================= Function Syarat - Syarat Get ========================================================//
const sarat1 = fs.readFileSync("./stik/syarat/1.jpeg");
const sarat2 = fs.readFileSync("./stik/syarat/2.jpeg");
const sarat3 = fs.readFileSync("./stik/syarat/3.jpeg");
const sarat4 = fs.readFileSync("./stik/syarat/4.jpeg");
//========================================= Function Peraturan Join ========================================================//
const atur1 = fs.readFileSync("./stik/rule/1.jpeg");
const atur2 = fs.readFileSync("./stik/rule/2.jpeg");
const atur3 = fs.readFileSync("./stik/rule/3.jpeg");
const atur4 = fs.readFileSync("./stik/rule/4.jpeg");
const atur5 = fs.readFileSync("./stik/rule/5.jpeg");
//========================================= Function CMD ========================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const izingroup = JSON.parse(fs.readFileSync('./src/data/onGroup.json'))

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = Gita = async (Gita, gita) => {
try {
        if (!gita.hasNewMessage) return
        gita = gita.messages.all()[0]
	    if (!gita.message) return
        if (gita.key && gita.key.remoteJid == 'status@broadcast') return
        gita.message = (Object.keys(gita.message)[0] === 'ephemeralMessage') ? gita.message.ephemeralMessage.message : gita.message
		global.prefix
		Gita.setMaxListeners(0)
    	Gita.removeAllListeners('close')
    	Gita.removeAllListeners('error')
		me = Gita.user
		m = simple.smsg(Gita, gita)
		const antibot = m.isBaileys
		const content = JSON.stringify(gita.message)
		const from = gita.key.remoteJid
		const type = Object.keys(gita.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && gita.message.conversation) ? gita.message.conversation : (type == 'imageMessage') && gita.message.imageMessage.caption ? gita.message.imageMessage.caption : (type == 'videoMessage') && gita.message.videoMessage.caption ? gita.message.videoMessage.caption : (type == 'extendedTextMessage') && gita.message.extendedTextMessage.text ? gita.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(gita.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(gita.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(gita.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		Gita.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    const prefix = '.';
        isStc = Object.keys(gita.message)[0] == "stickerMessage" ? gita.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        body = (type === 'conversation' && gita.message.conversation.startsWith(prefix)) ? gita.message.conversation : (type == 'imageMessage') && gita.message[type].caption.startsWith(prefix) ? gita.message[type].caption : (type == 'videoMessage') && gita.message[type].caption.startsWith(prefix) ? gita.message[type].caption : (type == 'extendedTextMessage') && gita.message[type].text.startsWith(prefix) ? gita.message[type].text : (type == 'listResponseMessage') && gita.message[type].singleSelectReply.selectedRowId ? gita.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && gita.message[type].selectedButtonId ? gita.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(gita.message[type].fileSha256.toString('base64')) !== null && getCmd(gita.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(gita.message[type].fileSha256.toString('base64')) : ""
		const budy = (type === 'conversation') ? gita.message.conversation : (type === 'extendedTextMessage') ? gita.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && gita.message.conversation) ? gita.message.conversation : (type == 'imageMessage') && gita.message.imageMessage.caption ? gita.message.imageMessage.caption : (type == 'videoMessage') && gita.message.videoMessage.caption ? gita.message.videoMessage.caption : (type == 'extendedTextMessage') && gita.message.extendedTextMessage.text ? gita.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		cmhit.push(command)
        mess = {
			wait: 'Wait a minute',
			success: 'Success',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error'
			},
			only: {
				group: 'Only for within the group!',
				ownerG: 'Only for group owners!',
				ownerB: 'Only for bot owners!',
				admin: 'Only for group admins!',
				Badmin: 'Make the bot a group admin!'
			}
		}
		const botNumber = Gita.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = gita.key.fromMe ? Gita.user.jid : isGroup ? gita.participant : gita.key.remoteJid
		const senderNumber = sender.split("@")[0] 
    	const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    	const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    	const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    	const hariRaya = new Date('dec 31, 2021 23:59:59')
    	const sekarang = new Date().getTime();
    	const Selisih = hariRaya - sekarang;
    	const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    	const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    	const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
    	const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
    	const raya = `${jhari}Day ${jjam}Hr ${mmmenit}Mnt ${ddetik}Sec`
		const conts = gita.key.fromMe ? Gita.user.jid : Gita.contacts[gita.sender]
        const pushname = gita.key.fromMe ? Gita.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await Gita.chats.all()
		const groupMetadata = isGroup ? await Gita.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const groupIzin = isGroup ? izingroup.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? gita.message.buttonsResponseMessage.selectedDisplayText : ''
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        try {
		ppsaya = await Gita.getProfilePicture(`${owner.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		ppsaya = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const sfrply = await getBuffer(ppsaya)
		try {
		pporang = await Gita.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
			//-
			//WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Malam 🌚"; break;
                case 1: jamss = "Malam 🌚"; break;
                case 2: jamss = "Malam 🌚"; break;
                case 3: jamss = "Malam 🌔"; break;
                case 4: jamss = "Malam 🌔"; break;
                case 5: jamss = "Pagi 🌄"; break;
                case 6: jamss = "Pagi 🌄"; break;
                case 7: jamss = "Pagi 🌄"; break;
                case 8: jamss = "Pagi ☀️"; break;
                case 9: jamss = "Pagi ☀️"; break;
                case 10: jamss = "Pagi ☀️"; break;
                case 11: jamss = "Siang 🌞"; break;
                case 12: jamss = "Siang 🌞"; break;
                case 13: jamss = "Siang 🌞"; break;
                case 14: jamss = "Siang 🌞"; break;
                case 15: jamss = "Sore 🌞"; break;
                case 16: jamss = "Sore ☀️"; break;
                case 17: jamss = "Sore 🌄"; break;
                case 18: jamss = "Sore 🌄"; break;
                case 19: jamss = "Malam 🌙"; break;
                case 20: jamss = "Malam 🌙"; break;
                case 21: jamss = "Malam 🌙"; break;
                case 22: jamss = "Malam 🌙"; break;
                case 23: jamss = "Malam 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
 // FAKE REPLY BY YOGI PEWE
// PRODUCT
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": thumb //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname}`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname}`,
                            thumbnail: thumb, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: thumb
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: thumb
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': thumb
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': thumb
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": thumb,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': thumb
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': thumb
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await Gita.relayWAMessage(
        Gita.prepareMessageFromContent(
          target,
          Gita.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Gita.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Gita.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Gita.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Gita.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Gita.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Gita.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Gita.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 if (!gita.key.remoteJid.endsWith('@g.us') && offline){
			if (!gita.key.fromMe){
            if (isAfk(gita.key.remoteJid)) return
            addafk(gita.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© Dcode Denpa_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (gita.key.remoteJid.endsWith('@g.us') && offline) {
			if (!gita.key.fromMe){
				if (gita.message.extendedTextMessage != undefined){
					if (gita.message.extendedTextMessage.contextInfo != undefined){
						if (gita.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of gita.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === Gita.user.jid){
                        if (isAfk(gita.key.remoteJid)) return
                        addafk(gita.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© Dcode Denpa_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Gita.sendMessage(to, media, sticker, {quoted: gita})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        Gita.sendMessage(from, media, MessageType.sticker,{quoted:gita})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        Gita.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:gita, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await Gita.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        Gita.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			Gita.sendMessage(from, teks, text, { thumbnail: thumb, sendEphemeral: true, quoted: gita, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"",previewType:"PHOTO",thumbnail:sfrply,sourceUrl:`https://wa.me/628155266668?text=Hi Gita`}}})
		}
		const reply2 = (teks) => {
			Gita.sendMessage(from, teks, text, { thumbnail: thumb, sendEphemeral: true, quoted: gita, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const simir = (teks) => {
			Gita.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			Gita.sendMessage(hehe, teks, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? Gita.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Gita.sendMessage(from, teks.trim(), extendedText, { quoted: gita, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
Gita.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
Gita.sendMessage(from, hasil, type, options).catch(e => {
Gita.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					Gita.sendMessage(to, media, type, { quoted: gita, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await Gita.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = thumb
				Gita.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
            
if (budy.startsWith('>')){
if (!isOwner)return reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
console.log(color('[EVAL]'), color(moment(gita.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!gita.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!gita.key.fromMe && !isOwner) return
try {
return Gita.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: gita})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !gita.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					Gita.sendMessage(from, result, sticker, { quoted: gita, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					Gita.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: gita, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					Gita.sendMessage(from, result, image, { quoted: gita, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !gita.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!gita.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				Gita.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    Gita.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("://wa.me/")) {
        	if (!gita.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				Gita.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    Gita.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("://api.whatsapp.com/")) {
        	if (!gita.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				Gita.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    Gita.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("://youtube.com/")) {
        	if (!gita.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				Gita.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    Gita.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("://www.instagram.com/")) {
        	if (!gita.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				Gita.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    Gita.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("://www.tiktok.com/")) {
        	if (!gita.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				Gita.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    Gita.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (bad.includes(messagesD)) {
				reply('_Jangan Toxic!_')
				}
				if (m.message && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
m.reply('Troli Detected\n\n' + require('util').format(m.key))
await Gita.modifyChat(m.chat, 'delete', {
 includeStarred: false
})
}
if (!isGroup && !isCmd && !command && !gita.key.fromMe && autorespon) {
numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=${numd.data.country_code}`)
                     sami = simi.success
                        Gita.sendMessage(from, `_${sami}_`, text, {thumbnail: ofrply, sendEphemeral: true, quoted:gita, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
if (settings.autoread) {
Gita.chatRead(from)
}
if (settings.autocomposing) {
Gita.updatePresence(from, Presence.composing)
}
if (settings.autorecording) {
Gita.updatePresence(from, Presence.recording)
}

        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

		if (!gita.key.fromMe && banChats === true) return
		

		if (isCmd && !isGroup) {console.log(color('[ PC ]'), color(`Pukul `, `gold`), color(moment(gita.messageTimestamp * 1000).format('HH : mm : ss'), 'gold'), color(` WIB`, 'gold'), color(`${budy}`, 'salmon'), color(`[${args.length}]`, 'crimson'), color(`from `, `salmon`), color(`${pushname}`, `orchid`))}
  		if (isCmd && isGroup)  {console.log(color('[ GC ]'), color(`Pukul `, `gold`), color(moment(gita.messageTimestamp * 1000).format('HH : mm : ss'), 'gold'), color(` WIB`, 'gold'), color(`${budy}`, 'salmon'), color(`[${args.length}]`, 'crimson'), color(`from `, `salmon`), color(`${pushname}`, 'orchid'), color('in', 'crimson'), color(`${groupName}`, 'gold'))}
  		if (banChats = true && !isGroup) {console.log(color('[ PC ]'), color(`Pukul `, `gold`), color(moment(gita.messageTimestamp * 1000).format('HH : mm : ss'), 'gold'), color(` WIB`, 'gold'), color(`${budy}`, 'salmon'), color(`[${args.length}]`, 'crimson'), color(`from `, `salmon`), color(`${pushname}`, `orchid`))}
  		if (banChats = true && isGroup)  {console.log(color('[ GC ]'), color(`Pukul `, `gold`), color(moment(gita.messageTimestamp * 1000).format('HH : mm : ss'), 'gold'), color(` WIB`, 'gold'), color(`${budy}`, 'salmon'), color(`[${args.length}]`, 'crimson'), color(`from `, `salmon`), color(`${pushname}`, 'orchid'), color('in', 'crimson'), color(`${groupName}`, 'gold'))}
		
if (cmd === ("q")) {
    if (!m.quoted) return reply('reply pesan!')
    let rii = Gita.serializeM(await m.getQuotedObj())
    if (!rii.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await rii.quoted.copyNForward(m.chat, true)
    }  

        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya bgsd!')
        su = gita.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
case 'menu':
  console.log(color('[ MENU ]', "salmon"))
  try {
    pic = await Gita.getProfilePicture(sender)
  } catch {
    pic = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  gambar = await getBuffer(pic)
  menu = `Selamat ${tampilUcapan} kak ${pushname}\n\nNOTE :\n1. ${petik}Button Menu tidak dapat dilihat oleh pengguna WhatsApp Mod di group chat${petik}\n${petik}Silahkan ketik ${prefix + command} di Personal Chat ..${petik}\n`
  sendButImage(from, menu, `*INFO BOT*
• Prefix          : 「 ${prefix} 」
• Runtime     : ${runtime(process.uptime())}
• Hit Today   : ${cmhit.length} Hit
• Total Chat  : ${totalchat.length} Chat
• Speed         : ${latensii.toFixed(4)} Second`, gambar, [
    {
      buttonId: `${prefix}syarat`,
      buttonText: {
        displayText: `‼️ SYARAT GET ARISAN ‼️`,
      },
      type: 1,
    },
    {
      buttonId: `${prefix}norek`,
      buttonText: {
        displayText: `‼️ NOREK OWNER AMJ26 ‼️`,
      },
      type: 1,
    },
    {
      buttonId: `${prefix}tatacara`,
      buttonText: {
        displayText: `‼️ TATA CARA ‼️`,
      },
      type: 1,
    }
  ], { quoted: gita, contextInfo: { externalAdReply: { title: "Created by: Gita", body: "Instagram : arisanmenurunjkt26", sourceUrl: "https://instagram.com/arisanmenurunjkt26", thumbnail: thumb, previewType: "PHOTO"  }}});
  break;
  case 'syarat':
  console.log(color('[ SYARAT ]', "yellow"))
  let sarat = Gita.prepareMessageFromContent(from, {
    "listMessage": {
        "title": "‼️ *SYARAT GET ARISAN* ‼️",
        "description": "SYARAT - SYARAT yang *WAJIB* DI PENUHI",
        "buttonText": "*KLIK DI SINI* ⌕",
        "listType": "SINGLE_SELECT",
        "sections": [
            {
                "title": "◉ SYARAT GET 1 - 3 JT",
                "rows": [
                    {
                        "title": '► PILIH AKU',
                        "description": 'Saya ingin melihat syarat\nGet arisan 1 - 3 JT',
                        "rowId": `${prefix}syarat1`
                    }
                ]
            },
            {
                "title": "◉ SYARAT GET 4 JT",
                "rows": [
                    {
                        "title": '► PILIH AKU',
                        "description": 'Saya ingin melihat syarat\nGet arisan 4 JT',
                        "rowId": `${prefix}syarat2`
                    }
                ]
            },
            {
                "title": "◉ SYARAT GET 5 - 9 JT",
                "rows": [
                    {
                        "title": '► PILIH AKU',
                        "description": 'Saya ingin melihat syarat\nGet arisan 5 - 9 JT',
                        "rowId": `${prefix}syarat3`
                    }
                ]
            },
            {
                "title": "◉ SYARAT GET 10 - 20 JT",
                "rows": [
                    {
                        "title": '► PILIH AKU',
                        "description": 'Saya ingin melihat syarat\nGet arisan 10 - 20 JT',
                        "rowId": `${prefix}syarat4`
                    }
                ]
            },
        ]
    }
  }, {quoted: gita})
  Gita.relayWAMessage(sarat, {waitForAck: true})
  break;
  case 'syarat1':
  console.log(color('[ SYARAT GET 1 - 3 JT ]', "salmon"))
  let sar = sarat1
  await Gita.sendMessage(from, sar, image, { caption: 'Ini adalah syarat\n*GET 1 - 3 JT*\n*ARISAN MENURUN JKT26*', quoted: gita});
  break;
  case 'syarat2':
  console.log(color('[ SYARAT GET 4 JT ]', "salmon"))
  let sir = sarat2
  await Gita.sendMessage(from, sir, image, { caption: 'Ini adalah syarat\n*GET 4 JT*\n*ARISAN MENURUN JKT26*', quoted: gita, contextInfo: { externalAdReply: { title: "Created by: Gita", body: "Instagram : arisanmenurunjkt26", sourceUrl: "https://instagram.com/arisanmenurunjkt26", thumbnail: thumb, previewType: "PHOTO"  }}});
  break;
  case 'syarat3':
  console.log(color('[ SYARAT GET 5 - 9 JT ]', "salmon"))
  let sur = sarat3
  await Gita.sendMessage(from, sur, image, { caption: 'Ini adalah syarat\n*GET 5 - 9 JT*\n*ARISAN MENURUN JKT26*', quoted: gita, contextInfo: { externalAdReply: { title: "Created by: Gita", body: "Instagram : arisanmenurunjkt26", sourceUrl: "https://instagram.com/arisanmenurunjkt26", thumbnail: thumb, previewType: "PHOTO"  }}});
  break;
  case 'syarat4':
  console.log(color('[ SYARAT GET 10 - 20 JT ]', "salmon"))
  let ser =  sarat4
  await Gita.sendMessage(from, ser, image, { caption: 'Ini adalah syarat\n*GET 10 - 20 JT*\n*ARISAN MENURUN JKT26*', quoted: gita, contextInfo: { externalAdReply: { title: "Created by: Gita", body: "Instagram : arisanmenurunjkt26", sourceUrl: "https://instagram.com/arisanmenurunjkt26", thumbnail: thumb, previewType: "PHOTO"  }}});
  break;
  case 'norek':
  console.log(color('[ NOMOR REKENING ]', "salmon"))
  menu = `Selamat ${tampilUcapan} kak ${pushname}\n\nNOTE :\n1. ${petik}Button Menu tidak dapat dilihat oleh pengguna WhatsApp Mod di group chat${petik}\n${petik}Silahkan ketik ${prefix + command} di Personal Chat ..${petik}\n`
  sendButMessage(from, menu, `*INFO BOT*
• Runtime     : ${runtime(process.uptime())}
• Hit Today   : ${cmhit.length} Hit
• Total Chat  : ${totalchat.length} Chat
• Speed         : ${latensii.toFixed(4)} Second`, [
    {
      buttonId: `${prefix}amj26`,
      buttonText: {
        displayText: `‼️ NOREK OWNER AMJ26 ‼️`,
      },
      type: 1,
    },
    {
      buttonId: `${prefix}amjr26`,
      buttonText: {
        displayText: `‼️ NOREK OWNER AMJR26 ‼️`,
      },
      type: 1,
    }
  ], { thumbnail: thumb, quoted: gita, contextInfo: { externalAdReply: { title: "Created by: Gita", body: "Instagram : arisanmenurunjkt26", sourceUrl: "https://instagram.com/arisanmenurunjkt26", thumbnail: thumb, previewType: "PHOTO"  }}});
  break;
  case 'amj26':
  console.log(color('[ NOMOR REKENING AMJ26 ]', "salmon"))
reply(`‼️ *NOREK OWNER AMJ26* ‼️

🎀 *TRANSFER KE REK OWNER* :🎀

› *BCA* : ${petik}5471011046${petik} 
› *OVO* : ${petik}081297254070${petik}

${petik}ATAS NAMA${petik} *DHEA FITRIA*

*SELAIN ATAS NAMA DI ATAS* 
*ADALAH PENIPUAN* !!`)
  break;
  case 'amjr26':
  console.log(color('[ NOMOR REKENING AMJR26 ]', "salmon"))
reply(`‼️ *NOREK OWNER AMJR26* ‼️

🎀 *TRANSFER KE REK OWNER* :🎀

› *BCA* : ${petik}1280236451${petik}
› *OVO* : ${petik}085156900661${petik}

${petik}ATAS NAMA${petik} *ACHMAD BADAWI RAMADHAN*

*SELAIN ATAS NAMA DI ATAS* 
*ADALAH PENIPUAN* !!`)
  break;
  case 'tatacara':
  console.log(color('[ TATA CARA ]', "salmon"))
  cara = `Selamat ${tampilUcapan} kak ${pushname}\n\nNOTE :\n1. ${petik}Button Menu tidak dapat dilihat oleh pengguna WhatsApp Mod di group chat${petik}\n${petik}Silahkan ketik ${prefix + command} di Personal Chat ..${petik}\n`
  sendButMessage(from, cara, `*INFO BOT*
• Runtime     : ${runtime(process.uptime())}
• Total Hit     : ${cmhit.length} Hit
• Speed         : ${latensii.toFixed(4)} Second`, [
    {
      buttonId: `${prefix}carajoin`,
      buttonText: {
        displayText: `‼️ CARA JOIN ‼️`,
      },
      type: 1,
    },
    {
      buttonId: `${prefix}rules`,
      buttonText: {
        displayText: `‼️ PERATURAN ‼️`,
      },
      type: 1,
    },
    {
      buttonId: `${prefix}formatopslot`,
      buttonText: {
        displayText: `‼️ FORMAT OPSLOT ‼️`,
      },
      type: 1,
    },
  ], { quoted: gita, contextInfo: { externalAdReply: { title: "Created by: Gita", body: "Instagram : arisanmenurunjkt26", sourceUrl: "https://instagram.com/arisanmenurunjkt26", thumbnail: thumb, previewType: "PHOTO"  }}});
  break;
  case 'formatopslot':
  reply(`
*FORMAT OPSLOT*

BANK  :

ATAS NAMA  :

KLOTER BRP  :

NOMER BRP  :

RINCIAN BAYAR OPSLOT  :

`)
  break;
  case 'carajoin':
  console.log(color('[ CARA JOIN ]', "salmon"))
  await Gita.sendMessage(from, fs.readFileSync("./stik/tatacara/1.jpeg"), image, { caption: 'Ini adalah tata cara JOIN\n*ARISAN MENURUN JKT26*', quoted: gita, contextInfo: { externalAdReply: { title: "Created by: Gita", body: "Instagram : arisanmenurunjkt26", sourceUrl: "https://instagram.com/arisanmenurunjkt26", thumbnail: thumb, previewType: "PHOTO"  }}});
  break;
  case 'rules':
  console.log(color(`[ RULES JOIN ]`, 'salmon'))
  buttons = [
      {buttonId:'rules2',buttonText:{displayText: `🔜 RULES SELANJUTNYA`},type:1}
  ]
  imageMsg = ( await Gita.prepareMessage(from, fs.readFileSync("./stik/rule/1.jpeg"), 'imageMessage', {thumbnail: thumb})).message.imageMessage
  buttonsMessage = {
      footerText:'RULES NYA DI BACA YANG BENER', 
      imageMessage: imageMsg,
      contentText:`INI RULES NYA ..`,buttons,headerType:4
  }
  prep = await Gita.prepareMessageFromContent(from,{buttonsMessage},{ quoted: gita, contextInfo: { externalAdReply: { title: "Created by: Gita", body: "Instagram : arisanmenurunjkt26", sourceUrl: "https://instagram.com/arisanmenurunjkt26", thumbnail: thumb, previewType: "PHOTO"  }}});
  Gita.relayWAMessage(prep)
  break;
  case 'rules2':
  console.log(color(`[ RULES JOIN ]`, 'salmon'))
  buttons = [
      {buttonId:'rules3',buttonText:{displayText: `🔜 RULES SELANJUTNYA`},type:1},
      {buttonId:'rules',buttonText:{displayText: `🔙 RULES SEBELUMNYA`},type:1},
  ]
  imageMsg = ( await Gita.prepareMessage(from, fs.readFileSync("./stik/rule/2.jpeg"), 'imageMessage', {thumbnail: thumb})).message.imageMessage
  buttonsMessage = {
      footerText:'RULES NYA DI BACA YANG BENER', 
      imageMessage: imageMsg,
      contentText:`INI RULES NYA ..`,buttons,headerType:4
  }
  prep = await Gita.prepareMessageFromContent(from,{buttonsMessage},{ quoted: gita, contextInfo: { externalAdReply: { title: "Created by: Gita", body: "Instagram : arisanmenurunjkt26", sourceUrl: "https://instagram.com/arisanmenurunjkt26", thumbnail: thumb, previewType: "PHOTO"  }}});
  Gita.relayWAMessage(prep)
  break;
  case 'rules3':
  console.log(color(`[ RULES JOIN ]`, 'salmon'))
  buttons = [
      {buttonId:'rules4',buttonText:{displayText: `🔜 RULES SELANJUTNYA`},type:1},
      {buttonId:'rules2',buttonText:{displayText: `🔙 RULES SEBELUMNYA`},type:1},
  ]
  imageMsg = ( await Gita.prepareMessage(from, fs.readFileSync("./stik/rule/3.jpeg"), 'imageMessage', {thumbnail: thumb})).message.imageMessage
  buttonsMessage = {
      footerText:'RULES NYA DI BACA YANG BENER', 
      imageMessage: imageMsg,
      contentText:`INI RULES NYA ..`,buttons,headerType:4
  }
  prep = await Gita.prepareMessageFromContent(from,{buttonsMessage},{ quoted: gita, contextInfo: { externalAdReply: { title: "Created by: Gita", body: "Instagram : arisanmenurunjkt26", sourceUrl: "https://instagram.com/arisanmenurunjkt26", thumbnail: thumb, previewType: "PHOTO"  }}});
  Gita.relayWAMessage(prep)
  break;
  case 'rules4':
  console.log(color(`[ RULES JOIN ]`, 'salmon'))
  buttons = [
      {buttonId:'rules5',buttonText:{displayText: `🔜 RULES SELANJUTNYA`},type:1},
      {buttonId:'rules3',buttonText:{displayText: `🔙 RULES SEBELUMNYA`},type:1},
  ]
  imageMsg = ( await Gita.prepareMessage(from, fs.readFileSync("./stik/rule/4.jpeg"), 'imageMessage', {thumbnail: thumb})).message.imageMessage
  buttonsMessage = {
      footerText:'RULES NYA DI BACA YANG BENER', 
      imageMessage: imageMsg,
      contentText:`INI RULES NYA ..`,buttons,headerType:4
  }
  prep = await Gita.prepareMessageFromContent(from,{buttonsMessage},{ quoted: gita, contextInfo: { externalAdReply: { title: "Created by: Gita", body: "Instagram : arisanmenurunjkt26", sourceUrl: "https://instagram.com/arisanmenurunjkt26", thumbnail: thumb, previewType: "PHOTO"  }}});
  Gita.relayWAMessage(prep)
  break;
  case 'rules5':
  console.log(color(`[ RULES JOIN ]`, 'salmon'))
  buttons = [
      {buttonId:'0',buttonText:{displayText: `SAYA MENGERTI`},type:1},
      {buttonId:'rules4',buttonText:{displayText: `🔙 RULES SEBELUMNYA`},type:1},
      {buttonId:'menu',buttonText:{displayText:'©️ MENU'},type:1},
  ]
  imageMsg = ( await Gita.prepareMessage(from, fs.readFileSync("./stik/rule/5.jpeg"), 'imageMessage', {thumbnail: thumb})).message.imageMessage
  buttonsMessage = {
      footerText:'RULES NYA DI BACA YANG BENER', 
      imageMessage: imageMsg,
      contentText:`INI RULES NYA ..`,buttons,headerType:4
  }
  prep = await Gita.prepareMessageFromContent(from,{buttonsMessage},{ quoted: gita, contextInfo: { externalAdReply: { title: "Created by: Gita", body: "Instagram : arisanmenurunjkt26", sourceUrl: "https://instagram.com/arisanmenurunjkt26", thumbnail: thumb, previewType: "PHOTO"  }}});
  Gita.relayWAMessage(prep)
  break;
  case 'allmenu':
  let groups = Gita.chats.array.filter(v => v.jid.endsWith('g.us'))
  let privat = Gita.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
  let ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  let timistamp = speed();
  let laitensi = speed() - timistamp
  ghost = gita.participant
  try {
   ppimg = await Gita.getProfilePicture(ghost)
   } catch {
   ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
   }
  let conts = gita.key.fromMe ? Gita.user.jid : Gita.contacts[sender] || { notify: jid.replace(/@.+/, '') }
  let ushname = gita.key.fromMe ? Gita.user.name : conts.notify || conts.vname || conts.name || '-'
  console.log(color('[ All Menu ]  Self - BOT', "magenta"))
  listnya =`
╭──「 *💸BOT AMJ26💸* 」──
│
│${petik}Selamat ${tampilUcapan} kak ${ushname}${petik}
│
│ 🔮 *Hari ini   :* Hari ${week}
│ 📆 *Tanggal  :* 
│${petik}${date}${petik}
│
│ ⏱️ *Jam :* ${jam} *WIB*
│ ⏱️ *Jam :* ${wit} *WIT*
│ ⏱️ *Jam :* ${wita} *WITA*
│
│ ⏱️ *Tahun Baru Tinggal :*
│${petik}${raya}${petik}
│
╰──「 *💸BOT AMJ26💸* 」──

╭────「 *ABOUT* 」────
│
│› *Nama :* _${Gita.user.name}_
│› *Browser :* _${Gita.browserDescription[1]}_
│› *Server :* _${Gita.browserDescription[0]}_
│› *Version :* _${Gita.browserDescription[2]}_
│› *Kecepatan :* _${laitensi.toFixed(4)} Detik_
│
│› *Total Chat :* ${petik}${totalchat.length} Chat${petik}
│› *Versi Whatsapp :* 
│  ${petik}${Gita.user.phone.wa_version}${petik}
│› *Bot Aktif Sejak :*
│${petik}${runtime(process.uptime())}${petik} Lalu
│
╰────「 *ABOUT* 」────

╭────「 *Device* 」────
│
│› *Handphone :* _${Gita.user.phone.device_manufacturer}_
│› *Seri HandPhone :* _${Gita.user.phone.device_model}_
│› *OS HandPhone :* _Android ${Gita.user.phone.os_version}_
│› *Server :* _Windows 11_
│› *Hostname Server :* _${os.hostname()}_
│› *Penggunaan RAM :*
│ _${ram2}_
│
╰────「 *Device* 」────

• All Menu 💸BOT AMJ26💸

==========================
${petik}◪ [ Simple Menu ]${petik}
==========================

╭───「 *Menu Simple* 」───
│› *${prefix}ownermenu*
│› *${prefix}groupmenu
│› *${prefix}othermenu*
╰───「 *Menu Simple* 」───

==========================
${petik}◪ [ Owner Menu ]${petik}
==========================

╭────「 *Menu ke 1* 」────
│› *${prefix}autoread*
│› *${prefix}bcgc*
│› *${prefix}setcmd* [ sticker ]
│› *${prefix}listcmd*
│› *${prefix}delcmd*
│› *${prefix}cekapi*
│› *${prefix}chat*
│› *${prefix}kontak*
│› *${prefix}clone*
│› *${prefix}on*
│› *${prefix}off*
│› *${prefix}self*
│› *${prefix}public*
│› *${prefix}pin*
│› *${prefix}unpin*
│› *${prefix}spam*
│› *${prefix}pm*
│› *${prefix}dm*
│› *${prefix}read*
│› *${prefix}sw*
│› *${prefix}swimg*
│› *${prefix}swvid*
│› *${prefix}colong*
│› *${prefix}block*
│› *${prefix}unblock*
│› *${prefix}quoted*
│› *${prefix}shutdown*
╰────「 *Menu ke 1* 」────

==========================
${petik}◪ [ Group Menu ]${petik}
==========================
╭────「 *Menu ke 2* 」────
│› *${prefix}group*
│› *${prefix}linkgc*
│› *${prefix}add*
│› *${prefix}hidetag*
│› *${prefix}jadibot
│› *${prefix}kick
│› *${prefix}listbot
│› *${prefix}tagall*
│› *${prefix}stopjadibot
│› *${prefix}voting
│› *${prefix}infogc
│› *${prefix}ubahlink
│› *${prefix}antilink
│› *${prefix}antihidetag
│› *${prefix}antibule
╰────「 *Menu ke 2* 」────

==========================
${petik}◪ [ Other Menu ]${petik}
==========================
╭────「 *Menu ke 3* 」───
│› *${prefix}caripesan*
│› *${prefix}lirik*
│› *${prefix}ping*
│› *${prefix}kalkulator*
│› *${prefix}online*
│› *${prefix}reminder*
│› *${prefix}translate*
│› *${prefix}kodebahasa*
│› *${prefix}wame*
╰────「 *Menu ke 3* 」───
Creator : @${owners.split('@')[0]}

• ${petik}💸BOT AMJ26💸${petik}`
anu  = {caption:`${listnya}`,thumbnail: fs.readFileSync('./src/thumb.jpeg'),contextInfo:{"mentionedJid": [owners], "forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': sender, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${petik}${runtime(process.uptime())}${petik}`, 'jpegThumbnail': thumb }}}}
buffer = await getBuffer(ppimg)
Gita.sendMessage(from, buffer, image, anu, {quoted: gita})
break
//========================================= Case ========================================================//
  case 'autoread':
  console.log(color(`[ ${command} ]`, "magenta"))
        if (!isOwner && !gita.key.fromMe) return ('Anda Siapa ??')
        if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
        console.log(color('[ AUTO READ MODE ]', "magenta"))
        if (args[0] === "gc") {
            if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
            if (args[1] === "on") {
                if (readG === true) return
                console.log(color('[ AUTO READ GC MODE == ON ]', "magenta"))
                readG = true
                reply(`Succes mengaktifkan autoread group`)
            } else if (args[1] === "off") {
                if (readG === false) return
                  console.log(color('[ AUTO READ GC MODE == OFF ]', "magenta"))
                readG = false
                reply(`Succes mematikan autoread group`)
            } else {
                reply(`Pilih on atau off`)
            }
        } else if (args[0] === "pc") {
            if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
            if (args[1] === "on") {
                if (readP === true) return
                  console.log(color('[ AUTOREAD PC MODE == ON ]', "magenta"))
                readP = true
                reply(`Succes mengaktifkan autoread pribadi`)
            } else if (args[1] === "off") {
                if (readP === false) return
                  console.log(color('[ AUTO READ PC MODE == OFF ]', "magenta"))
                readP = false
                reply(`Succes mematikan autoread pribadi`)
            } else {
                reply(`Pilih on atau off`)
            }
        } else {
            reply(`List Auto Read\n•> gc\n•> pc`)
        }
        break;
    case 'bcgc':
    console.log(color(`[ ${command} ]`, 'magenta'))
        if (!isOwner) return reply(mess.owner)
        if (args.length < 1) return reply(`Ketik *${prefix}broadcast* (Text)`)
        let grouph = Gita.chats.array.filter(v => v.jid.endsWith('g.us'))
        const namanya = isGroup ? groupMetadata.subject : "";
        buff = await getBuffer('https://i.ibb.co/mNnkkpC/20201128-130607.jpg')
        for (let _ of grouph) {
        Gita.sendMessage(_.jid, `${q}`, text, {
            contextInfo: {
              participant: sender,
            quotedMessage: {
                conversation: `${petik}[ B R O A D  C A S T ]\n[ FOR GROUP CHAT ${namanya}${petik}]`
                }
              }
            })
          }
        reply(`Suksess Mengirim ke *${grouph.length} Chats*`)
      break
    case 'addcmd':
      case "setcmd":
      console.log(color(`[ ${command} ]`, 'magenta'))
      if (!isOwner) return reply('Anda Siapa ?')
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${prefix + command} commandnya dan tag stickernya\nContoh:\nReply Gambar/Stickernya, lalu ketik \n${prefix + command} menu `);
          var kodenya =
            gita.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          reply("Done!");
        } else {
          reply("tag stickenya");
        }
        break; 
      case 'delcmd':
      console.log(color(`[ ${command} ]`, 'magenta'))
      if (!isOwner) return reply('Anda Siapa ?')
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${prefix + command} tag sticker command nya`)
        var kodenya =
          gita.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        reply("Done!");
        break;
      case 'listcmd':
      if (!isOwner) return reply('Anda Siapa ?')
      console.log(color(`[ ${command} ]`, 'magenta'))
        teksnyee = `${petik}「 LIST STICKER CMD 」${petik}`;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
      case 'cekapi':
        if (!isOwner) return reply('Anda Siapa ?')
          console.log(color(`[ ${command} ]`, 'magenta'))
        get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolhuman}`)
        console.log(color(`[ ${get_result.message} ]`, 'magenta'))
        get_result = get_result.result
        reply(mess.wait)
        ini_txt = `${petik}Username : ${get_result.username}${petik}\n`
        ini_txt += `${petik}Total Hit : ${get_result.requests}${petik}\n`
        ini_txt += `${petik}Hit Today : ${get_result.today}${petik}\n`
        ini_txt += `${petik}Tipe Akun : ${get_result.account_type}${petik}\n`
        ini_txt += `${petik}Valid Until : \n${get_result.expired}${petik}\n`
        reply(ini_txt)
        break;
    case 'chat':
        if (!isOwner) return reply('Anda Siapa ?')
        if (args.length < 1) return reply(`Ketik ${command} nomernya-pesannya\ncontoh ${command} 6289666380537-p`)
        console.log(color(`[ ${command} ]`, 'magenta'))
        var pc = body.slice(5)
        var nomor = pc.split("-")[0];
        var org = pc.split("-")[1];
        Gita.sendMessage(nomor+'@s.whatsapp.net', org, text)
        reply('Berhasil !!')
        break;
    case 'kontak':
        if (args.length < 1) return reply(`Ketik ${command} nomernya-namanya\ncontoh ${command} 6289666380537-manusia`)
        console.log(color(`[ ${command} ]`, 'magenta'))
        pe = args.join(' ') 
        entah = pe.split('-')[0]
        nah = pe.split('-')[1]
        if (isNaN(entah)) return reply('Invalid phone number');
        vcard = 'BEGIN:VCARD\n'
        + 'VERSION:3.0\n'
        + `FN:${nah}\n`
        + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
        + 'END:VCARD'.trim()
        Gita.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
        break;
    case 'clone':
        if (!isOwner) return reply('Anda Siapa ?')
        console.log(color(`[ ${command} ]`, 'magenta'))
        if (args.length < 1) return reply('TAG ORANG NYA!!')
        if (gita.message.extendedTextMessage === undefined || gita.message.extendedTextMessage === null) return reply('TAG ORANG NYA!!!')
        mentioned = gita.message.extendedTextMessage.contextInfo.mentionedJid[0]
        let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
        try {
            pp = await Gita.getProfilePicture(id)
            buffer = await getBuffer(pp)
            Gita.updateProfilePicture(botNumber, buffer)
        } catch (e) {
            reply('GAGAL!')
        }
        break;
    case 'spam':
        if (!isOwner) return reply('Anda Siapa ?')
        console.log(color(`[ ${command} ]`, 'magenta'))
        if (args.length < 1) return reply(`Penggunaan ${command} teks-jumlahspam`)
        ria = body.slice(5)
        arug = ria.split("-")
        if (args.length < 1) return reply(`Penggunaan ${command} teks-jumlahspam`)
        if (isNaN(arug[1])) return reply(`harus berupa angka`)
        for (let i = 0; i < arug[1]; i++){
            Gita.sendMessage(from, arug[0], MessageType.text)
        }
        break;
    case 'on':
  if (!isOwner) return reply(`${petik}ANDA SIAPA ??${petik}`);
    console.log(color('[ ONLINE ]', 'magenta'))
    offline = false;
    reply(`${petik}Anda telah ONLINE ..${petik}`);
    break;
  case 'off':
  if (!gita.key.fromMe) return reply(`${petik}Anda Siapa ?${petik}`)
    console.log(color('[ OFFLINE ]', 'magenta'))
    offline = true;
    waktuafk = Date.now();
    anuu = q ? q : "-";
    alasan = anuu;
    reply(`${petik}ANDA SEDANG OFFLINE ..${petik}\nDENGAN ALASAN : ${petik}${alasan}${petik}`);
    break;
    case 'self':
        if (!isOwner) return reply('Anda Siapa ?')
        if (banChats === true) return
         // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true
        reply(`「 *SELF-MODE* 」`)
        console.log(color(`[ SELF MODE ]`, 'magenta'))
        break;
    case 'public':
        if (!isOwner) return reply('Anda Siapa ?')
        if (banChats === false) return
        // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false
        reply(`「 *PUBLIC-MODE* 」`)
        console.log(color(`[ PUBLIC MODE ]`, 'magenta'))
        break;
     case 'pin':
        if (!isOwner) return reply('Anda Siapa ?')
          console.log(color(`[ ${command} ]`, 'magenta'))
        Gita.modifyChat(from, ChatModification.pin)
        reply('*succes pin this chat*')
        console.log('pinned chat = ' + from)
        break;
    case 'unpin':
        if (!isOwner) return reply('Anda Siapa ?')
          console.log(color(`[ ${command} ]`, 'magenta'))
        Gita.modifyChat(from, ChatModification.unpin)
        reply('*succes unpin this chat*')
        console.log('unpin chat = ' + from)
        break;
    case 'pm':
        if (!isOwner) return reply('Anda Siapa ?')
        console.log(color(`[ ${command} ]`, 'magenta'))        
      if (gita.message.extendedTextMessage === undefined || gita.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
        mentioned = gita.message.extendedTextMessage.contextInfo.mentionedJid
        if (mentioned.length > 1) {
            teks = 'Up↑ :\n'
            for (let _ of mentioned) {
                teks += `@${_.split('@')[0]}\n`
            }
            mentions(teks, mentioned, true)
            Gita.groupMakeAdmin(from, mentioned)
        } else {
            mentions(`Up↑ : @${mentioned[0].split('@')[0]}`, mentioned, true)
            Gita.groupMakeAdmin(from, mentioned)
        }
        break;
    case 'dm':
        if (!isOwner) return reply('Anda Siapa ?')
          console.log(color(`[ ${command} ]`, 'magenta'))
        if (gita.message.extendedTextMessage === undefined || gita.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
        mentioned = gita.message.extendedTextMessage.contextInfo.mentionedJid
        if (mentioned.length > 1) {
            teks = 'Turun↓ :\n'
            for (let _ of mentioned) {
                teks += `@${_.split('@')[0]}\n`
            }
            mentions(teks, mentioned, true)
        Gita.groupDemoteAdmin(from, mentioned)
      } else {
        mentions(`Turun↓: @${mentioned[0].split('@')[0]}`, mentioned, true)
        Gita.groupDemoteAdmin(from, mentioned)
        }
        break;
    case 'read':
        if (!isOwner) return reply('Anda Siapa ?')
          console.log(color(`[ ${command} ]`, 'magenta'))
      var chates = await Gita.chates.all()
        chates.map( async ({ jid }) => {
            await Gita.chatRead(jid)
        })
      teks = `${petik}Berhasil membaca ${chates.length} Chat !${petik}`
      await Gita.sendMessage(from, teks, MessageType.text, {quoted: gita})
      console.log(teks)
        break;
  case 'sw':
        if (!isOwner) return reply('Anda Siapa ?')
          console.log(color(`[ ${command} ]`, 'magenta'))
            if (!q) return reply('Isi teksnya!')
            Gita.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
        break;
    case 'swimg':
        if (!isOwner) return reply('Anda Siapa ?')
          console.log(color(`[ ${command} ]`, 'magenta'))
        if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(gita).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : gita
            cihcih = await Gita.downloadMediaMessage(swsw)
            if (!q) return reply('Isi teksnya!')
            Gita.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            Gita.sendMessage(from, bur, text, { quoted: gita })
        } else {
            reply('Reply gambarnya!')
        }
        break;
    case 'swvid':
        if (!isOwner) return reply('Anda Siapa ?')
          console.log(color(`[ ${command} ]`, 'magenta'))
        if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(gita).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : gita
            cihcih = await Gita.downloadMediaMessage(swsw)
            if (!q) return reply('Isi teksnya!')
            Gita.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            Gita.sendMessage(from, bur, text, { quoted: gita })
        } else {
            reply('reply videonya!')
        }
        break;
    case 'colong':
  case '..':
  case 'hm':
     if (!isOwner) return reply('Anda Siapa ?');
     console.log(color('[ COLONG SW ]', 'cyan'))
     if ((isMedia && !gita.message.videoMessage) || isQuotedImage) {
       ger = isQuotedImage
         ? JSON.parse(JSON.stringify(gita).replace("quotedM", "m")).message
             .extendedTextMessage.contextInfo
         : gita;
       owgi = await Gita.downloadAndSaveMediaMessage(ger);
       Gita.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
         caption: `Nih Kak Sw nya`,
       });
       console.log(color("[ SUCCESS !! ]", 'cyan'));
        fs.unlinkSync(owgi);
     } else if ((isMedia && !gita.message.videoMessage) || isQuotedVideo) {
       ger = isQuotedVideo
         ? JSON.parse(JSON.stringify(gita).replace("quotedM", "m")).message
             .extendedTextMessage.contextInfo
         : gita;
       owgi = await Gita.downloadAndSaveMediaMessage(ger);
       Gita.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
         caption: `Nih Kak Sw nya`,
       });
       console.log(color("[ SUCCESS !! ]", 'cyan'));
       fs.unlinkSync(owgi);
     } else {
       console.log(color(`[ KALAU MAU COLONG SW ]\n[ REPLY SW NYA, CARANYA : ]\n[ KETIK ${command} DAN REPLY SW NYA ]`, 'cyan'));
     }
     break;
    case 'block':
        if (!isOwner) return reply('Anda Siapa ?')
        if (!q) return reply(`Ketik ${command} nomornya\nContoh:\n${command} 6289666380537`)
        console.log(color(`[ ${command} ]`, 'magenta'))
        usser = `${q}@s.whatsapp.net`
        await Gita.blockUser(usser, "add")
        bl = `Sukses memblock @${usser.split('@')[0]}`
        await Gita.sendMessage(from, bl, text, { quoted: gita, contextInfo:{"mentionedJid": [usser], 'participant': usser, }})
        break;
    case 'unblock':
        if (!isOwner) return reply('Anda Siapa ?')
        if (!q) return reply(`Ketik ${command} nomornya\nContoh:\n${command} 6289666380537`)
        console.log(color(`[ ${command} ]`, 'magenta'))
        uwer = `${q}@s.whatsapp.net`
        await Gita.blockUser(uwer, "remove")
        ubl = `Sukses membuka block @${uwer.split('@')[0]}`
        await Gita.sendMessage(from, ubl, text, { quoted: gita, contextInfo:{"mentionedJid": [uwer], 'participant': uwer, }})
        break;
    case 'init0':
      if (!isOwner) return reply('Anda Siapa ?')
      console.log(color(`[ SHUTDOWN ]`, 'magenta'))
      reply('Okey')
      await sleep(1000)
      return Gita.sendMessage(from, JSON.stringify(eval(process.exit())), MessageType.extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: 'Gita', orderTitle: 'Self - Bot', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 900, isForwarded: true}})
      break;

    case 'group':
if(!isOwner) return fakegroup (`${petik}ANDA SIAPA ?${prefix}`)
  console.log(color('[ CHANGE MODE ]', "magenta"))
  const caco = speed();
  const cica = speed() - caco
  try {
    pic = await Gita.getProfilePicture(sender)
  } catch {
    pic = fs.readFileSync('./stik/fake.jpeg')
  }
  gambar = await getBuffer(pic)
  menu = `Selamat ${tampilUcapan} kak ${pushname}\n\nNOTE :\n1. ${petik}Button Menu tidak dapat dilihat oleh pengguna WhatsApp Mod di group chat${petik}`
  sendButImage(from, menu, `*INFO BOT*
• Prefix          : 「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」
• Runtime     : ${runtime(process.uptime())}
• Hit Today   : ${cmhit.length} Hit
• Total Chat  : ${totalchat.length} Chat
• Speed         : ${cica.toFixed(4)} Second`, gambar, [
    {
      buttonId: `${prefix}opengc`,
      buttonText: {
        displayText: `⦿ OPEN GROUP CHAT`,
      },
      type: 1,
    },
    {
      buttonId: `${prefix}closegc`,
      buttonText: {
        displayText: `⦿ CLOSE GROUP CHAT`,
      },
      type: 1,
    },
    {
      buttonId: `${prefix}ubahlink`,
      buttonText: {
        displayText: `⦿UBAH LINK GC`,
      },
      type: 1,
    },
  ], {quoted: gita, contextInfo: { forwardingScore: 99999, isForwarded: true }});
  break;
case 'closegc':
console.log(color('[ CLOSE GROUP ]', "magenta"))
if (!isOwner) return('Anda Siapa ??')
if (!isGroup) return;
reply(`*SUCCES CLOSE GROUP*`);
Gita.groupSettingChange(from, GroupSettingChange.messageSend, true);
break;
case 'opengc':
console.log(color('[ OPEN GROUP ]', "magenta"))
if (!isOwner) return('Anda Siapa ??')
if (!isGroup) return;
reply(`*SUCCES OPEN GROUP*`);
Gita.groupSettingChange(from, GroupSettingChange.messageSend, false);
break;
case 'ubahlink':
console.log(color('[ UBAH LINK GC ]', "magenta"))
if (!isGroup) return;
Gita.revokeInvite(from);
reply(`${petik}Succes mengganti link group${petik}`);
break;
case 'linkgc':
    case 'link':
    console.log(color('[ LINK GROUP ]', "magenta"))
        linkgc = await Gita.groupInviteCode (from)
      yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
      Gita.sendMessage(from, yeh, text, {quoted: reply})
        break;
case 'add':
    if (args.length < 1) return reply(`Ketik ${prefix}add nomernya\ncontoh ${prefix}add 6289666380537`)
    if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
    try {
      num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
      Gita.groupAdd(from, [num])
      console.log(color('[ ADD MEMBER ]', 'cyan'))
    } catch (e) {
      console.log('Error :', e)
      reply('Gagal menambahkan target, mungkin karena di private')
    }
    break;
    case 'tagall':
      if (!isGroup) return reply(mess.group)
      if (!isGroupAdmins) return reply(mess.admin)
      members_id = []
      let ono = 1
      teks = ''
      for (let mem of groupMembers) {
        teks += `${q}`
        teks += `   ${ono++}. @${mem.jid.split('@')[0]}\n`
        members_id.push(mem.jid)
      }
      let tex = `• *Nama Group :* ${groupName}\n• *Total Member :* ${members_id.length}\n\n${teks}\n`
      mentions(tex, members_id, true)
    break;
      case 'kick':
        if (!isOwner && !gita.key.fromMe && !isGroupAdmins) return reply('Anda Siapa ?')
        if (!isGroupAdmins) return reply('Bot not admin!')
        if (!isGroup) return
          console.log(color(`[ ${command} ]`, 'magenta'))
        if (gita.message.extendedTextMessage === null || gita.message.extendedTextMessage === undefined) return;
        if (gita.message.extendedTextMessage.contextInfo.participant === undefined) {
        entah = gita.message.extendedTextMessage.contextInfo.mentionedJid
        if (entah.length > 1) {
        var mems_ids = []
        for (let ids of entah) {
        mems_ids.push(ids)
        }
        Gita.groupRemove(from, mems_ids)
        } else {
        Gita.groupRemove(from, [entah[0]])
        }
        } else {
        entah = gita.message.extendedTextMessage.contextInfo.participant
        Gita.groupRemove(from, [entah])
        }
        if (gita.message.extendedTextMessage != undefined){
          mentioned = gita.message.extendedTextMessage.contextInfo.mentionedJid
          Gita.groupRemove(from, mentioned)
      } else {
          Gita.groupRemove(from, [args[0] + '@s.whatsapp.net'])
      }
        break;
  case 'jadibot':
    console.log(color('[ MENU JADI BOT ]', "magenta"))
        buttons = [{buttonId: `${prefix}jadibots`,buttonText:{displayText: `🔗 Jadi Bot Sementara`},type:1},{buttonId:`${prefix}listbot`,buttonText:{displayText:'🔗 List Bot Sementara'},type:1},{buttonId:`${prefix}stopjadibot`,buttonText:{displayText:'🔗 Stop Dari Bot Sementara'},type:1}]
        buttonsMessage = {footerText: `XiXiXi 🗿`,
        contentText:`Ingat, Ini hanya sementara .. \n\nSilahkan Di Pilih yak ${pushname}`,buttons,headerType:1}
        prep = await Gita.prepareMessageFromContent(from,{buttonsMessage},{ sendEphemeral: true, quoted: gita })
        Gita.relayWAMessage(prep)
        break;
    case 'jadibots':
    console.log(color('[ JADI BOT SEMENTARA ]', "magenta"))
        if(gita.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
        jadibot(reply,Gita,from)
        break;
    case 'listbot':
    console.log(color('[ LIST BOT SEMENTARA ]', "magenta"))
        let tekss = '「 *LIST JADIBOT* 」\n'
        for(let i of listjadibot) {
        tekss += `
*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
        }
        reply(tekss)
        break;
    case 'stopjadibot':
    console.log(color(`[ STOP JADI BOT SEMENTARA ]`, 'magenta'))
        if(gita.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
        stopjadibot(reply)
        break;
    case 'voting':
    console.log(color('[ VOTING MENU ]', "magenta"))
        buttons = [{buttonId: `${prefix}vote`,buttonText:{displayText: `🔗 Memulai Sesi Voting`},type:1},{buttonId:`${prefix}delvote`,buttonText:{displayText:'🔗 Menghentikan Sesi Voting'},type:1}]
        buttonsMessage = {footerText: `XiXiXi 🗿`, imageMessage: imageMsg,
        contentText:`Menu Voting .. \n\nSilahkan Di Pilih yak ${pushname}`,buttons,headerType:1}
        prep = await Gita.prepareMessageFromContent(from,{buttonsMessage},{ sendEphemeral: true, quoted: gita })
        Gita.relayWAMessage(prep)
        break;
    case 'vote':
    console.log(color('[ VOTE SESION ]', "magenta"))
        if(!isGroupAdmins && !gita.key.fromMe) return 
        if(!isGroup) return reply(mess.only.group)
        if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
        if(!q) return reply(`${petik}VOTING (Pemungutan Suara)${petik}\n\nketik voting pertanyaan-pilihan 1-pilihan 2-durasi voting\nContoh:\nvoting makan apa hari ini-nasi-mie-1\n\nNote:\n✅ Angka 1 mewakili durasi voting 1 menit\n✅ Angka 2 mewakili durasi voting 2 menit\nDst.`)
        tia = args.join(' ').split('-')
        tanya = tia[0]
        jawab1 = tia[1]
        jawab2 = tia[2]
        waktunya = tia[3]
        if(!Number(waktunya)) return reply('masukan angka di baris ke 4\nContoh: 1-9999\n1 = 1 Menit')
        await mentions(`${petik}Sesi Voting Di Mulai${petik}` +`\n\n${petik}Durasi Voting : ${waktunya} Menit${petik}\n\n` + `Pilihan :\n► ${petik}${jawab1}${petik}\n► ${petik}${jawab2}${petik}\n\n*Pertanyaan :* ${petik}${tanya}${petik}`,true)
        addVote(from,tanya,jawab1,jawab2,waktunya,reply)
        break;
  case 'infogc':
case 'infogroup':
case 'groupinfo':
case 'info':
case 'ingpo':
console.log(color('[ INFO GC ]', "magenta"))
Gita.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
  try {
  ppUrl = await Gita.getProfilePicture(from)
    } catch {
  ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
capt = `${petik}• Nama Group${petik} : *${groupName}*\n`
capt += `${petik}• Dibuat Pada\n› Tanggal : ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY')}${petik}\n`
capt += `${petik}› Jam     : ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss')}${petik}\n`
capt += `${petik}› Oleh    : @${groupMetadata.owner.split('@')[0]}${petik}\n\n`
capt += `${petik}• Total Admin${petik} : *${groupAdmins.length}* ${petik}admin${petik}\n`
capt += `${petik}• Total Member${petik} : *${groupMembers.length}* ${petik}member${petik}\n`
capt += `${petik}• Description${petik} :\n${petik}${groupDesc ? groupDesc : '-'}${petik}\n\n`
capt += `${petik}🛠️ Welcome${petik} :\n${petik}⦿ ${isWelkom ? 'Aktif' : 'Tidak Aktif'}${petik}\n\n`
capt += `${petik}🛠️ Anti Link${petik} :\n${petik}⦿ ${isAntiLink ? 'Aktif' : 'Tidak Aktif'}${petik}\n\n`
capt += `${petik}🛠️ Anti Hide Tag${petik} :\n${petik}⦿ ${isAntihidetag ? 'Aktif' : 'Tidak Aktif'}${petik}\n\n`
capt += `${petik}🛠️ Anti Bule${petik} :\n${petik}⦿ ${isKickarea ? 'Aktif' : 'Tidak Aktif'}${petik}\n`
buffer = await getBuffer(ppUrl)
Gita.sendMessage(from, buffer, image, {quoted: gita,caption:capt, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'antilink':
  if (!isGroup) return reply("Khusus di grup");
  if (!isOwner) return reply("Anda Siapa ?");
  console.log(color('[ ANTI LINK ]', 'cyan'))
  if (args[0] == "on") {
    if (isAntiLink) return reply("Sudah aktif!!");
    console.log(color('[ ANTI LINK == ON ]', 'cyan'))
    antilink.push(from);
    fs.writeFileSync(
      "./database/antilink.json",
      JSON.stringify(antilink)
    );
    reply("Sukses mengaktifkan antilink!");
  } else if (args[0] == "off") {
    console.log(color('[ ANTI LINK == OFF ]', 'cyan'))
    antilink.splice(from, 1);
    fs.writeFileSync(
      "./database/antilink.json",
      JSON.stringify(antilink)
    );
    reply("Sukses mematikan antilink!");
  } else if (!q) {
    sendButMessage(from, `MODE ANTI LINK`, `Silahkan pilih salah satu`, [
      {
        buttonId: `${prefix}antilink on`,
        buttonText: {
          displayText: `on`,
        },
        type: 1,
      },
      {
        buttonId: `${prefix}antilink off`,
        buttonText: {
          displayText: `off`,
        },
        type: 1,
      },
    ]);
  }
  break;
  case 'antihidetag':
    if (!isGroup) return fakegroup("Khusus di grup");
    if (!isGroupAdmins && !isOwner) return fakegroup("Khusus admin");
    console.log(color('[ ANTI HIDE TAG ]', 'magenta'))
    if (args[0] == "on") {
      if (isAntihidetag) return fakegroup("Sudah aktif!!");
      console.log(color('[ ANTI HIDE TAG == ON ]', 'magenta'))
      antihidetg.push(from);
      fs.writeFileSync(
        "./database/antihidetag.json",
        JSON.stringify(antihidetg)
      );
      fakegroup("Sukses mengaktifkan antihidetag!");
    } else if (args[0] == "off") {
      console.log(color('[ ANTI HIDE TAG == OFF ]', 'magenta'))
      antihidetg.splice(from, 1);
      fs.writeFileSync(
        "./database/antihidetag.json",
        JSON.stringify(antihidetg)
      );
      fakegroup("Sukses mematikan antihidetag!");
    } else if (!q) {
      sendButMessage(
        from,
        `MODE ANTIHIDETAG`,
        `Silahkan pilih salah satu`,
        [
          {
            buttonId: `${prefix}antihidetag on`,
            buttonText: {
              displayText: `on`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}antihidetag off`,
            buttonText: {
              displayText: `off`,
            },
            type: 1,
          },
        ]
      );
    }
    break;
    case 'antibule':
  case '62':
    if (!isGroup) return fakegroup("Khusus di grup");
    if (!isGroupAdmins && !isOwner) return reply("Anda Siapa ?");
    console.log(color('[ ANTI BULE ]', 'magenta'))
    if (args[0] == "on") {
      if (isKickarea) return fakegroup("Sudah aktif!!");
      console.log(color('[ ANTI BULE == ON ]', 'magenta'))
      kickarea.push(from);
      fs.writeFileSync(
        "./database/antibule.json",
        JSON.stringify(kickarea)
      );
      reply("Sukses mengaktifkan Area +62 Only!");
    } else if (args[0] == "off") {
      console.log(color('[ ANTI BULE == OFF ]', 'magenta'))
      kickarea.splice(from, 1);
      fs.writeFileSync(
        "./database/antibule.json",
        JSON.stringify(kickarea)
      );
      reply("Sukses mematikan kickarea!");
    } else if (!q) {
      sendButMessage(from, `MODE +62 ONLY`, `Silahkan pilih salah satu`, [
        {
          buttonId: `${prefix}62 on`,
          buttonText: {
            displayText: `on`,
          },
          type: 1,
        },
        {
          buttonId: `${prefix}62 off`,
          buttonText: {
            displayText: `off`,
          },
          type: 1,
        },
      ]);
    }
    break;
  case 'caripesan':
        if (!q) return reply(`reply ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
        console.log(color(`[ ${command} ]`, 'magenta'))
        reply(mess.wait)
        xtext = args.join(' ')
        cond = xtext.split(" ")
        a = await Gita.searchMessages(xtext, from, 10, 1)// count 10 
        fox = '*「 Message Search 」*\n\n'
        num = 0
        for (j of a.messages){
            num += 1
            if (j.message.conversation) {
                if (j.key.fromMe){ 
                    fox += num+`. Sender : `+Gita.user.jid+`\n    Msg : `+j.message.conversation+`\n    MsgID : `+j.key.id+`\n    Type : conversation\n\n`
                }else{
                    fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
                } 
            }
            else if (j.message.extendedTextMessage){
                if (j.key.fromMe){ 
                    fox += num+'. Sender : '+Gita.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
                }else{
                    fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
                } 
            }
        }
        reply(fox)
        break;
  case 'lirik':
    console.log(color(`[ ${command} ]`, 'magenta'))
        if(!q) return reply('lagu apa?')
        ini_link = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=Lucky&query=${q}`)
      console.log(color(ini_link.message, 'magenta'))
      a = ini_link.result
      reply(a)
        break;
  case 'ping':
    console.log(color('[ PING ]', "magenta"))
        const latensi = speed() - timestamp
      exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString('utf-8')
          const teks = child.replace(/Memory:/, "Ram:")
          const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
          reply(pingnya)
      })
        break;
  case 'kalkulator':
    console.log(color(`[ ${command} ]`, 'magenta'))
        if (args.length < 1) return reply(`Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
        const Math_js = require('mathjs')
        mtk = body.slice(11)
        if (typeof Math_js.evaluate(mtk) !== "number") {
            reply(`"${mtk}", bukan angka!\nKirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
        } else {
            reply(`*「MATH」*\n\n*Hasil* : ${mtk} = ${Math_js.evaluate(mtk)}`)
        }
        break;
    case 'online':
    case 'on':
    if (!isGroup) return reply(mess.only.group)
    console.log(color('[ LIST ONLINE ]', "magenta"))
        let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
      let online = [...Object.keys(Gita.chats.get(ido).presences), Gita.user.jid]
      Gita.sendMessage(from, 'List yang sedang Online:\n\n' + online.map(v => '-->@' + v.replace(/@.+/, '')).join`\n`, text, { quoted: gita, contextInfo: { mentionedJid: online }
        })
      break;
  case 'reminder':
    if (!q)
      return reply(
        `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
      );
    aruk = body.slice(8)
    const messRemind = aruk.split("-")[0];
    const timeRemind = aruk.split("-")[1];
      typeRemind = "Text";
    const parsedTime = ms(toMs(timeRemind));
    reminder.addReminder(
      sender,
      messRemind,
      typeRemind,
      timeRemind,
      _reminder
    );
    if (!isQuotedImage && !isQuotedVideo && !isQuotedAudio && !isQuotedSticker) {
      await Gita.sendMessage(from,`── 「 REMINDER 」 ──

Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ Untuk: @${sender.split("@")[0]}
    `,text, { contextInfo: { mentionedJid: [sender]}});
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              Gita.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
  case 'translate':
    console.log(color('[ TRANSLATE ]', "magenta"))
        if (args.length == 0) return reply(`Contoh : ${command} en Tahu Bacem`)
        kode_negara = args[0]
        args.shift()
        ini_txt = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolhuman}&text=${ini_txt}`)
        console.log(get_result.message)
        get_result = get_result.result
        init_txt = `From : ${get_result.from}\n`
        init_txt += `To : ${get_result.to}\n`
        init_txt += `Original : ${get_result.original}\n`
        init_txt += `Translated : ${get_result.translated}\n`
        init_txt += `Pronunciation : ${get_result.pronunciation}\n`
        reply(init_txt)
        break;
   case 'kodebahasa':
  reply(`*List Kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh `)
  break;
  case 'wame':
    console.log(color('LINK WA', "yellow"))
        Gita.updatePresence(from, Presence.composing)
        options = {
            text: `「 *Nomor Whatsapp* 」\n\n_Request by_ : _@${sender.split('@')[0]}_\n\nLink WhatsApp : _https://wa.me/${sender.split("@s.whatsapp.net")[0]}_\n==================================\nApi WhatsApp : \n_https://api.whatsapp.com/send?phone=${sender.split("@")[0]}_`,
            contextInfo: { mentionedJid: [sender] }
        }
        Gita.sendMessage(from, options, text, { quoted: gita } )
        break;
  case 'welcome':
  if (!isGroup) return reply(mess.group)
        if (!isGroupAdmins) return reply(mess.admin)
        if (args.length < 1) return reply(`Ketik,\n*${prefix}welcome* ON (Mengaktifkan Fitur)\n*${prefix}welcome* OFF (Menonaktifkan Fitur)`)
        if ((args[0]) === 'ON') {
          if (isWelkom) return reply('Fitur Welcome sudah Aktif')
          welkom.push(from)
          fs.writeFileSync('./src/data/welcome.json', JSON.stringify(welkom))
          reply('Sukses Mengaktifkan fitur Welcome di Group ini')
        } else if ((args[0]) === 'OFF') {
          welkom.splice(from, 1)
          fs.writeFileSync('./src/data/welcome.json', JSON.stringify(welkom))
          reply('Sukses Menonaktifkan fitur Welcome di Group ini')
        } else {
          reply('ON / OFF (Gunakan Huruf Kapital)')
        }
      break
		default:break
		}
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     Gita.sendMessage(`6287823655350@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n─────「 *AMJ26-ERROR* 」─────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer AMJ26",body:"",previewType:"PHOTO",thumbnail:thumb,sourceUrl:"https://wa.me/628155266668?text=Permisi kak, Bot eror"}}})
	}
    }
    }
    }
    }
    }
    }