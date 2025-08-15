const express = require('express');
const app = express(); 

let port = 3000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})

app.use((req,res) => {
    console.log("Req received");
    let code = `<h1>hello sir</h1><ul><li>apple</li><li>banana</li><li>cherry</li></ul>`;
    res.send(
        code
    );
});