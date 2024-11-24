import { BASE_URL } from "./constants.js";

function getData(endpoint){
    fetch(`${BASE_URL}/${endpoint}`)
    .then((responsive) => responsive.json())
    .then((data) => {

        supCards(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {

    })
}

function supCards(array) {
    const rowContainer = document.querySelector(".row");
    rowContainer.innerHTML = "";
    array.forEach((item) => {
        const cardHTML = `
        <div class="col-12 col-md-6 col-lg-3 mb-3">
                <div class="card border p-3">
                <div class="card-id"> ID :${item.id}</div>
                <div class="card-name">Company Name: ${item.companyName}</div>
                <div class="card-contact">Contact Name: ${item.contactName}</div>
                <div class="card-title">Contact Title: ${item.contactTitle}</div>
                <div class="address-street">Street :${item.address?.street}</div>
                <div class="address-phone">Phone: ${item.address?.phone}</div>
                <button class="btn btn-danger mt-3 delete-btn">Delete</button>
                </div>
                </div>

        `;
        rowContainer.insertAdjacentHTML("beforeend", cardHTML);
    });


const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
    const card = event.target.closest(".col-12"); // Düymənin aid olduğu kartı tapırıq
    card.remove(); // Kartı DOM-dan silirik
    console.log("Deleted card");
    });
  });
    
}

getData("users");
