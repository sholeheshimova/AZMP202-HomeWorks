
// Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

// let number = 345;
// let hasil = 1;
// let cem = 0;

// for (let i = 0; i< 3; i++) {
//     if(reqem = number % 10){
//         cem +=reqem;
//         hasil *=reqem;
//         number = (number - reqem) / 10;
//     }
    
// }
// let edediorta = cem / 3;

// console.log("Reqemlerin cemi:" + cem);
// console.log("Reqemlerin hasili:" + hasil);
// console.log("Reqemlerin edediortasi:" + edediorta);





// Verilmiş ədədin bütün bölənlərini console a çıxaran proqram tərtib edin.

// let number = 36;

// for (let i = 0; i <=number; i++) {
//    if(number % i === 0){
//     console.log(i);
    
//    }
    
// }
// console.log("bolenler:");





// Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

// let number = 24;
// count = 0;

// for (let  i = 0;  i <=number;  i++) {
//     if (number % i === 0) {
//         count++
//     }
    
// }
// console.log(count);



//4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//  0 x 0 = 0
//  1 x 1 = 1
//  2 x 2 = 4
//  3 x 3 = 9
//  4 x 4 = 16
//  5 x 5 = 25
//  6 x 6 = 36
//  7 x 7 = 49
//  8 x 8 = 64
//  9 x 9 = 81
//  10 x 10 = 100

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i * i}`);
//   }




// 5)  for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000


// console.log("i    i^2   i^3"); 
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i}    ${i ** 2}    ${i ** 3}`);
// }





// 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın

// let tekEded = 0;
// let cutEded = 0;

// for (let  i = 0;  i <= 100;  i++) {
//     if (i % 2 ==1) {
//         tekEded+=i
//     }else if(i % 2 ==0){
//         cutEded +=i
//     }
    
// }

// console.log("cut ededler:" + cutEded);
// console.log("tek ededler:" + tekEded);





// Arraydəki ən böyük və ən kiçik element-ləri tapan  alqoritm yazın. Math objectindən istifadə edə bilməzsiniz.
// Məsələn: [4,2,7,9,3,12,46,32,19];
// Minimum: 2
// Maximum: 46

// let array = [4,2,7,9,3,12,46,32,19];

// let min = array[0];
// let max = array[0];

// for (let i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//         min = array[i]
//     }
//     if (array[i] > max) {
//         max = array[i]
//     }
// }
// console.log("Minimum eded:" + min);
// console.log("Maximum eded:" + max);






// Arraydəki   ən böyük və ən kiçik element-lərin ədədi ortasını tapıb qaytaran alqoritm yazın. Math objectindən istifadə edə bilməzsiniz. Məsələn: [4,2,7,9,3,12,46,32,19]; => min: 2, max: 46 => ededi ortasi (46+2)/2 => 24 qaytarmalıdır.

// let array = [4,2,7,9,3,12,46,32,19];

// let min = array[0];
// let max = array[0];
// let edediorta;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] < min) {
//         min = array[i]
//     }
//     if (array[i] > max) {
//         max = array[i]
//     }

//     if ((min + max) / 2) {
//         edediorta = (min + max) / 2
//     }
// }

// console.log("Minimum eded:" + min);
// console.log("Maximum eded:" + max);
// console.log("Ededi orta:" + edediorta);





// sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// let bosluqSayi = 0;

// for (let i = 0; i < sampleNews.length; i++) {
//     if (sampleNews[i] === ' ') {
//         bosluqSayi++
//     }
    
// }

// console.log("Bosluqlarin sayi:" + bosluqSayi);






//  0 - 100 arası yalnız sadə ədədləri consolda çap edin

// for (let n = 2; n <= 100; n++) {
//   let isPrime =  true;

//   for (let i = 0; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//         isPrime = false;
//         break;
//     }
    
//   }
//   if (isPrime) {
//        console.log(n);
       
//   }

// }





// Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.

// let array = [12,4,9,22,41,3,7,19,33]

