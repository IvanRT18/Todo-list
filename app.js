const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));   
app.use(express.static("public"));

let Items = ["Buy food", "cook food", "eat food"];

app.get("/", (req, res) =>{
    let today = new Date();
    let day = "";
    let option = {
        weekday: "long",
        year: "numeric",
        month: "long", 
        day: "numeric"
    }

    day = today.toLocaleDateString("en-GB", option);
    
    res.render("list", {kindOfDay: day, newEntries: Items});
});

app.post("/", (req, res) => {
    let item = req.body.newItem;
    Items.push(item);
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
