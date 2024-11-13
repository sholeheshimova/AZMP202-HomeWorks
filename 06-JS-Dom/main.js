// task1

// let fontSize = 16;
// const textContainer = document.getElementById('textContainer');
// const plusBtn = document.getElementById('plusBtn');
// const minusBtn = document.getElementById('minusBtn');
// const colorInput = document.getElementById('colorInput');
// const applyBtn = document.getElementById('applyBtn');

// plusBtn.addEventListener('click', function() {
//     fontSize += 2;
//     textContainer.style.fontSize = fontSize + 'px';
// });

// minusBtn.addEventListener('click', function() {
//     if (fontSize > 8) {
//         fontSize -= 2;
//         textContainer.style.fontSize = fontSize + 'px';
//     }
// });

// applyBtn.addEventListener('click', function() {
//     const color = colorInput.value.trim();
//     if (color) {
//         textContainer.style.color = color;
//     } else {
//         alert('Enter color .');
//     }
// });



// task2

// const container = document.createElement("section");
// container.classList.add("container");

// const sec1 = document.createElement("div");
// sec1.classList.add("sec1");

// const img1 = document.createElement("img");
// img1.setAttribute(
//     "src", "https://fotolifeakademi.com/uploads/2020/04/manzara-fotografi-cekmek-724x394.webp"
// );
// sec1.appendChild(img1);

// container.appendChild(sec1);


// const row = document.createElement("div");
// row.classList.add("row")
// container.appendChild(row);


// const col1 = document.createElement("div");
// col1.classList.add("col-4");

// const img11 = document.createElement("img");
// img11.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIwQqwf1WsDKFfOfG89XT7hIrzrmFnLCYWw&s");
// col1.appendChild(img11);

// const textContent1 = document.createElement("div");
// textContent1.classList.add("text-content");

// const p1 = document.createElement("p");
// p1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quasi";
// textContent1.appendChild(p1);


// col1.appendChild(textContent1);
// row.appendChild(col1);



// const col2 = document.createElement("div");
// col2.classList.add("col-4");

// const img2 = document.createElement("img");
// img2.setAttribute("src","https://cdn.pixabay.com/photo/2023/08/28/02/49/road-8218182_640.png" );
// col2.appendChild(img2);

// const textContent2 = document.createElement("div");
// textContent2.classList.add("text-content");

// const p2 = document.createElement("p");
// p2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quasi";
// textContent2.appendChild(p2);


// col2.appendChild(textContent2);
// row.appendChild(col2);




// const col3 = document.createElement("div");
// col3.classList.add("col-4");

// const img3 = document.createElement("img");
// img3.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSHMcjNYpUTzglkLhCXtQM8kFsCAXOOXBAUw&s" );
// col3.appendChild(img3);

// const textContent3 = document.createElement("div");
// textContent3.classList.add("text-content");

// const p3 = document.createElement("p");
// p3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quasi";
// textContent3.appendChild(p3);


// col3.appendChild(textContent3);
// row.appendChild(col3);

// document.body.append(container);


// const style = document.createElement("style");

// style.textContent = `
//  *{
//     box-sizing: border-box;
//     text-decoration: none;

// }
// .container .sec1{
//     display: flex;
//     justify-content: center;
    
// }
// .container .sec1 img{
//     max-width: 100%;
//     height: auto;
// }

// .row{
//     padding-top: 50px;
//     display: flex;
//     gap: 20px;
//     justify-content: space-around;
//     width: 100%;
// }

// .col-4{
//     min-width: 200px;
    
// }
// .col-4 img{
//     width: 100%;
//     height: 300px;
// }


// .text-content{
//     padding: 20px;
// } 
// `;

// document.head.appendChild(style);


// task3

// const resultInput = document.querySelector(".inputs input:nth-child(1)");
// const value1Input = document.querySelector(".inputs input:nth-child(3)");
// const value2Input = document.querySelector(".inputs input:nth-child(4)");

// let selectedOperation;
// document.querySelectorAll(".inputs input[type='text']:nth-child(n+6)").forEach(btn =>
//     btn.onclick = () => selectedOperation = btn.placeholder
// );

// document.querySelector(".inputs input[type='submit']").addEventListener("click", () => {
//     const num1 = +value1Input.value; // Rəqəmləri birbaşa oxuyuruq
//     const num2 = +value2Input.value;


//     resultInput.value = selectedOperation === "addition" ? num1 + num2 :
//                         selectedOperation === "minus" ? num1 - num2 :
//                         selectedOperation === "multiply" ? num1 * num2 :
//                         selectedOperation === "divide" ? (num2 ? num1 / num2 : "Sifira bölünə bilməz") :
//                         "Əməliyyat seçin";
// });


// task4

// const btn = document.querySelector(".btn button");
// const navbar = document.querySelector(".navbar");
// const closeBtn = document.querySelector("#closeBtn");

// btn.addEventListener("click", () => {
//     navbar.style.left = navbar.style.left = "0px";
// });

// closeBtn.addEventListener("click", () => {
//     navbar.style.left = "-150px"; // Navbarı gizlədir
// });


