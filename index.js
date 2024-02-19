const btnElement = document.getElementById('email-btn')
const inputElement = document.getElementById('email-input')
const errorMessage = document.getElementById('error-message')
const errorElement = document.getElementById('error-icon')


function showMessage(){
    errorMessage.classList.toggle("active");

    if(inputElement.value === ""){
        errorElement.classList.add("active");
        inputElement.classList.add("error");
        errorMessage.textContent="Please provide an email";
        errorElement.setAttribute('title', 'Empty e-mail');
    }

    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputElement.value)){
        errorElement.classList.remove("active");
        inputElement.classList.remove("error");
        errorMessage.textContent="Thank you!";
    }

    else{
    errorElement.classList.add("active");
    inputElement.classList.add("error");
    errorMessage.textContent="Please provide a valid mail";
    errorElement.setAttribute('title', 'Please include an @ in e-mail address!');
    }

}

function hideMessage(){
    errorMessage.classList.remove("active");
    errorElement.classList.remove("active");
    inputElement.classList.remove("error");
}

