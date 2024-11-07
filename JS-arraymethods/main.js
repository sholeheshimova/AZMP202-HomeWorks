let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];


  // 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

//   let tIleBaslayan = arr.filter(item => item.name.startsWith('t'));

// console.log(tIleBaslayan);


// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)

// let say = 0;

// arr.forEach(item => {
//   if (item.name.startsWith("t") && item.name.endsWith("t")) {
//     say ++;
//   }
// })
// console.log(say);



// 3) "name"-i "t" herfi ilebashlayib "t" herfi ile biten obyektlerin "key
// "lerinin cemini tapin

// let cem = 0;
// arr.forEach(item => {
//   if (item.name.startsWith("t") && item.name.endsWith("t")){
//     cem +=item.key
//   }
// })
// console.log(cem);



// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// arr.forEach(item => {
//   if (item.name.endsWith("e")) {
//     item.name = "SuperDev"
//   }
// })
// console.log(arr);



// 5) "name"-i en uzun olan obyekti tapin

  // let enUzunObyekt = arr.reduce((uzun , qisa) => {
  //   if (qisa.name.length > uzun.name.length){
  //     return qisa;
  //   }
  //   return uzun;
  // })
  // console.log(enUzunObyekt);



  // / 6) "name"-i en uzun olan obyektin key'ni tapin


  // let enuzunKey = arr.reduce((uzun , qisa) => {
  //   if (qisa.name.length > uzun.name.length){
  //     return qisa;
  //   }
  //   return uzun;
  // })
  // console.log(enuzunKey.key);



  // / 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

//   let enuzunObyekt = arr.reduce((uzun , qisa) => {
//     if (qisa.name.length > uzun.name.length) {
//       return qisa;
//     }
//     return uzun;
//   });

//   let index = arr.findIndex(item => item === enuzunObyekt);
//  let indexKvadrati = index**2;
//  console.log(indexKvadrati);
 



// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)

  
// let uzunlug = arr.filter(item => item.name.length === 4);
// console.log(uzunlug);



// / 9)  en boyuk "key"i olan obyektin "name"-i ni tapin

// let keyiBoyukOlan = arr.reduce((uzun , qisa) => {
//   if (qisa.key > uzun.key) {
//     return qisa;
//   }
//   return uzun;
// })

// console.log(keyiBoyukOlan.name);



// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.

// let result = arr.filter((elem) => elem.name.split("l").length = 3);
// console.log(result);


// / 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

// let result = arr.filter((elem) => elem.name.split("t").length = 2);
// console.log(result);


// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq

// let obyektTap = arr.filter(item => item.key >10 &&  item.name.startsWith("l"));
// console.log(obyektTap);







  