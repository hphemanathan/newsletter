

const input = document.querySelector("input");
const subscribe = document.querySelector(".hero__content__btn");
const emptyLabel = document.querySelector(".hero__content__label-empty");
const errorLabel = document.querySelector(".hero__content__label-error");

function handleSubscribe () {
    const emailId = input.value;
    if(!emailId) {
    console.log(emptyLabel);
         }else if(!emailId.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            console.log("valid email required")
            console.log(errorLabel);
}else {
console.log("success");
}}

subscribe.addEventListener("click", handleSubscribe);


