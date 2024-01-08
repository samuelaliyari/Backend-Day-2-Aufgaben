const fs = require("fs")


// Importiere die json - Datei in deiner index.js und nutze das File System, um die JSON Datei in eine neue.txt - Datei zu schreiben.

fs.readFile("./data.json", (err, buffer) => {
    if (err) {
        console.log(err)
    }
    fs.writeFile("./data.txt", `${buffer.toString()}`, (err) => err ? console.log(err) : null)
})