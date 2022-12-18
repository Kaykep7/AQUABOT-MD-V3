const fs = require("fs")
const chalk = require("chalk")

//===================================== 

global.log0 = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"   //Logo Principal 

global.thumb = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"

global.err4r = "https://telegra.ph/file/0288eb08d973d4faba0b9.jpg"

global.numerodonoa = ["553175416530"] 

global.lolhuman = "RelzzAPIs"

global.banChats = false
	
global.wlcm = []

global.banChats = false

global.gcrevoke = [] 

global.packname = "AQUA BOT OFICIAL\nDONO LICHT SAN" //Marca D'água de Emojimix

global.packname2 = `#TeamAqua` //Segunda Marca d'água 

global.author = "LICHT SAN" // Pode Por Qualquer Coisa 

global.sessionName = "CONEXÃO DIVINA" //Nome que Vai Aparecer no Whatsapp, Após Ler o Qrcode

global.NomeDoBot = "AQUA BOT SUPREMACY" //Nome do Bot

global.linkgrupss = "https://chat.whatsapp.com/HowVmkSOG3k9kbhdZW2TVj" //Precisa Mudar Nada Não, Pq Não Mexi Nisso Aqui Ainda

global.prefix = "/" // Prefixo Que Vc Quer 

global.NickDono = "LICHT SAN" //Seu Nome Como Dono

global.websitex = "https://youtube.com/channel/UCCy_5Qpvgil8r-LyP9JF9Rw"

//===================================== 

global.mess = { 
    success: '*PRONTO!* 🤝🙂',
    
    admin: '*APNS ADM PODE UTILIZAR ESSE CMD!*',
    
    botAdmin: '*EU PRECISO SER ADM PRA FAZER A FUNÇÃO!*',
    
    owner: '*SOMENTE MEU DONO PODE UTILIZAR ESSE CMD, DESCULPE!*',
    
    group: '*COMANDO FEITO PRA GRUPO, DESCULPE!*',
    
    private: '*COMANDO FEITO PRA PV, DESCULPE!*',
    
    bot: '*RECURSO ESPECÍFICO DO USUÁRIO DO NÚMERO DO BOT*',
    
    wait: '*AGUARDE ESTOU ATENDENDO TEU PEDIDO!*',
    
    linkm: 'CADÊ O LINK? MDS HEIN',
    
    donosmt: '[❗] ESTE É UM RECURSO ESPECIAL PARA O MEU DONO ❌',
    
    premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
    
    ban: '*VOCÊ FOI  BANIDO PELO DONO, SE QUISER SER & DESBANIDO DO BOT FALA COM O DONO!.*'
}

//===================================== 


//===================================== 

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//===================================== 



//===================================== 


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
