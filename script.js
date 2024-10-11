const loadCategories = ()=> {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.log(error));


}

const loadAllPets = ()=> {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((error) => console.log(error));


}


// display categories
const displayCategories = (categories)=> {

    const categoryContainer = document.getElementById("categories");

    categories.forEach((item) => {
        console.log(item);

        const button = document.createElement("button");
        button.classList = "btn";
        const icon = document.createElement("img");
        icon.src = item.category_icon;  
        icon.style.width = '40px'; 
        icon.style.height = '40px';
        icon.style.marginRight = '10px';  


        const text = document.createTextNode(item.category);

      
        button.appendChild(icon);
        button.appendChild(text);
        

        categoryContainer.append(button);

    })
}

loadCategories();


