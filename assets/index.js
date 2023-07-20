const formContainer = document.querySelector(".form-container");
const successMessage = document.querySelector(".success-message");
const signUpForm = document.querySelector(".sign-up-form");
const input = document.querySelector("input");
const btnSubscribe = document.querySelector(".subscribe");
const btnCancel = document.querySelector(".dismiss");
const errorElement = document.querySelector(".error");

signUpForm.addEventListener("submit", (e) => {
  let messages = [];

  if (input.value === "" || input.value === null) {
    messages.push("This fild is required");
  } else {
    formContainer.classList.add("visually-hidden");
    successMessage.classList.remove("visually-hidden");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(",");
  }

  e.preventDefault();
});

btnCancel.addEventListener("click", (e) => {
  formContainer.classList.remove("visually-hidden");
  successMessage.classList.add("visually-hidden");
});
