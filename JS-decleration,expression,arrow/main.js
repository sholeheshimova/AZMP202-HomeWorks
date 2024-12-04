// 1. Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function. Misalçün function-a gələn ilk arqumenti 2-ci arqument qədər qüvvətə yüksəldən function - dəyərləri prompt vasitəsi ilə qəbul edib function-a göndərin)


// function quvvet(num1, num2) {
//     let = +prompt("num1 i daxil edin")
//     let = +prompt("num2 ni daxil edin")

//     if (num2 ** num1) {
//         alert(num2 ** num1);
        
//     }else{
//         alert("ifade dogru deyil");
        
//     }
// }

// quvvet(4 , 5);



// 2.Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni,
//     3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.
// Məsələn:
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// Expected Output:
// [20, 30, 10, 40, 50]


// function move(array , evvelkiIndex , yeniIndex) {
//     let element = array[evvelkiIndex];
//     let newArray = [];
    
//     for (let i = 0; i < array.length; i++) {
//         if (i === evvelkiIndex) {
//             if (i < yeniIndex) {
//                 newArray.push(element);
//             }
//         }
        
//         if (i !== evvelkiIndex) {
//             newArray.push(array[i]);
//         }

//         if (i === evvelkiIndex && i > yeniIndex) {
//             newArray.push(element);
//         }
//     }

//     return newArray;
// }

// console.log(move([10,20,30,40,50], 0, 2));




// 3.Daxil edilən arraydə təkrarlanan elementi silən və yeni array qaytaran funksiya yazın.
// Məsələn:
// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]))


// function deleteRepeate(array) {
//     let newArray = [];
//     let tekrarlanan = {};

//     for (let i = 0; i < array.length; i++) {
//        if (!tekrarlanan[array[i]]) {
//          newArray.push(array[i]);
//          tekrarlanan[array[i]] = true
//        }
        
//        }
//        return newArray;
        
//     }
//     console.log(deleteRepeate([1,2,2,3,4,4,5]));



// 4.Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.
// sentenceCapitalization("a short sentence")


// function sentenceCapitalization(sentence) {
//  let  newSentence = '';
//     for (let i = 0; i < sentence.length; i++) {
//         if (i === 0 ) {
//             newSentence += sentence[i].toUpperCase();
//         }else {
//             newSentence += sentence[i]
//         }
        
//     }
//     return newSentence;
// }
// console.log(sentenceCapitalization("hello our azmp202 team!"));




// 5. Daxil edilən iki arrayi birləşdirən funksiya yazın.
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))
    

// function firstArray(array1, array2) {
//     let birlesmisArray = [];

//     for (let i = 0; i < array1.length; i++) {
//         birlesmisArray.push(array1[i])
        
//     }
//     for (let j = 0; j < array2.length; j++) {
//         birlesmisArray.push(array2[j])
        
//     }
//     return birlesmisArray;
// }

// console.log(firstArray([1,2,3,4,5], [6,7,8,9,10]));



// 6. Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın.


// 7. Function yazın. Parametr qəbul etsin və bu parametr bir array (ədədlərdən ibraət array) olsun. Funksiya həmin arrayin medianını tapsın
// .Median ən ortada dayanan ədədi bildirir.
//  Əgər array uzunluğu cütdürsə onda ortadakı 2 ədədin cəminin yarısı median olacaqdır.


// function findMedian(array) {
//     let median;
//     for (let i = 0; i < array.length; i++) {
//         let say = 0;
//         for (let j = 0; j < array.length; j++) {
//             if (array[j] < array[i]) {
//                 say ++;
//             }
            
//         }
//         if (say === Math.floor(array.length / 2)) {
//             median = array[i];
//             break;
//         }
        
//     }
//     return median;

// }
// console.log("Median:" , findMedian([1,2,3,4,5]));



//8.Write a method that returns a duplicate-free array.

// function dublicate(arr) {
//     const array = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (!array.includes(arr[i])) {
//         array.push(arr[i]);
//       }
//     }
//     return array;
//   }
  
//   console.log(dublicate([1, 2, 1, 2, 3])); 
//   console.log(dublicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false]));



// 9. 

// Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi 
// indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.


// function charIndexSum(string , char) {
//     let sum = 0;
//     let found = false;
//     for (let i = 0; i < string.length; i++) {
//        if (string[i] === char) {
//           sum +=i;
//           found = true;
//        }
        
//     }

//     if (found) {
//         return sum;
//     }else {
//         return -1;
//     }
// }

// console.log(charIndexSum("salam" , 'a'));
// console.log(charIndexSum("salam" , 'z'));


//10 const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// countries arrayindəki ölkələrin ilk 3 hərfini (hər bir hərf böyük olmalıdır) yeni arrayda yığın

// output: ["FIN", "DEN", "SWE", "NOR", "ICE"];


// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

// const letters = countries.map(country => country.slice(0, 3).toUpperCase());

// console.log(letters); 



// 12.
// Write a function that compares two arrays and returns true if they are identical.


// function isEqual(array1 , array2) {
//     if (array1.length !== array2.length) {
//         return false;
//     }else{
//         return true;
//     }
    
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             return false;
//         }else{
//             return true;
//         }
        
//     }
// }

// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])); // -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])); // -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])); // -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])); // -> true