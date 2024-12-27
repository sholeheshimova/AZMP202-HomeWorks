document.addEventListener("DOMContentLoaded", () => {
  const basketTableBody = document.querySelector("tbody");
  const basketInfo = document.querySelector(".basket-info");
  const basketTable = document.querySelector(".basket-table");
  const totalPriceElement = document.querySelector(".total-price");
  const clearAllButton = document.querySelector(".clear-all");

  // Local Storage-dən məlumatları oxu
  let basketItems = JSON.parse(localStorage.getItem("basket")) || [];

  // UI-də səbət məlumatlarını yenilə
  const updateBasketUI = () => {
      basketTableBody.innerHTML = "";
      let totalPrice = 0;

      if (basketItems.length === 0) {
          basketInfo.classList.remove("d-none");
          basketTable.classList.add("d-none");
          return;
      }

      basketInfo.classList.add("d-none");
      basketTable.classList.remove("d-none");

      basketItems.forEach((item, index) => {
          const subtotal = item.price * item.count;
          totalPrice += subtotal;

          const row = document.createElement("tr");
          row.innerHTML = `
              <td><img src="${item.imageSrc}" alt="${item.title}" width="80"></td>
              <td>${item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td><button class="btn-decrement" data-index="${index}">-</button></td>
              <td>${item.count}</td>
              <td><button class="btn-increment" data-index="${index}">+</button></td>
              <td>${subtotal.toFixed(2)}</td>
              <td><button class="btn-remove" data-index="${index}">Remove</button></td>
          `;
          basketTableBody.appendChild(row);
      });

      totalPriceElement.textContent = totalPrice.toFixed(2);
  };

  // Elementi Local Storage-dən silən funksiya
  const saveBasketToLocalStorage = () => {
      localStorage.setItem("basket", JSON.stringify(basketItems));
  };

  // Elementləri əlavə etmək, azaltmaq, silmək
  basketTableBody.addEventListener("click", (e) => {
      const target = e.target;
      const index = target.dataset.index;

      if (target.classList.contains("btn-increment")) {  // Düzgün sinif adı
          basketItems[index].count++;
      } else if (target.classList.contains("btn-decrement")) {  // Düzgün sinif adı
          if (basketItems[index].count > 1) {
              basketItems[index].count--;
          } else {
              basketItems.splice(index, 1); // 1 ədəd qaldıqda element silinsin
          }
      } else if (target.classList.contains("btn-remove")) {  // Düzgün sinif adı
          basketItems.splice(index, 1);
      }

      saveBasketToLocalStorage();
      updateBasketUI();
  });

  // "Clear All" düyməsini idarə et
  clearAllButton.addEventListener("click", () => {
      basketItems = [];
      saveBasketToLocalStorage();
      updateBasketUI();
      Swal.fire("Səbət boşaldıldı!", "", "success");
  });

  // Səhifə yüklənəndə UI-ni yenilə
  updateBasketUI();
});
