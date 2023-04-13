const exe = require('@angablue/exe');

const build = exe({
    entry: './build.cjs',
    out: './Ravenwood-AviLogger.exe',
    pkg: [ '--public'], // Specify extra pkg arguments
    version: '1.1.1',
    target: 'node14-win-x64',
    icon: './loggerfav.ico', // Application icons must be in .ico format
    properties: {
        FileDescription: 'Lua Ravenwood',
        ProductName: 'Ravenwood Logger',
        LegalCopyright: 'Ravenwood Logger https://ravenwood.dev',
        OriginalFilename: 'Ravenwood-Logger.exe'
    }
});

build.then(() => console.log('Build completed!'));