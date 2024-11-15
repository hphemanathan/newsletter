

const input = document.querySelector("input");
const subscribe = document.querySelector(".hero__content__btn");
const emptyLabel = document.querySelector(".hero__content__label-empty");
const errorLabel = document.querySelector(".hero__content__label-error");
const successPage = document.querySelector(".success");
const container = document.querySelector(".container");


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

subscribe.addEventListener("click", handleSubscribe);


