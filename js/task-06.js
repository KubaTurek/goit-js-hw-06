const inputBox = document.querySelector("#validation-input");

const inputLength = inputBox.dataset.length;

const validation = (add, remove) => {
    inputBox.classList.add(add);
    inputBox.classList.remove(remove)
};

inputBox.addEventListener("blur", (event) => {
    const currentInputLength = event.currentTarget.value.length;

    if (currentInputLength == inputLength) {
        return validation("valid", "invalid")
    }
    else return validation("invalid", "valid")
})
  


