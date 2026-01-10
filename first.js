const fs = require('fs');




console.log("Hello from first.js");

fs.writeFile("output.text", "Written by first.js", (err) => {

    if (err)  console.log("Error writing file:", err);
    else console.log("File written successfully.");
})