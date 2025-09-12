import express from 'express';
const app = express();
const port = 8080;
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({extended:true}));


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.get("/", (req,res) => {
    res.send("server working well");
});
let posts = [
    {
        id: uuidv4(),
        title: "Post 1",
        content: "This is the content of post 1"
    },
    {
        id: uuidv4(),
        title: "Post 2",
        content: "This is the content of post 2"
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    posts.push({id, title, content});
    res.redirect("/posts");
});
app.get("/posts/:id",(req,res) => {
    let {id} = req.params;
     post = posts.find((p) => id === p.id);
    if(post) {
        res.render("show.ejs", { post });
    } else {
        res.status(404).send("Post not found");
    }
});

app.patch("/posts/:id",(req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.send("patch is workin");
})
app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});
app.delete("/posts/:id",(req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});