const form = document.forms[0];
const email = document.getElementById("email");
const error_message = document.getElementById("valid_email_required");
const first_card = document.querySelector(".sign_up_card");
const success_card = document.querySelector(".success_card");
const success_email= document.getElementById("user_email");
form.addEventListener("submit",function(){
    event.preventDefault();
    if (validEmail()===false){
        email.className = "email_error";
        error_message.style.display="inline"
    }
    else{
        var userEmail = email.value;
        form.requestSubmit();
        first_card.style.display = "none";
        success_card.style.display = "flex";
        success_email.innerText = `${userEmail}`
    }
})

function validEmail(){
    if ((email.value.indexOf("@")==-1)||(email.value.indexOf(".",email.value.indexOf("@"))==-1)){
        return false
    }
    else{
        return true
    }
}