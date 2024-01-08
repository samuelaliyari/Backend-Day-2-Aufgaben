const fs = require("fs");


const addText = (text) => fs.appendFile("./myDocument/data.txt", text, (err) => err ? console.log(err) : null)

if (!fs.existsSync("./myDocument")) {
    fs.mkdir("./myDocument", (err) => {
        if (err) {
            return console.log(err)
        }
        addText("this is me\n")
    })

} else {
    addText("this is me again\n")
}