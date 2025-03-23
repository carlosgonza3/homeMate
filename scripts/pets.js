const petDirectory = "Pets/"

const pets = [
    {
        id: "d1",
        type: "d", 
        breed: "Golden Retriever", 
        age: 3,
        gender:"m", 
        friendly:"dog-cat-kids", 
        comment: "Loves fetch & belly rubs!", 
        images: ["d1-0.jpg", "d1-1.jpg", "d1-2.png"],
        imagePosition: 0,
        interested: false
    }, 
    {
        id: "c1",
        type: "c", 
        breed: "Persian", 
        age: 6, 
        gender:"m", 
        friendly:"cat-kids", 
        comment: "Snuggly lap cat & curious explorer!", 
        images: ["c1-0.jpg", "c1-1.jpg"],
        imagePosition: 0,
        interested: false
    },
    {
        id: "d2",
        type: "d",
        breed: "Maltese",  
        age: 1, 
        gender:"m", 
        friendly:"dog-cat-kids", 
        comment: "Loves long walks and squeaky toys!", 
        images: ["d2-0.jpg", "d2-1.jpg", "d2-2.jpg"],
        imagePosition: 0,
        interested: false
    },
    {
        id: "d3",
        type: "d",
        breed: "Belgian Shepherd",   
        age: 4, 
        gender:"m", 
        friendly:"kids", 
        comment: "Loyal companion and couch cuddler.", 
        images: ["d3-0.jpg"],
        imagePosition: 0,
        interested: false
    },
    {
        id: "c2",
        type: "c",
        breed: "Birman",
        age: 8,
        gender: "f",
        friendly: "none",
        comment: "Elegant and vocal, loves attention!",
        images: ["c2-0.jpg", "c2-1.jpg"],
        imagePosition: 0,
        interested: false
    },
    {
        id: "d8",
        type: "d",
        breed: "Schnauzer",
        age: 5,
        gender: "m",
        friendly: "dog-cat-kids",
        comment: "Smart, alert, and full of charm — ready to protect and play all in one day!",
        images: ["d8-0.jpeg", "d8-1.jpeg", "d8-2.jpeg"],
        imagePosition: 0,
        interested: false
    },
    {
        id: "d4",
        type: "d",
        breed: "Pug",
        age: 4,
        gender: "f",
        friendly: "dog-kids",
        comment: "Energetic, loves swimming and playing catch!",
        images: ["d4-0.jpg"],
        imagePosition: 0,
        interested: false
    },
    {
        id: "c3",
        type: "c",
        breed: "Siamese",
        age: 5,
        gender: "m",
        friendly: "cat-kids",
        comment: "Gentle giant with a heart of gold.",
        images: ["c3-0.jpeg", "c3-1.jpeg", "c3-2.jpeg"],
        imagePosition: 0,
        interested: false
    },
    {
        id: "d6",
        type: "d",
        breed: "French Bulldog",
        age: 2,
        gender: "f",
        friendly: "dog-cat",
        comment: "Loves snuggling on the couch and making everyone laugh with her goofy antics!",
        images: ["d6-0.jpeg"],
        imagePosition: 0,
        interested: false
    },
    {
        id: "d7",
        type: "d",
        breed: "Beagle",
        age: 3,
        gender: "f",
        friendly: "dog-cat",
        comment: "Adventurous spirit with a nose for fun — always up for a walk or sniffing session!",
        images: ["d7-0.jpeg", "d7-1.jpeg", "d7-2.jpeg"],
        imagePosition: 0,
        interested: false
    },
    {
        id: "c4",
        type: "c",
        breed: "Persian",
        age: 9,
        gender: "m",
        friendly: "cat",
        comment: "Calm, regal, and affectionate — a true lap king who adores quiet company.",
        images: ["c4-0.jpeg", "c4-1.jpeg"],
        imagePosition: 0,
        interested: false
    },
    {
        id: "d5",
        type: "d",
        breed: "Australian Shepherd",
        age: 3,
        gender: "m",
        friendly: "dog-cat-kids",
        comment: "Always curious, loves to sniff around!",
        images: ["d5-0.jpeg", "d5-1.jpeg"],
        imagePosition: 0,
        interested: false
    }
];

loadPage()

function loadPage() {
    loadGrid();
}

function loadGrid() {

    const grid = document.getElementById("grid");

    for (let i=0; i<pets.length; i++) {
        
        const card = buildCard(pets[i].id);

        grid.appendChild(card);

        populateCard(card, pets[i]);

        
    }
}

