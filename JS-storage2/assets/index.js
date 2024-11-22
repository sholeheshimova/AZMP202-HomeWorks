document.addEventListener("DOMContentLoaded", () => {
    const addToBasketButtons = document.querySelectorAll(".fa-basket-shopping");
  
    // Local Storage üçün səbət massivini yükləyirik
    let basketItems = JSON.parse(localStorage.getItem("basket")) || [];
  
    addToBasketButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const card = e.target.closest(".card");
  
        const newItem = {
          title: card.querySelector(".card-title h5").textContent,
          price: parseFloat(card.querySelector(".card-body span").textContent.replace("$", "")),
          imageSrc: card.querySelector("img").getAttribute("src"),
          count: 1,
        };
  
        // Əgər element artıq səbətdədirsə, miqdarını artırırıq
        const existingItem = basketItems.find((item) => item.title === newItem.title);
        if (existingItem) {
          existingItem.count++;
        } else {
          basketItems.push(newItem);
        }
  
        // Local Storage-ə yazırıq
        localStorage.setItem("basket", JSON.stringify(basketItems));
  
        // UI-də səbət sayını yeniləyirik
        updateBasketCount();
        Swal.fire("Əlavə olundu!", `${newItem.title} səbətə əlavə edildi.`, "success");
      });
    });
  
    // Səbət elementlərinin sayını yenilə
    const updateBasketCount = () => {
      const basketCountElement = document.querySelector(".basket-count");
      basketCountElement.textContent = basketItems.reduce((acc, item) => acc + item.count, 0);
    };
  
    updateBasketCount();
  });
  