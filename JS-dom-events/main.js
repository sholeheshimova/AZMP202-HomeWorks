document.addEventListener("DOMContentLoaded", () => {
    const detailButtons = document.querySelectorAll(".btn-detail");
    const deleteButtons = document.querySelectorAll(".btn-delete");
    const modal = document.getElementById("deleteModal");
    const okButton = modal.querySelector(".btn-ok");
    const cancelButton = modal.querySelector(".btn-cancel");
    let currentCard = null;

    // Detail Button Click
    detailButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const card = button.closest(".col-3");
            card.style.transform = "scale(1.2)";
            card.style.zIndex = "1000";
            card.style.opacity = "1";
            setTimeout(() => {
                card.style.transform = "scale(1)";
                card.style.zIndex = "0";
            }, 3000);
        });
    });

    // Delete Button Click
    deleteButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            modal.classList.add("active");
            currentCard = button.closest(".col-3");
        });
    });

    // OK Button Click
    okButton.addEventListener("click", () => {
        if (currentCard) {
            currentCard.remove();
        }
        modal.classList.remove("active");
        currentCard = null;
    });

    // Cancel Button Click
    cancelButton.addEventListener("click", () => {
        modal.classList.remove("active");
        currentCard = null;
    });
});