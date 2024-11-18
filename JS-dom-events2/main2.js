const users = [
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      username: "emilys",
      password: "emilyspass",
      image: "https://dummyjson.com/icon/emilys/128",
    },
    {
      id: 2,
      firstName: "Michael",
      lastName: "Williams",
      username: "michaelw",
      password: "michaelspass",
      image: "https://dummyjson.com/icon/michaelw/128",
    },
    {
      id: 3,
      firstName: "Sophia",
      lastName: "Brown",
      username: "sophiab",
    }
]

document.querySelectorAll(".detail-button").forEach(button => {
    button.addEventListener("click", function() {
        const username = this.getAttribute("data-username");
        const user = users.find(u => u.username === username);

        if (user) {
            document.getElementById("users-detail").innerHTML = `
            <h2>Istifadeci Melumatlari</h2>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Ad:</strong> ${user.firstName}</p>
            <p><strong>Soyad:</strong> ${user.lastName}</p>
            <p><strong>İstifadəçi adi:</strong> ${user.username}</p>
            `;
        }else{
            document.getElementById("user-detail").innerHTML = "<p>Melumat tapilmadi</p>"
        }
    });
});