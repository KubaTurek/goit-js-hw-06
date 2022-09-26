let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const value = document.getElementById("value")

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue
}
const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue
}


incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement)

