document.addEventListener("DOMContentLoaded", () =>{
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        window.location.href = "login.html";
    }else{
        console.log(`Welcome ${loggedInUser}!`);
        
    }
})