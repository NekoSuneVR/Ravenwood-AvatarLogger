const fs = require('fs');
const os = require('os');
const path = require('path');

const configPath = path.join(os.homedir(), 'AppData', 'Roaming', 'Ravenwood', 'config.json');
console.log(configPath)

// function to create the config file if it doesn't exist
function createConfig() {
  if (!fs.existsSync(configPath)) {
    fs.mkdirSync(path.dirname(configPath), { recursive: true });
    fs.writeFileSync(configPath, JSON.stringify({}));
  }
}

// function to read from the config file
function readConfig() {
  try {
    const configData = fs.readFileSync(configPath);
    return JSON.parse(configData);
  } catch (err) {
    console.error('Error reading config file:', err);
    return {};
  }
}

// function to write to the config file
function writeConfig(data) {
  try {
    fs.writeFileSync(configPath, JSON.stringify(data));
  } catch (err) {
    console.error('Error writing to config file:', err);
  }
}

// export the functions for use in other modules
module.exports = {
  createConfig,
  readConfig,
  writeConfig
};
