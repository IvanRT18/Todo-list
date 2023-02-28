const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));   
app.use(express.static("public"));

const Items = ["Buy food", "cook food", "eat food"];
const workItems = [];

app.get("/", (req, res) =>{
    const day = date.getDate();
    
    res.render("list", {listTitle: day, newEntries: Items});
});

app.post("/", (req, res) => {
    const item = req.body.newItem;
    
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }else{
        Items.push(item);
        res.redirect("/");
    }
})

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work", newEntries: workItems});
})

app.post("/work", (req, res) => {
    const item = req.body.newItem;
    workItems.push = item;
    res.redirect("/work");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
