

const input = document.querySelector("input");
const subscribe = document.querySelector(".hero__content__btn");
const emptyLabel = document.querySelector(".hero__content__label-empty");
const errorLabel = document.querySelector(".hero__content__label-error");
const successPage = document.querySelector(".success");
const successPageEmail = document.querySelector(".success__text span");
const container = document.querySelector(".container");
const dismissBtn = document.querySelector(".success__btn");


function emailIdEmpty() {
    emptyLabel.classList.add("active");
    input.classList.add("active");
      errorLabel.classList.remove("active");

}

function emailIDError() {
emptyLabel.classList.remove("active");
  errorLabel.classList.add("active");
  input.classList.add("active");
  
}

function emailIdSuccess() {
    successPage.classList.add("active");
    container.classList.add("active");
    successPageEmail.textContent = input.value;

}

function handleSubscribe () {
    const emailId = input.value;
    if(!emailId) {
    emailIdEmpty ();
         }else if(!emailId.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            emailIDError();
}else {
emailIdSuccess();
}}

function handleDismiss () {
  emptyLabel.classList.remove("active");
  errorLabel.classList.remove("active");
  successPage.classList.remove("active");
  container.classList.remove("active");
  input.value = "";
}

function handleClear () {
  emptyLabel.classList.remove("active");
  input.classList.remove("active");
  errorLabel.classList.remove("active");
}

input.addEventListener("click", handleClear);
input.addEventListener("keyup", handleClear);

subscribe.addEventListener("click", handleSubscribe);

dismissBtn.addEventListener("click", handleDismiss);



