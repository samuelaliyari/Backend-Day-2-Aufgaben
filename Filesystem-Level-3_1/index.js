const fs = require("fs");


const addText = (text) => fs.appendFile("./myDocument/data.txt", text, (err) => err ? console.log(err) : null)

const checkAppend = (content, callback) => {
    if (!fs.existsSync("./myDocument")) {
        fs.mkdir("./myDocument", (err) => {
            if (err) {
                return console.log(err)
            }
            callback(`${content}\n`)
        })

    } else {
        callback(`${content} again\n`)
    }
}


checkAppend("it is a new text", addText)