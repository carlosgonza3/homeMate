let type;
let breed;
let age;
let gender;
let compatibility;
let children;
let comments;
let ownerFirstName;
let ownerLastName;
let ownerEmail;

function validate() {

    readFormData()
    let emptyflag = false;
    let firstMissingField = null;

    const typeMessage = document.getElementById("type-required");
    if (type === "") {
        typeMessage.innerText = "Pet type required"
        if (!firstMissingField) firstMissingField = document.getElementById("type-required");
        emptyflag = true;
    } else {
        typeMessage.innerText = ""
    }

    const breedMessage = document.getElementById("breed-required");
    if (breed === "") {
        breedMessage.innerText = "Pet breed required"
        if (!firstMissingField) firstMissingField = document.getElementById("breed-required");
        emptyflag = true;
    } else {
        breedMessage.innerText = ""
    }

    const ageMessage = document.getElementById("age-required");
    if (age === "") {
        ageMessage.innerText = "Pet age required"
        if (!firstMissingField) firstMissingField = document.getElementById("age-required");
        emptyflag = true;
    } else {
        ageMessage.innerText = ""
    }

    const genderMessage = document.getElementById("gender-required");
    if (gender === "") {
        genderMessage.innerText = "Pet gender required"
        if (!firstMissingField) firstMissingField = document.getElementById("gender-required");
        emptyflag = true;
    } else {
        genderMessage.innerText = ""
    }

    const compatibilityMessage = document.getElementById("compatibility-required");
    if (!(compatibilities) || compatibilities.length === 0){
        compatibilityMessage.innerText = "Pet compatibilities required"
        if (!firstMissingField) firstMissingField = document.getElementById("compatibility-required");
        emptyflag = true;
    } else {
        compatibilityMessage.innerText = ""
    }

    const childrenMessage = document.getElementById("childs-required");
    if (children === "") {
        childrenMessage.innerText = "Pet children compatibility required"
        if (!firstMissingField) firstMissingField = document.getElementById("childs-required");
        emptyflag = true;
    } else {
        childrenMessage.innerText = ""
    }

    const commentsMessage = document.getElementById("comments-required");
    if (comments === "") {
        commentsMessage.innerText = "Pet description required"
        if (!firstMissingField) firstMissingField = document.getElementById("comments-required");
        emptyflag = true;
    } else {
        commentsMessage.innerText = ""
    }

    const NameMessage = document.getElementById("owner-name-required");
    if (ownerFirstName === "") {
        NameMessage.innerText = "Owner first name required"
        if (!firstMissingField) firstMissingField = document.getElementById("owner-name-required");
        emptyflag = true;
    } else if (ownerFirstName.match(/[0-9]/)){
        NameMessage.innerText = "Name not valid";
        if (!firstMissingField) firstMissingField = document.getElementById("owner-name-required");
    } else {
        NameMessage.innerText = ""
    }

    const lastNameMessage = document.getElementById("owner-last-name-required");
    if (ownerLastName === "") {
        lastNameMessage.innerText = "Owner last name required"
        if (!firstMissingField) firstMissingField = document.getElementById("owner-last-name-required");
        emptyflag = true;
    } else if (ownerLastName.match(/[0-9]/)){
        lastNameMessage.innerText = "Name not valid";
        if (!firstMissingField) firstMissingField = document.getElementById("owner-last-name-required");
    } else {
        lastNameMessage.innerText = ""
    }


    const emailMessage = document.getElementById("owner-email-required");
    if (ownerEmail === "") {
        emailMessage.innerText = "Owner email required"
        if (!firstMissingField) firstMissingField = document.getElementById("owner-email-required");
        emptyflag = true;
    } else if (!ownerEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailMessage.innerText = "Invalid email address"
        if (!firstMissingField) firstMissingField = document.getElementById("owner-email-required");
        emptyflag = true;
    } else {
        emailMessage.innerText = ""
    }

    if (firstMissingField) {
        firstMissingField.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    return !emptyflag;
}



function readFormData() {
    type = document.getElementById("animal-type").value;
    console.log(type);
    breed = document.getElementById("animal-breed").value;
    console.log(breed);
    age = document.getElementById("animal-age").value;
    console.log(age);
    gender = document.getElementById("animal-gender").value;
    console.log(gender);

    compatibilities = [];
    if (document.getElementById("compatibility-dogs").checked) {
        compatibilities.push("dogs");
    }
    if (document.getElementById("compatibility-cats").checked) {
        compatibilities.push("cats");
    }
    if (document.getElementById("compatibility-unsure").checked) {
        compatibilities.push("unsure");
    }
    console.log(compatibilities);
    
    children = document.getElementById("compatibility-children").value;
    console.log(children);

    comments = document.getElementById("comments").value;
    console.log(comments);

    ownerFirstName = document.getElementById("owner-first-name").value;
    console.log(ownerFirstName);

    ownerLastName = document.getElementById("owner-last-name").value;
    console.log(ownerFirstName);

    ownerEmail = document.getElementById("owner-email").value;
    console.log(ownerEmail);
}

function resetForm() {

    const typeMessage = document.getElementById("type-required");
    typeMessage.innerText = "";

    const breedMessage = document.getElementById("breed-required");
    breedMessage.innerText = "";

    const ageMessage = document.getElementById("age-required");
    ageMessage.innerText = "";

    const genderMessage = document.getElementById("gender-required");
    genderMessage.innerText = "";

    const compatibilityMessage = document.getElementById("compatibility-required");
    compatibilityMessage.innerText = "";

    const childrenMessage = document.getElementById("childs-required");
    childrenMessage.innerText = "";

    const commentsMessage = document.getElementById("comments-required");
    commentsMessage.innerText = "";

    const NameMessage = document.getElementById("owner-name-required");
    NameMessage.innerText = "";

    const lastNameMessage = document.getElementById("owner-last-name-required");
    lastNameMessage.innerText = "";

    const emailMessage = document.getElementById("owner-email-required");
    emailMessage.innerText = "";

}

function handleCompatibilityCheckboxes() {
    const dogs = document.getElementById("compatibility-dogs");
    const cats = document.getElementById("compatibility-cats");
    const kids = document.getElementById("compatibility-unsure");

    if (kids.checked) {
        dogs.checked = false;
        cats.checked = false;
    } else {
        kids.checked = false;
    }
}

document.getElementById("compatibility-dogs").addEventListener("click", handleCompatibilityCheckboxes);
document.getElementById("compatibility-cats").addEventListener("click", handleCompatibilityCheckboxes);
document.getElementById("compatibility-unsure").addEventListener("click", handleCompatibilityCheckboxes);