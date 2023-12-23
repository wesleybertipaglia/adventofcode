class Log {
    constructor(fileName) {
        this.fs = require('fs');
        this.path = require('path');
        this.fileName = fileName;
    }

    Append(content) {
        try {
            this.fs.appendFile(this.fileName, content, (err) => {
                if (!err) console.log(`File ${this.fileName} appended successfully`);
            });
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    Write(content) {
        try {
            const pathToFile = this.path.dirname(this.fileName);
            if (!this.fs.existsSync(pathToFile)) {
                this.fs.mkdirSync(pathToFile);
            }

            this.fs.writeFile(this.fileName, content, (err) => {
                if (!err) console.log(`File ${this.fileName} written successfully`);
            });
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    Clear() {
        this.Write("");
    }
}

module.exports = Log;