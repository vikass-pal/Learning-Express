const express = require('express');
const app = express(); 

let port = 3000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})

// app.use((req,res) => {
//     console.log("Req received");
//     let code = `<h1>hello sir</h1><ul><li>apple</li><li>banana</li><li>cherry</li></ul>`;
//     res.send(
//         code
//     );
// });

app.get("/", (req,res) => {
    res.send("Req received at root");
});

app.get("/about",(req, res) => {
    console.log("Req received at about");
    res.send("<h1>About Page</h1>");
});

app.get("/search",(req, res) => {
    console.log("Req received at search");
    res.send("<h1>search Page</h1>");
});

app.get("*", (req,res) => {
    console.log("Req received at wildcard");
    res.send("<h1>404 Page Not Found</h1>");
});

app.post("/", (req,res) => {
    res.send("you sent a Post req");
});
