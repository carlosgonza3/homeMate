const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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

app.post("/findPets", (req, res) => {

    const type = req.body.type;
    console.log(type);
    const breed = req.body.breed;
    console.log(breed);
    const age = req.body.age;
    console.log(age);
    const gender = req.body.gender;
    console.log(gender);
    const compatibility = req.body.compatibility;
    console.log(compatibility);
    
    const fs = require('fs');
    const path = require('path');
  
    const data = fs.readFileSync(path.join(__dirname, "data", "pets.txt"), "utf-8");
  
    const filteredPets = [];
    const allImages = fs.readdirSync(path.join(__dirname, "data", "pets"));

    for (const line of data.trim().split("\n")) {
        const [id, username, petType, breedText, petAge, petGender, friendly, comment] = line.split(":");
        const ageGroup = petAge;

    if (
            (type && type !== "none" && petType !== type) ||
            (breed && breed !== "none" && !breedText.toLowerCase().includes(breed.toLowerCase())) ||
            (age && age !== "none" && age !== ageGroup) ||
            (gender && gender !== "none" && gender !== petGender) ||
            (compatibility && compatibility !== "none" && !friendly.includes(compatibility))
        ) {
            continue;
        }

        const images = allImages.filter(filename => {
            return filename.startsWith(id + "-") && (
                filename.endsWith(".jpg") || filename.endsWith(".jpeg") || filename.endsWith(".png")
            );
        });

        filteredPets.push({
            id,
            type: petType,
            breed: breedText,
            age: ageGroup,
            gender: petGender,
            friendly,
            comment,
            images,
            imagePosition: 0,
            interested: false,
        });
    }

    res.render("pets", { pets: filteredPets });
});