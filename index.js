const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 3000;

app.get("/user/profile", (req, res) => {
    fs.readFile("views/index.html", (err,data) => {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
});

app.get("/auth/login", (req, res) => {
    fs.readFile("views/login.html", (err, data) => {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/html"});
            res.write("Error loading login page");
            return res.end();
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
});

app.use('/images', express.static(path.join(__dirname, 'images')));

// app.get("/images/test.jpg", (req, res) => {
//     fs.readFile("/images/test.jpg", (err,data) => {
//         if (err) {
//             return res.status(404).send("File not found");
//         }
//         res.writeHead(200, {"Content-Type": "image/jpg"});
//         res.write(data);
//         return res.end();
//     });
// });


app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});