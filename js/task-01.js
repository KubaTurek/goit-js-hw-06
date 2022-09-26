const ammountOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${ammountOfCategories.length}`)

const category = ammountOfCategories.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`)

}
)





