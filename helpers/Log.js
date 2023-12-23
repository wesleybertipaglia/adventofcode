class Log {
    constructor(fileName) {
        this.fs = require('fs');
        this.path = require('path');
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
        const pathToFile = this.path.dirname(this.fileName);
        if (!this.fs.existsSync(pathToFile)) {
            this.fs.mkdirSync(pathToFile);
        }

        this.fs.writeFile(this.fileName, content, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('File cleared successfully');
        });
    }

    Clear() {
        this.Write("");
    }
}

module.exports = Log;