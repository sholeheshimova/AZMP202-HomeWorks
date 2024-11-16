document.addEventListener("DOMContentLoaded", () => {
    const detailButtons = document.querySelectorAll(".btn-detail");
    const deleteButtons = document.querySelectorAll(".btn-delete");
    const modal = document.getElementById("deleteModal");
    const okButton = modal.querySelector(".btn-ok");
    const cancelButton = modal.querySelector(".btn-cancel");
    let currentCard = null;

    detailButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const card = button.closest(".col-3");
            const allCards = document.querySelectorAll(".col-3");

            // Apply blur to all other cards
            allCards.forEach(c => {
                if (c !== card) {
                    c.classList.add("blurred");
                }
            });

            // Scale the selected card
            card.style.transform = "scale(1.2)";
            card.style.zIndex = "1000";
            card.style.opacity = "1";

            setTimeout(() => {
                card.style.transform = "scale(1)";
                card.style.zIndex = "0";

                // Remove blur after the animation ends
                allCards.forEach(c => c.classList.remove("blurred"));
            }, 3000);
        });
    });

    // Delete Button Click
    deleteButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // İstifadəçi təsdiqlədikdə cari elementi sil
                    const currentCard = button.closest(".col-3");
                    if (currentCard) {
                        currentCard.remove();
                    }
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your item has been deleted.",
                        icon: "success"
                    });
                }
            });
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



document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector(".btn");

    addButton.addEventListener("click", (event) => {
        event.preventDefault();

        const inputs = document.querySelectorAll(".form .input-1");
        let isEmpty = false;


        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isEmpty = true;
            }
        });
         if (isEmpty) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
         }else{
            console.log("Form successfully submitted");
            
         }
    })
})