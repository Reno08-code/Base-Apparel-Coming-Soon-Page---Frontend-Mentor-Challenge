const submit=document.querySelector(".submit");
const error=document.querySelector(".error-text");
const form=document.querySelector("form");
const input = document.querySelector("input");
const errorImage=document.querySelector(".error-icon");

form.addEventListener("submit", validate);
submit.addEventListener("click",validate);

function validate(e){
    e.preventDefault()
    const inputValue= input.value.trim();
    if(!isEmail(inputValue)){
        error.style.display = "block"
        errorImage.style.display = "block"
    }else{
         error.style.display = "none"
         errorImage.style.display = "none"
    }
}



function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
  }




















