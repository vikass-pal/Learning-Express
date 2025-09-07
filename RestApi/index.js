const express = require('express');
const app = express();
const port = 8080;
const path = require("path");
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req,res) => {
    res.send("server working well");
});
let posts = [
    {
        id: "vikas",
        title: "Post 1",
        content: "This is the content of post 1"
    },
    {
        id: "john",
        title: "Post 2",
        content: "This is the content of post 2"
    },
    {
        id: "alice",
        title: "Post 3",
        content: "This is the content of post 3"
    }
];
app.get("/posts",(req,res) => {
    res.render("index.ejs", { posts });
});
app.get("/posts/new",(req,res) => {
    res.render("new.ejs");
})
app.post("/posts", (req,res)  => {
    let {title, content} = req.body;
    posts.push({title,content});
    res.redirect("/posts");
});
app.get("/posts/:id",(req,res) => {
    let {id} = req.params;
   let post = posts.find((p) => id === p.id);
   console.log(post);
    res.send("You have requested for post with id: ");
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});