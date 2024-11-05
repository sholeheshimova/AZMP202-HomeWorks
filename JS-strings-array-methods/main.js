// 1 Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.convertToUpper("Hello World");

// function upper(cumle) {
//     return cumle.toUpperCase();
// }
// console.log(upper("hello world"));


// 2 Daxil edilən cümlədə ən uzun sozu return edən funksiya yazın

// function enUzunSoz(cumle) {
//     let  soz = cumle.split(" ");
//     let enUzun = soz[0];

//     for (let i = 0; i < soz.length; i++) {
//         if (soz[i].length > enUzun.length) {
//             enUzun = soz[i];
//         }
        
//     }
//     return enUzun;
// }
// console.log(enUzunSoz("hi my name is shola"));


// 3 Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.


// function tersSira(cumle) {
//    let soz = cumle.split(" ");
//    soz.reverse();

//    let terSoz = soz.join(" ")

//    return terSoz;
// }
// console.log(tersSira("hi my name is shola"));



 //4 Cümlədəki bir hərfi başqası ilə əvəzləyən və lowerCase edilmiş şəkildə qaytaran bir funksiya yazın.

// function replaceChracter(soz) {
//     return soz.replace(/a/g, "o").toLowerCase();
// }
// console.log(replaceChracter("salam"));


// ARRAY METHODS TASK

// 1 add 'Meat' in the beginning of your shopping cart if it has not been already added

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// shoppingCart.unshift('Meat');
// console.log(shoppingCart);

// 2 add Sugar at the end of you shopping cart if it has not been already added

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// shoppingCart.push('Sugar');
// console.log(shoppingCart);


// 3 remove 'Honey' if you are allergic to honey

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.pop();
// console.log(shoppingCart);


  
// 2 Reverse countries array using reverse() method

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

//   console.log(countries.reverse());
  



// 3  remove "Canada" and "Denmark", and add "Azerbaijan 
// (splice)

// const countries = [
//         'Albania',
//         'Bolivia',
//         'Canada',
//         'Denmark',
//         'Ethiopia',
//         'Finland',
//         'Germany',
//         'Hungary',
//         'Ireland',
//         'Japan',
//         'Kenya'
//       ]

//       countries.splice(2, 2, 'Azerbaijan')

// console.log(countries);


// 3) #Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// let fullStack = frontEnd.concat(backEnd);

// console.log(fullStack);


// 1 Slice out the first 3 companies from the array

// const itCompanies = ["Facebook", "Google", "Microsoft"," Apple", "IBM", "Oracle", "Amazon"];

// let kesilmis =  itCompanies.slice(3, 7);

// console.log(kesilmis);


//2 Slice out the last 3 companies from the array

// const itCompanies = ["Facebook", "Google", "Microsoft"," Apple", "IBM", "Oracle", "Amazon"];

// let kesilmis =  itCompanies.slice(0, 4);

// console.log(kesilmis);


//  3 Slice out the middle IT company or companies from the array

// const itCompanies = ["Facebook", "Google", "Microsoft"," Apple", "IBM", "Oracle", "Amazon"];

// let orta = itCompanies.slice(3 ,4 )

// console.log(orta);

//  4 Sort companies array using sort() method

// const itCompanies = ["Facebook", "Google", "Microsoft"," Apple", "IBM", "Oracle", "Amazon"];

// console.log(itCompanies.sort());


// 5 Change each company name to uppercase one by one and print them out 


// const itCompanies = ["Facebook", "Google", "Microsoft"," Apple", "IBM", "Oracle", "Amazon"];

// for (let i = 0; i < itCompanies.length; i++) {
  
//     console.log(itCompanies[i].toUpperCase());
    
// }


// 7 Check if a "Google" company exists in the itCompanies array.
//  If it exist return the company else return a company is not found

// const itCompanies = ["Facebook", "Google", "Microsoft"," Apple", "IBM", "Oracle", "Amazon"];

// if (itCompanies.includes("Google")) {
//     console.log("bu sirket var");
    
// }else{
//     console.log("bu sirket yoxdur");
    
// }


// #Filter out companies which have more than one 'o' without the filter method

// const itCompanies = ["Facebook", "Google", "Microsoft"," Apple", "IBM", "Oracle", "Amazon"];
// for (let i = 0; i< itCompanies.length; i++){
//         if (
//                 itCompanies[i].toLowerCase().includes("o") && itCompanies[i].toLowerCase().indexOf("o") !== itCompanies[i].toLowerCase().lastIndexOf("o")
//                 )
//         {
//                 console.log(itCompanies[i]));

//         }

// }

// 5) 

// Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki
//  array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse
//   output -> 1*2*3*4 string-i olmalidir.



// function newArray(arr1 , arr2 , char) {
//     let birlesmisArray = arr1.concat(arr2);
//     return birlesmisArray.join(char);
// }

// console.log(newArray([1,2], [3,4], '*'));



