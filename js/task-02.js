const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ]

  const list = document.querySelector("#ingredients");

  const newItems = ingredients.map((item) => {
    const newItem = document.createElement("li");
    newItem.textContent = item;
    newItem.classList.add = ("item")
    return newItem
  }
  )
list.append(...newItems)