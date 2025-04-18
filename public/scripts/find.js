let type;
let breed;
let age;
let gender;
let compatibilities;

function validate() {

    readFormData();

    let emptyflag = false;
    let firstMissingField = null;

    const typeMessage = document.getElementById("type-required");
    if (type == "") {
        typeMessage.innerText = "Pet type requiered";
        if (!firstMissingField) firstMissingField = document.getElementById("type-required");
        emptyflag = true;
    } else {
        typeMessage.innerText = "";
    }

    const breedMessage = document.getElementById("breed-required");
    if (breed == "") {
        breedMessage.innerText = "Pet breed required";
        if (!firstMissingField) firstMissingField = document.getElementById("breed-required");
        emptyflag = true;
    } else {
        breedMessage.innerText = "";
    }

    const ageMessage = document.getElementById("age-required");
    if (age == "") {
        ageMessage.innerText = "Pet age required";
        if (!firstMissingField) firstMissingField = document.getElementById("age-required");
        emptyflag = true;
    } else {
        ageMessage.innerText = "";
    }

    const genderMessage = document.getElementById("gender-required");
    if (gender == "") {
        genderMessage.innerText = "Pet gender required";
        if (!firstMissingField) firstMissingField = document.getElementById("gender-required");
        emptyflag = true;
    } else {
        genderMessage.innerText = "";
    }

    const compatibilityMessage = document.getElementById("compatibility-required");
    if (!(compatibilities) || compatibilities.length === 0) {
        compatibilityMessage.innerText = "Pet compatibility required";
        if (!firstMissingField) firstMissingField = document.getElementById("compatibility-required");
        emptyflag = true;
    } else {
        compatibilityMessage.innerText = "";
    }

    if (firstMissingField) {
        firstMissingField.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    return !emptyflag;
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
}

function readFormData() {
    type = document.getElementById("animal-type").value;
    breed = document.getElementById("animal-breed").value;
    age = document.getElementById("animal-age").value;
    gender = document.getElementById("animal-gender").value;

    compatibilities = [];
    if (document.getElementById("compatibility-dogs").checked) {
        compatibilities.push("dog");
    }
    if (document.getElementById("compatibility-cats").checked) {
        compatibilities.push("cat");
    }
    if (document.getElementById("compatibility-children").checked) {
        compatibilities.push("kids");
    }
    if (document.getElementById("compatibility-none").checked) {
        compatibilities.push("none");
    }

}

function handleCompatibilityCheckboxes() {
    const dogs = document.getElementById("compatibility-dogs");
    const cats = document.getElementById("compatibility-cats");
    const kids = document.getElementById("compatibility-children");
    const none = document.getElementById("compatibility-none");

    if (none.checked) {
        dogs.checked = false;
        cats.checked = false;
        kids.checked = false;
    } else {
        none.checked = false;
    }
}

document.getElementById("compatibility-dogs").addEventListener("click", handleCompatibilityCheckboxes);
document.getElementById("compatibility-cats").addEventListener("click", handleCompatibilityCheckboxes);
document.getElementById("compatibility-children").addEventListener("click", handleCompatibilityCheckboxes);
document.getElementById("compatibility-none").addEventListener("click", handleCompatibilityCheckboxes);


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("find-form");
    if (form) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
  
        if (!validate()){
            return;
        }
        
        let compatibilityStr = "";
        for (let i = 0; i < compatibilities.length; i++) {
            compatibilityStr += compatibilities[i];
            if (i !== compatibilities.length - 1) {
                compatibilityStr += "-";
            }
        }

        const compatibility = compatibilityStr;
          
        const formData = {
          type,
          breed,
          age,
          gender,
          compatibility,
        };
        
        console.log("Creating Request with "+formData.type);
        const response = await fetch("/findPets", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData),
        });
  
        const html = await response.text();
        document.open();
        document.write(html);
        document.close();
      });
    }
  });