const emailInput = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error");
const sendBtn = document.querySelector(".notify-me");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.value < 1) {
    emailInput.style.border = ".1rem solid red";
    errorMessage.innerHTML = "Please provide an email address!";
  } else {
    let regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(emailInput.value.toLowerCase()) == false) {
      emailInput.style.border = ".1rem solid red";
      errorMessage.innerHTML = "Please provide an valid email address!";
    } else {
      errorMessage.innerHTML = "Success! You'll be notified!";
      emailInput.style.border = "none";
    }
  }
  emailInput.value = "";
});
