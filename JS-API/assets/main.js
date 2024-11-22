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
                <div class="card-id">${item.id}</div>
                <div class="card-name">${item.companyName}</div>
                <div class="card-contact">${item.contactName}</div>
                <div class="card-title">${item.contactTitle}</div>
                <div class="address-street">${item.address?.street}</div>
                <div class="address-phone">${item.address?.phone}</div>
                </div>
                </div>

        `;
        rowContainer.insertAdjacentHTML("beforeend", cardHTML);
    });
    
}

getData("suppliers");
