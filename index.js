var clc = require("cli-color");
let ascii_text_generator = require('ascii-text-generator');
const chokidar = require('chokidar');
const fs = require('fs');
const prompt = require('prompt-sync')();
const fetch = require("node-fetch");
const DiscordRPC = require('discord-rpc');

var userid = ""

//Get Discord User
const clientId = '1040393005640732683';
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
rpc.on('ready', () => {
  console.log('Authed for Discord User',rpc.user.username+ "#"+rpc.user.discriminator ,"(",rpc.user.id, ")");
  userid = rpc.user.id
});
rpc.login({ clientId }).catch(console.error);


//Create ASCII Text
let input_text = "RAVENWOOD";
let ascii_text =ascii_text_generator(input_text,"2");
let input_text2 = " AVI LOGGER";
let ascii_text2 =ascii_text_generator(input_text2,"2");
//Send Welcome Text
console.log(clc.magenta("####################################################################################"))
console.log((clc.magenta(ascii_text)));
console.log((clc.magentaBright(ascii_text2)));
console.log(clc.magenta("####################################################################################"))
console.log(clc.red("------------------------------ WATCHING VRCHAT CACHE -------------------------------"))
//Let user define cache location [TODO: SAVE TO CONFIG IN APPDATA SO USER DOESN'T HAVE TO ENTER EVERY TIME]
var cacheloc = prompt('Enter VRCHAT Cache location (Leave blank for default "%APPDATA%/LocalLow/VRChat/VRChat/Cache-WindowsPlayer"): ');
if (cacheloc === "") {
  var appdataloc = `${process.env.APPDATA}`.replace("\\Roaming","")
  cacheloc = `${appdataloc}`.replace("\\","/") + "/LocalLow/VRChat/VRChat/Cache-WindowsPlayer"
} else {
  cacheloc.replace("\\","/")
}
//Let user define if they want to scan cache before logging
var initial = prompt('Do you want to scan your cache before logging? (Y/N): ');
if (initial === "Y") {
    var login = false
} else {
  cacheloc.replace("\\","/")
    var login = true
}

watch()

function readCache(filePath, untilText) {
  try {
    const buffer = fs.readFileSync(filePath);
    const bufferLimit = untilText.length;

    const chunkSize = Math.ceil(buffer.length / 4);
    let startIndex = 0;
    let endIndex = chunkSize;

    for (let i = 0; i < 4; i++) {
      const bufferSlice = buffer.slice(startIndex, endIndex);
      const bufferStr = bufferSlice.toString('ascii');
      const index = bufferStr.indexOf(untilText);

      if (index !== -1) {
        const subBuffer = bufferSlice.slice(index + bufferLimit);
        const subBufferStr = subBuffer.toString('ascii');
        const aviIDIndex = subBufferStr.indexOf('avtr_');

        if (aviIDIndex !== -1) {
          const aviID = subBufferStr.substring(aviIDIndex + 5, subBufferStr.indexOf('_', aviIDIndex + 5));
          return `avtr_${aviID}`;
        }
      }

      startIndex = endIndex;
      endIndex += chunkSize;
    }

    return null;
  } catch (e) {
    //console.error(e);
    return null;
  }
}





async function watch() {
  var watcher = chokidar.watch(cacheloc, {ignored: /^\./, persistent: true, ignoreInitial:login});

  watcher.on('add', async function(path) {
    if (`${path}`.includes('_data') === true) {
      var data = readCache(path, 'prefab-id-v1');
      if (data === null || data.length !== 41) {
        console.log(clc.red('FOUND AVATAR 📕 ') + ' ' + 'BROKEN! DISCARDING!');
      } else {
        console.log(clc.green('FOUND AVATAR 📗 ') + ' ' + data);
        putAvatars2(data)
      }
    }
    
  });
}

async function putAvatars2(id2) {
  try {
      const ids = `[{"id": "${id2}", "userid": "${userid}"}]`
      const response = fetch(`https://vrcdbprivate.ravenwood.dev/putavatarauth.php`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
            "Cache": "no-cache",
            "User-Agent": "LuasVRCuserinfoDiscordBot/1.4.1 contact@ravenwood.dev"
          },
          credentials: "same-origin",
          body: ids
      });
      //console.log(await response)
} catch(err) {
      //console.log('Error parsing JSON string:', err)
  }

}
