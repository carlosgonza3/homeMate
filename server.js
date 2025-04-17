const express = require('express');
const app = express();
const path = require('path');

// Serve static assets (JS, CSS, images) from /public
app.use(express.static(path.join(__dirname, 'public')));

// Sets View engine to EJS to use templates
app.set("view engine", "ejs");

const PORT = 3300;

app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
})

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/pets", (req, res) => {
    res.render("pets");
});

app.get("/find", (req, res) => {
    res.render("find");
});

app.get("/dogcare", (req, res) => {
    res.render("dogcare");
});

app.get("/catcare", (req, res) => {
    res.render("catcare");
});

app.get("/giveaway", (req, res) => {
    res.render("giveaway");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/privacy", (req, res) => {
    res.render("privacy");
});


app.get('/pet-images/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'pets', req.params.filename);
    res.sendFile(filePath);
  });