function buildCard(id) {
    
    const card = document.createElement("div");
    card.setAttribute("class", "card")

    card.innerHTML = `
        <div class="card-image-container" onclick="toggleImage('${id}')">
            <div class="pet-type-icon">
                    <p id="type-${id}">a</p>    
            </div>
            <div class="image-carousel-dots" id="dots-${id}">
                
            </div>
            <div class="image-fade"></div>
                <img id="image-${id}" src="https://placehold.co/330x350">
        </div>
        <div class="interested-button">
            <a onclick="toggleButton('${id}')">
                <img id="interested-button-${id}" src="https://placehold.co/60x60">
            </a>
        </div>
        <div class="card-details-container">
                <div class="card-detail-group">
                    <p><b> <pre>Breed: </pre></b></p>
                    <p class="light" id="breed-${id}"></p>
                </div>
                <div class="card-detail-group">
                    <p><b> <pre>Age: </pre></b></p>
                    <p class="light" id="age-${id}"></p>
                </div>
                <div class="card-detail-group">
                    <p><b> <pre>Gender: </pre></b></p>
                    <p class="light" id="gender-${id}"> </p>
                </div>
                <div class="card-detail-group">
                    <p><b> <pre>Friendly with: </pre></b></p>
                    <p class="light" id="compatibility-${id}"></p>
                </div>
                <div class="card-detail-group">
                    <p><b> <pre>Special Treat: </pre></b></p>
                </div>
                <div class="card-detail-group-center">
                    <p class="light" id="comment-${id}"></p>
                </div>
            </div>
    `;
    return card;
}

function populateCard(card, pet) {

    // Setting Type
    const type = document.getElementById(`type-${pet.id}`);

    if (pet.type == "c") {
        type.innerText = "🐱";
    } 

    if (pet.type == "d") {
        type.innerText = "🐶";
    }

    // Setting Images
    const image = document.getElementById(`image-${pet.id}`)

    if (!(pet.images[0] === undefined)) {
        image.setAttribute("src", petDirectory+String(pet.images[0]));
    }

    // Setting Dots
    const dots = document.getElementById(`dots-${pet.id}`);

    if (pet.images.length > 1) {

        const dot = document.createElement('div');
        dot.setAttribute("class","dot current");
        dot.setAttribute("id",`dot-${pet.id}-0`);

        dots.appendChild(dot);

        for (let i=1; i<pet.images.length; i++) {
            const dot = document.createElement('div');
            dot.setAttribute("class","dot"); 
            dot.setAttribute("id",`dot-${pet.id}-${i}`);       
            dots.appendChild(dot);
        }
    }

    // Setting Button
    const button = document.getElementById(`interested-button-${pet.id}`);
    button.setAttribute("src", "Assets/heart.png");

    // Hover effect
    button.addEventListener("mouseover", () => {
        button.setAttribute("src", pet.interested ? 
            "Assets/heart-x.png" : "Assets/heart-plus.png");
    });

    // Hover effect
    button.addEventListener("mouseout", () => {
        button.setAttribute("src", pet.interested ? 
            "Assets/heart-check.png" : "Assets/heart.png");
    });

    // Setting Breed
    const breed = document.getElementById(`breed-${pet.id}`);
    breed.innerText = pet.breed;

    // Setting Age
    const age = document.getElementById(`age-${pet.id}`);
    age.innerText = pet.age;

    // Setting gender
    const gender = document.getElementById(`gender-${pet.id}`);
    if (pet.gender == "f") {
        gender.innerText = "Female";
    } else {
        gender.innerText = "Male";
    }

    // Setting Compatibility
    const compatibility = document.getElementById(`compatibility-${pet.id}`);

    let petCompatibility = pet.friendly
    const arrayCompatibility = petCompatibility.split("-");
    let outCompatibility = "";
    for (let i=0; i<arrayCompatibility.length; i++) {
        if (arrayCompatibility[i] == "dog"){
            outCompatibility += "🐶 ";
        } else if (arrayCompatibility[i] == "cat"){
            outCompatibility += "🐱 ";
        } else if (arrayCompatibility[i] == "kids"){
            outCompatibility += "👶 ";
        } else if (arrayCompatibility[i] == "none"){
            outCompatibility += "Not a friendly pet"
        } else {
            outCompatibility += "Not Specified"
        }
    }
    compatibility.innerText = String(outCompatibility);

    // Setting Special Treat
    const specialTreat = document.getElementById(`comment-${pet.id}`);
    specialTreat.innerText = pet.comment;
}

function toggleImage(id) {

    const targetPet = pets.find(pet => pet.id === id);
    console.log(targetPet);

    const image = document.getElementById(`image-${id}`);

    if (targetPet.images.length>1) {
        let prev = targetPet.imagePosition;
        console.log(prev);
        targetPet.imagePosition = (targetPet.imagePosition+1)%targetPet.images.length;
        console.log(targetPet.imagePosition);
        image.setAttribute("src", petDirectory+targetPet.images[targetPet.imagePosition]);
        console.log(id);
        const prevDot = document.getElementById(`dot-${targetPet.id}-${prev}`);
        prevDot.setAttribute("class", "dot")
        const newDot = document.getElementById(`dot-${targetPet.id}-${targetPet.imagePosition}`);
        newDot.setAttribute("class", "dot current")
    }
}

function toggleButton(id) {
    const targetPet = pets.find(pet => pet.id === id);
    console.log(targetPet);

    const button = document.getElementById("interested-button-"+id)

    if (!targetPet.interested) {
        button.setAttribute("src", "Assets/heart-check.png");
        targetPet.interested = true;
        console.log("Toggle 1")
    } else {
        button.setAttribute("src", "Assets/heart.png");
        targetPet.interested = false;
        console.log("Toggle 2")
    }

}