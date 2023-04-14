var clc = require("cli-color");
const chokidar = require('chokidar');
const fs = require('fs');
const fetch = require("node-fetch");
const DiscordRPC = require('discord-rpc');
const { auth, failed, success, log, uiQuestion } = require('./uibuilder.js');
const config = require('./configmanager');


//create config file in LocalAppData Folder under Ravenwood directory
config.createConfig()
//get config file value from config store
const data = config.readConfig();
var ccacheloc = data.cachelocation



var userid = ""
var cacheloc = ""


//Get Discord User
async function connectDC() {
  try {
    const clientId = '1040393005640732683';
    const rpc = new DiscordRPC.Client({ transport: 'ipc' });
    rpc.on('ready', () => {
      auth(` ${rpc.user.username}#${rpc.user.discriminator}`);
      userid = rpc.user.id
    });
    let login = await rpc.login({ clientId })
  } catch  {

  }
}

function getcachelocation() {
  return new Promise(resolve => {
    uiQuestion(" Cache Location ", 'Enter VRCHAT Cache location (Leave blank for default)', val  => resolve(val))});
}
function promtloginitial() {
  return new Promise(resolve => {
    uiQuestion(" Inital Log ", 'Do you want to scan your cache before logging? (Y/N)', val  => resolve(val))});
}

checkDC()



auth("NOT AUTHED")
success("0")
failed("0")

async function checkDC() {
  var i = 0;
  //await new Promise(r => setTimeout(r, 200000));
  try {
    //log("Connecting to Discord RPC...")
    while (userid === "") {
      connectDC()
      if (i === 5) {
        log("Failed to connect to Discord RPC, try restarting Discord or running as Administrator! Closing in 5 seconds...")
        i++
        await new Promise(r => setTimeout(r, 5000));
        process.exit()
      } else if (i === 6) {
      } else {
        auth("(Attempt " + (i+1) + "/5)")
        await new Promise(r => setTimeout(r, 1000));
        i++
      }

    }
    if (ccacheloc === undefined) {
      cacheloc = await getcachelocation()
      if (cacheloc === null) {
        var appdataloc = `${process.env.APPDATA}`.replace("\\Roaming","")
        cacheloc = `${appdataloc}`.replace("\\","/") + "/LocalLow/VRChat/VRChat/Cache-WindowsPlayer"
      } else {
        cacheloc.replace("\\","/")
      }
      //save cacheloc to config file
      config.writeConfig({ cachelocation: cacheloc });
      log("Cache location saved to config file! (%appdata%/Ravenwood/config.json)")
    } else {
      cacheloc = ccacheloc
    }

    initial = await promtloginitial()
    if (initial === "Y" || initial === "y") {
        var login = false
    } else {
      cacheloc.replace("\\","/")
        var login = true
    }
    watch(cacheloc, login)
  } catch (e) {
  }
  
}



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

var successi = 0
var failedi = 0



async function watch(cacheloc, login) {
  var watcher = chokidar.watch(cacheloc, {ignored: /^\./, persistent: true, ignoreInitial:login});

  watcher.on('add', async function(path) {
    if (`${path}`.includes('_data') === true) {
      var data = readCache(path, 'prefab-id-v1');
      if (data === null || data.length !== 41) {
        log(`${clc.red('FOUND AVATAR - ')}BROKEN! DISCARDING!`);
        failedi++
        failed(`${failedi}`)
      } else {
        log(`${clc.green('FOUND AVATAR - ')}${data}`);
        successi++
        success(`${successi}`)
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
      const auth = await response.json();

      if (typeof await auth.error !== 'undefined') {
        throw ''
      }
      //console.log(await response)
} catch(err) {
      //console.log('Error parsing JSON string:', err)
  }

}
