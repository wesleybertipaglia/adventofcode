const fs = require('fs');

class Log {
    constructor(fileName) {
        this.fs = fs;
        this.fileName = fileName;
    }

    Append(content) {
        this.fs.appendFile(this.fileName, content, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`File ${this.fileName} written successfully`);
        });
    }

    Write(content) {
        this.fs.writeFile(this.fileName, content, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('File cleared successfully');
        });
    }

    Clear(content) {
        this.fs.writeFile(this.fileName, "", (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('File cleared successfully');
        });
    }
}

module.exports = Log;