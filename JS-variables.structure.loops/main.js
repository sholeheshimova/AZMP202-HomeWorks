
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
