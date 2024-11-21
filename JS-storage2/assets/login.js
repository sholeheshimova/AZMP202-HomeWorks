import { getDataFromLocalStorage,setDataToLocalStorage } from "./helpers.js"

const loginForm = document.querySelector(".login-form")
const InputPassword1 = document.querySelector("#InputPassword1")
const InputEmail1 = document.querySelector("#username-email")
const btn = document.querySelector(".btn")
const users = getDataFromLocalStorage("users") || [];


loginForm.addEventListener("submit", function(event){
    event.preventDefault();



    let email = InputEmail1.value.trim();
    let password = InputPassword1.value.trim();


    const foundUser = users.find
    (user => 
      user.email === email && user.password === password);


    if (foundUser) {
        foundUser.isLogged = true;
        setDataToLocalStorage("users", users);
        localStorage.setItem("loggedInUser", foundUser.email);
        window.location.href = "index.html"
      } else {
        window.alert("daxil etidiyiniz məlumatlar yanlışdır!");
      }
    });
    
    function resetForm() {
      loginForm.reset();
    }

