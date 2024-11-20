import { getDataFromLocalStorage, setDataToLocalStorage } from "./helpers.js";

const registerForm = document.querySelector(".register-form");
const InputEmail1 = document.querySelector("#InputEmail1");
const InputPassword1 = document.querySelector("#InputPassword1");
const btn = document.querySelector(".btn");


const users = getDataFromLocalStorage("users") || [];
registerForm.addEventListener("submit", function (event){
    event.preventDefault();

    const user = {
        id: Date.now(),
        email: InputEmail1.value.trim(),
        password: InputPassword1.value.trim(),
        isLogged: false,
      };

      users.push(user);
      setDataToLocalStorage("users", users);
   
      window.location.replace("login.html");
      resetForm();

    
});

function resetForm() {
    registerForm.reset();
  }

