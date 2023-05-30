const inputElements = Array.from(document.getElementsByTagName("input"));
const form = document.querySelector(".form");

let isValid = false;

function validateInput(event) {
  const inputElement = event.target;

  if (inputElement.type === "text") {
    isValid = validateName(inputElement.value);
  } else if (inputElement.type === "email") {
    isValid = validateEmail(inputElement.value);
  } else if (inputElement.type === "number") {
    isValid = validateNumber(inputElement.value);
  } else if (inputElement.type === "password") {
    isValid = validatePassword(inputElement.value);
  }

  const submitButton = document.querySelector(".send");
  submitButton.disabled = !isValid;
}

inputElements.forEach((inputElement) => {
  inputElement.addEventListener("input", validateInput);
});

const validateName = (name) => {
  const nameError = document.querySelector(".txt");
  if (name.trim().length === 0) {
    const errorText = "Name cannot be empty";
    nameError.textContent = errorText;
    return false;
  } else if (name.trim().length < 3) {
    const errorText = "Name must be at least 3 characters long";
    nameError.textContent = errorText;
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
};

const validateEmail = (email) => {
  const emailError = document.querySelector(".mail-txt");
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (email.trim().length === 0) {
    const errorText = "Email cannot be empty";
    emailError.textContent = errorText;
    return false;
  } else if (!emailRegex.test(email)) {
    const errorText = "Invalid email";
    emailError.textContent = errorText;
  } else {
    emailError.textContent = "";
    return true;
  }
};
const validateNumber = (number) => {
  const numberError = document.querySelector(".pNumb");
  const numberRegex = /^\d{11,13}$/;

  if (number.trim().length === 0) {
    const errorText = "Number cannot be empty";
    numberError.textContent = errorText;
    return false;
  } else if (!numberRegex.test(number)) {
    const errorText = "Invalid format of number";
    numberError.textContent = errorText;
  } else {
    numberError.textContent = "";
    return true;
  }
};

const validatePassword = (password) => {
  const passwordError = document.querySelector(".txt1");
  if (password.trim().length < 8) {
    const errorText = "Password must be at least 8 characters long";
    passwordError.textContent = errorText;
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
};

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log("Form submitted");
  // Perform any desired actions upon form submission
}
