const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");


sign_up_btn.addEventListener("click", ()=>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", ()=>{
    container.classList.remove("sign-up-mode");
});


sign_up_btn2.addEventListener("click", ()=>{
    container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click", ()=>{
    container.classList.remove("sign-up-mode2");
});

// Form Validations part 1
var form =document.getElementById('form')
form.addEventListener('submit',function(event){
    event.preventDefault()

    var username =document.getElementById('username').value
    console.log(username)

    var email = document.getElementById('email').value
    console.log(email)

    var password =document.getElementById('password').value
    console.log(password)

    var confirm_password = document.getElementById("confirm_password").value
    console.log(confirm_password)

    // All text boxes to be checked must have id's same as what has been declared in the javascript site
})

// Loging in onclick effect
function funs(){
    alert("Are you sure?");
}