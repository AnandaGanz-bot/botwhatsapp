function handler(m) {
  const PhoneNumber = require('awesome-phonenumber')

   let ow = global.owner.map(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
//return ow[1]
  
   let owr = global.owner.map(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
//return owr[1].split('@')[0]
/*
let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 1,status: 200, surface: 200, message: `                   「 MY OWNER 」            `, orderTitle: 'Centauri', sellerJid: '0@s.whatsapp.net'}}}
*/
  //NGENTODDDDDDDDDDDDD
 let listOwner = new Array()
  
   listOwner.push({vcard : `BEGIN:VCARD\n
 VERSION:3.0\n
 N:; Re-;;;\n
 FN: Re- \n
 item1.TEL;waid=6285725012403:6285725012403\n
 item1.X-ABLabel:Busy\n
 URL;Web gwejh: https://github.com/AnandaGanz-bot\n
 EMAIL;Email Owner: anandaganz7@gmail.com\n
 ORG: ${me}\n
 TEL;Creator bot-md;waid=6285725012403:6285725012403\n
 END:VCARD`})
  
       conn.sendMessage(m.chat, { contacts: { displayName: listOwner, contacts: [{ listOwner }] } }, { quoted: m })
 } 

// ! Pilar kanjut

  /*
let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 1,status: 200, surface: 200, message: `                   「 MY OWNER 」            `, orderTitle: 'Centauri', sellerJid: '0@s.whatsapp.net'}}}
  let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:; Ananda;;;'
                    + 'FN: AnandaGanz\n' // full name
                    + 'ORG:Ananda;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285725012403:+62 857-2501-2403\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'AnandaGanz', contacts: [{ vcard }] } }, { quoted: ftroli })
m.reply(m.chat,'*Tuh nomor owner ku*\n*Chat jika PENTING*', m)
*/
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler






// @ Bekap 

/*
function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
*/
