const fs = require("fs");
const path = require("path");
const ResEdit = require('resedit');

function windowsPostBuild(output) {
    const exe = ResEdit.NtExecutable.from(fs.readFileSync(output));
    const res = ResEdit.NtExecutableResource.from(exe);
    const iconFile = ResEdit.Data.IconFile.from(fs.readFileSync('loggerfav.ico'));

    ResEdit.Resource.IconGroupEntry.replaceIconsForResource(
        res.entries,
        1,
        1033,
        iconFile.icons.map(item => item.data)
    );

    const vi = ResEdit.Resource.VersionInfo.fromEntries(res.entries)[0];

    vi.setStringValues(
        {lang: 1033, codepage: 1200},
        {
            ProductName: 'Ravenwood AviLogger',
            FileDescription: 'Ravenwood AviLogger',
            CompanyName: 'Ravenwood.dev',
            LegalCopyright: `Copyright Lua Ravenwood. MIT license.`
        }
    );
    vi.removeStringValue({lang: 1033, codepage: 1200}, 'OriginalFilename');
    vi.removeStringValue({lang: 1033, codepage: 1200}, 'InternalName');
    vi.setFileVersion(1, 0, 0, 1033);
    vi.setProductVersion(1, 0, 0, 1033);
    vi.outputToResourceEntries(res.entries);
    res.outputResource(exe);
    fs.writeFileSync(output, Buffer.from(exe.generate()));
}

windowsPostBuild("./ravenwood-avilogger.exe")