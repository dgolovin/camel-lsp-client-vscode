'use strict';
const fs = require('fs');
const download = require('download')
var url = "https://github.com/camel-tooling/camel-language-server/releases/download/untagged-27364bc5f4ff78ca37a9/camel-lsp-server-1.0.0-SNAPSHOT.jar"

download(url).then(data => {
    fs.writeFileSync('./jars/language-server.jar', data);
});