// let daxilolaneded = 4;

// let yoxlanan;

// for (let i = 0; i < array.length; i++) {
//     if ( daxilolaneded === array[i]) {
//         yoxlanan = true;
//         break;
//     }
    
// }
// if (yoxlanan) {
//     console.log('${daxilolaneded} arrayde movcuddur');
    
// }else{
//     console.log('${daxilolaneded} arrayde movcud deyil');
    
// }




// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//     { name: "Davud", scores: [100, 100, 100] }
//   ]; tələbələr array-ində tələbələrin ortalaması ən yüksək olanı, ortalaması 90-dan yuxarı olanları tapan proqram yazın



// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//     { name: "Davud", scores: [100, 100, 100] }
// ]

// for (let i = 0; i < students.length; i++) {
//    if (students[i].scores / students[i].length >= 90) {
//     console.log(students[i].name);
    
//    }
    
// }




// array daxilindəki ən uzun sözü tapan alqoritm yazın

// const fruits = ["alma", "banan", "qarpız", " portağal  ", "ananas", "nar"];

// let enuzunSoz = '';

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i].length > enuzunSoz.length) {
//         enuzunSoz = fruits[i]
//     }
    
// }

// console.log("en uzun soz:" + enuzunSoz);




// # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın


// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
  

//   let qiymetlerinCemi = 0;
//   let meshulunSayi = products.length;

//   for (let i = 0; i < products.length; i++) {
//     qiymetlerinCemi += products[i].price;
//   }

//   let ortalamaQiymet = qiymetlerinCemi / meshulunSayi;

//   console.log("qiymetlerin cemi:" +qiymetlerinCemi);
//   console.log("Qiymetlerin ortalamasi:" + ortalamaQiymet);




//   sinifdekilerin ardi

// 3 eded verilib . bu ededlerin birlesmesinden yaranan en boyuk ve en kicik ededi tertib edin meselen a=4 b=5 c=6 big number=654 litlle number = 456

// let a = 5;
// let b = 4;
// let c = 6;

// let minEded;
// let maxEded;

// if (a > b && a >c) {
//     if (b >c) {
//         maxEded = a*100 + b*10 + c;
//         minEded = c*100 + b*10 + a;
//     }else{
//         maxEded = a*100 + c*10 + b;
//         minEded = b*100 + c*10 + a;
//     }
// }else if(b>a && b>c){
//     if (a>c) {
//         maxEded = b*100 +a*10 +c;
//         minEded = c*100 +a*10+ b
//     }else{
//         maxEded = b*100 + c*10 +a;
//         minEded = a*100 + c*10 + b;
//     }
// }else if(c>a && c>b){
//     if(a>b){
//         maxEded = c*100 + a*10 +b;
//         minEded = b*100 + a*10 +c;
//     }else{
//         maxEded = c*100 + b*10 +a;
//         minEded = a*100 + b*10 +c;
//     }
// }
// console.log("maximum eded:" +maxEded);
// console.log("minimum eded:" +minEded);





// Verilmiş arraydə təkrərlanan elementi tapin.

// let array = [12,23,43,54,65,67,89,90,100,23];
// let check;

// for (let i = 0; i < array.length; i++) {
//    check = array[i];
//    for (let j = i; j < array.length; j++) {
//    if (array[j] === check) {
//     console.log(check);
    
//    }
    
//    }
    
// }



// İki Array-də Eyni Elementlərin Tapılması

// let array1 = [1, 3, 5, 7];
// let array2 = [2, 3, 6, 7, 8];

// for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
        
//         if (array1[i] == array2[j]) {
//             console.log(array1[i]);
            
//         }
//     }
    
// }


// Verilmis arrayi tersine cevirib yazin

// let array1 = [12,45,3,18,9];
// let reserved=[];

// for (let index = array1.length-1; index >= 0; index--) {
//    reserved.push(array1[index])
    
// }
//   console.log(reserved);
  
  