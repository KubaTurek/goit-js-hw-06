const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
event.preventDefault();
const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value ==="" || password.value ==="") {
    return alert("Please fill out all the fields!");
  } else {
    const results = { email: email.value, password: password.value };
    console.log(results);
    event.currentTarget.reset();
  }
}
