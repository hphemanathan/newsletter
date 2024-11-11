

const input = document.querySelector("input");
const subscribe = document.querySelector(".hero__content__btn");

function handleSubscribe () {
    const emailId = input.value;
    console.log (emailId);
    if(!emailId) {
        console.log ("enter email address");
         }else if(!emailId.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            console.log("valid email required")
}else {
console.log("success");
}}

subscribe.addEventListener("click", handleSubscribe);


