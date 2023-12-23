const FS = require('fs');

class Log {
    constructor(fileName) {
        this.fs = FS;
        this.fileName = fileName;
    }

    Append(content) {
        fs.appendFile(this.fileName, content, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`File ${this.fileName} written successfully`);
        });
    }

    Write(content) {
        fs.writeFile(this.fileName, content, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('File cleared successfully');
        });
    }

    Clear(content) {
        fs.writeFile(this.fileName, "", (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('File cleared successfully');
        });
    }
}

module.exports = Log;