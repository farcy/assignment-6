const loadAllPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then((res) => res.json())
        .then((data) => {
            allPets = data.pets; 
            displayAllPets(allPets);
        })
        .catch((error) => console.log(error));
}

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));
}

let allPets = []; 

// Function to filter pets by category and display them
const filterPetsByCategory = (category) => {
    const filteredPets = allPets.filter(pet => pet.category.toLowerCase() === category.toLowerCase());
    displayAllPets(filteredPets);
}

// Function to display the pets (filtered or unfiltered)
const displayAllPets = (pets) => {
    const petsContainer = document.getElementById('all-pets-container');
    petsContainer.innerHTML = "";


    if (pets.length === 0) {
        const noDataImage = document.createElement("div");
        noDataImage.innerHTML = ` 
            <div class="px-5 pt-5 w-full">
                <p class="font-bold"> No data found </p>
                <img class="w-full rounded-xl" src="images/error.webp" alt="No pets found" />
            </div>
        `;
        petsContainer.appendChild(noDataImage);
        return;
    }

    pets.forEach(pet => {
        const petDiv = document.createElement('div');
        petDiv.classList = "card";
        petDiv.innerHTML = `
            <figure class="px-5 pt-5">
                <img src=${pet.image} alt="Pet Image" class="rounded-xl" />
            </figure>
            <div class="card-body text-left">
                <h2 class="card-title font-bold">${pet.pet_name}</h2>
                <div class="flex gap-2 items-center">
                    <i class="fa-brands fa-elementor text-3xl"></i>
                    <h4>Breed: ${pet.breed}</h4>
                </div>
                <div class="flex gap-2 items-center">
                    <i class="fa-solid fa-calendar-minus text-3xl"></i>
                    <h4>Birth: ${pet.date_of_birth}</h4>
                </div>
                <div class="flex gap-2 items-center">
                    <i class="fa-solid fa-venus text-3xl"></i>
                    <h4>Gender: ${pet.gender}</h4>
                </div>
                <div class="flex gap-2 items-center">
                    <i class="fa-solid fa-dollar-sign text-3xl"></i>
                    <h4>Price: ${pet.price}</h4>
                </div>
            </div>
            <div class="justify-between">
                <button class="btn"><i class="fa-regular fa-thumbs-up"></i></button>
                <button class="btn">Adopt</button>
                <button class="btn">Details</button>
            </div>
        `;
        petsContainer.appendChild(petDiv);
    });
}

// Function to display categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");

    categories.forEach(item => {
        const button = document.createElement("button");
        button.classList = "btn flex items-center";
        const icon = document.createElement("img");
        icon.src = item.category_icon;
        icon.style.width = '40px';
        icon.style.height = '40px';
        icon.style.marginRight = '10px';

        const text = document.createTextNode(item.category);
        button.appendChild(icon);
        button.appendChild(text);

        button.onclick = () => {
            filterPetsByCategory(item.category); 
        };

        categoryContainer.append(button);
    });
}

// Load data on page load
loadCategories();
loadAllPets();