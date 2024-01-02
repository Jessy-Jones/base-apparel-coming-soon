const submitBtn = document.querySelector(".arrow-icon");
const emailInput = document.querySelector(".email");
const isFocused = emailInput === document.activeElement;
function isValid(){
   if (emailInput.value.includes("@") === false){
      errorMessage = document.createElement("section");
      errorMessage.innerText = "Please provide a valid email";
      document.body.appendChild(errorMessage);
      emailInput.value = "";
   }
   if(isFocused){ 
    errorMessage.innerText = ""
   }
}

submitBtn.addEventListener("click", isValid )

