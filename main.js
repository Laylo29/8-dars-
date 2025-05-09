// let users = [
//     {
//         id: 1,
//         name: "Hamroz",
//         surname: "Nuriddinov",
//         age: 18,
//         study: null,
//         achievements: ["Degree of 3rd in Volleyboll"]
//     },
//     {
//         id: 2,
//         name: "Islomxon",
//         surname: "Dexqonov",
//         age: 16,
//         study: undefined,
//         achievements: ["weight 80kg", "Boxer"]
//     },
//     {
//         id: 3,
//         name: "Husniddin",
//         surname: "Ismoilov",
//         age: 17,
//         study: "22-school",
//         achievements: ["nothing"]
//     },
//     {
//         id: 4,
//         name: "Ulug'bek",
//         surname: "Raxmatullayev",
//         age: 20,
//         study: null,
//         achievements: ["nothing"]
//     },
// ]
// let age = prompt("enter age")-0

// function findUser(){
//     let findByAge = users.filter(item => item.age >= age)
//     let listage = findByAge.map(item => item.age)
//     console.log("search By Age", findByAge);
//     console.log("collect age", listAge);

// }
// findUser()

// // 3-masala
// let summa = 0
// let arr = [0,1,2,2,3,3,4,4,5,6,7,1]
// let res1 = arr.filter((item,index) => item % 2 == 0 && index % 2 == 0)
// res1.map(item => summa +=item)
// console.log(res1)
// console.log(summa);



// //4-masala

// let users = [
//         {
//             id: 1,
//             name: "Hamroz",
//             surname: "Nuriddinov",
//             age: 18,
//             study: null,
//             achievements: ["Degree of 3rd in Volleyboll"]
//         },
//         {
//             id: 2,
//             name: "Islomxon",
//             surname: "Dexqonov",
//             age: 16,
//             study: undefined,
//             achievements: ["weight 80kg", "Boxer"]
//         },
//         {
//             id: 3,
//             name: "Husniddin",
//             surname: "Ismoilov",
//             age: 17,
//             study: "22-school",
//             achievements: ["nothing"]
//         },
//         {
//             id: 4,
//             name: "Ulug'bek",
//             surname: "Raxmatullayev",
//             age: 20,
//             study: null,
//             achievements: ["nothing"]
//         },
//     ]


// let id = prompt("Id kiriting") -0
// let res = users.reduce((prev, value) => {
//     if(value.id === id){
//         priv = value
//     }
//     return priv

// })
// console.log(res)




                        //   damashka
                        // 1-vazifa
                         // 1-masala  
                         
// let xodimlar= [
//     {
//         id: 1,
//         name: "javohir",
//         age: 22,
//         salary: 8000
//     },
//     {
//         id: 2,
//         name: "abror",
//         age: 25,
//         salary: 12000 
//     },
//     {
//         id: 3,
//         name: "nozila",
//         age: 20,
//         salary: 1000
//     },
//     {
//         id: 4,
//         name: "madina",
//         age: 29,
//         salary: 5000
//     }
// ]
// let salary = xodimlar.map( item => item.salary )
// let salarySumma = 0;
// salary.forEach(function(maosh) {
//     salarySumma += maosh;
// });
// console.log(salary)
// console.log(salarySumma, "maoshlar yig'indisi")
                                  
                                //    2-masala
// let xodimlar= [
//     {
//         id: 1,
//         name: "javohir",
//         age: 22,
//         salary: 8000
//     },
//     {
//         id: 2,
//         name: "abror",
//         age: 25,
//         salary: 12000 
//     },
//     {
//         id: 3,
//         name: "nozila",
//         age: 20,
//         salary: 1000
//     },
//     {
//         id: 4,
//         name: "madina",
//         age: 29,
//         salary: 5000
//     }
// ] 
// let maxSalary = xodimlar.reduce((max, item) => {
//     if(item.salary > max.salary){
//         return item;
//     }
//     else{
//         return max
//     }
// });
// console.log(maxSalary.name);
                                    // 3-misol
// let xodimlar= [
//     {
//         id: 1,
//         name: "javohir",
//         age: 22,
//         salary: 8000
//     },
//     {
//         id: 2,
//         name: "abror",
//         age: 25,
//         salary: 12000 
//     },
//     {
//         id: 3,
//         name: "nozila",
//         age: 20,
//         salary: 1000
//     },
//     {
//         id: 4,
//         name: "madina",
//         age: 29,
//         salary: 5000
//     }
// ]
// function sortlovchi(){
//     let kriteriya = prompt("Sortlash uchun kriteriyni tanlang (age, name, id, salary)");
//     let tartiblovchi = ["age", "name", "id", "salary"];
    
//     if (tartiblovchi.includes(kriteriya)) {
//       xodimlar.sort((a, b) => {
//         if (a[kriteriya] < b[kriteriya]) return -1;
//         if (a[kriteriya] > b[kriteriya]) return 1;
//         return 0;
//       });
//       console.log(xodimlar); 
//     } 
//     sortlovchiFn(); 
//   }
  
                                       // 4-misol
// let arr = [43, 12, 76, 23, 97, 28, 11];
// let res = sonlar.sort((a, b) => a - b);
// console.log(res);


//                                         //  5-misol
// let sonlar = [43, 12, 76, 23, 97, 28, 11];
// let natija = Math.min(... sonlar)
// console.log(natija);
                                        // 6-misol

// let sozobject = [
//     {   
//                 id: 1,
//                 name: "javohir",
//                 age: 22,
//                 salary: 8000,
//                 size: 98
//             },
//             {
//                 id: 2,
//                 name: "abror",
//                 age: 25,
//                 salary: 12000,
//                 size: 76 
//             },
//             {
//                 id: 3,
//                 name: "nozila",
//                 age: 20,
//                 salary: 1000, 
//                 size: 50
//     }
// ]
// let soz = prompt("Size kiriting")-0
// function sozFn (){
//     let natija = sozobject.find(item => item.size == soz)
//     return natija.name
// }
// console.log(sozFn())

                                        // 7-misol
//   let sozobject = [
//     {   
//                 id: 1,
//                 name: "javohir",
//                 age: 22,
//                 salary: 8000,
//                 size: 98
//             },
//             {
//                 id: 2,
//                 name: "abror",
//                 age: 25,
//                 salary: 12000,
//                 size: 76 
//             },
//             {
//                 id: 3,
//                 name: "nozila",
//                 age: 20,
//                 salary: 1000, 
//                 size: 50
//     }
// ]
// let soz = prompt("id kiriting")-0
// function sozFn (){
//     let natija = sozobject.find(item => item.id == soz)
//     return natija
// }
// console.log(sozFn())
// let natijaIndex = sozobject.findIndex((item) => item.id == soz)
// console.log("Object indexi" ,natijaIndex)
         
                                        //   2-vazifa
                                        //   1-misol
// let sonlar = [55, 3, 2, 11, 3, 4, 6, 7, 12]
// let natija = sonlar.sort((a, b) => a - b)
// console.log(natija)

                                           //2-misol
// let arr = [1, 6, 9, 5, 8, 10, 15]
// function rangeSum (arr){
//     let yigindi = 0
//      for(let i = 2 ; i < 5; i++){
//         yigindi += arr[i]
//      }
//      return yigindi
// }
// console.log(rangeSum(arr))

                                            //3-misol
// let sonlar = [2, 4, 5, 6, 6, 3, 2, 1]
// function natija (){
//     let yangi = []
//     for(let i = 0; i < sonlar.length; i++){
//         if(!yangi.includes(sonlar[i])){
//             yangi.push(sonlar[i])
//         }
//     }
//     return yangi
// }
// console.log(natija())

                                            //4-misol
// let sonlar = [2, 4, 5, 6, 6, 3, 2, 1];
// let sonMax = Math.max(... sonlar.map(item => item))
// let sonMin = Math.min(... sonlar.map(item => item))
// console.log("Berilgan sonlar:", sonlar)
// console.log("Berilganlar ichida eng katta son:", sonMax);
// console.log("Berilganlar ichida eng kichik son:", sonMin);

                                               //6-misol
// let son = Number(prompt("Ixtiyoriy son kiriting"));
// let array = []
// for(let i = 1; i <= son ; i++){
//     array.push(i)
// }
// array.reverse()
// console.log(array)


                                          //7-misol
// let son =  [5, 4, 36, 7, 8, 3, 2, 9, 6, 1,]
// let natija = son.filter(item => item % 2 === 0)
// console.log(natija)
// console.log("Juft sonlar miqdori:" ,natija.length)

                                     //8-misol
// let son = [2, 3, 4, 5, 7]
// let natija = son.filter((item, index) => index % 2 != 0)
// console.log(natija)

                                   //9-misol
// let son =  [5, 4, 36, 7, 8, 3, 2, 9, 6, 1,]
// function natija (){
//     let res = son.filter((item, index) => index % 2 != 0)
//     return res
// }
// console.log( "Toq indexli sonlar:",natija())
// res = natija()
// let maxRes = Math.max(...res)
// console.log( "Toq indexlilar ichida eng kattasi:",maxRes)

                                    //10-misol
// let son =  [5, 4, 36, 7, 8, 3, 2, 9, 6, 1,]
// function natija (){
//     let res = son.filter((item, index) => index % 2 != 0)
//     let maxRes = Math.max(...res)
//     let minRes = Math.min(...res)

//     res = res.map(item => {
//     if(item === maxRes) return 0
//     if(item === minRes) return 0
//     return item
//     })

//     return res
// }

// console.log( natija())


                                      //11-misol
// let son = Number(prompt("Ixtiyoriy son kiriting"));
// let natija = []
// for(let i = 1; i <= son ; i++){
//     natija.push(i)
// }
// let toqSonlar = natija.filter(item => item % 2 != 0)
// console.log(toqSonlar)

                                      //12-misol
// let sonlar = [22, 3, 5, 6, 3, 2, 3];
// let teskariSonlar = [];
// for (let i = sonlar.length - 1; i >= 0; i--) {
//     teskariSonlar.push(sonlar[i]);
// }
// console.log(teskariSonlar);


                                     //13-misol
// let son = [3, 5, 6, 3, 2, 3];
// function fn() {
//     let natija = [...new Set(son)]
//     natija.sort((a , b) => a - b)
//     return natija;
// }
// console.log(fn());


                                     //14-misol
// let son = [3, 5, 6, 3, 2, 3, 4, 5, 8, 9, 1];
// function fn (){
//     let juftSonlar = son.filter(item => item % 2 === 0)
//     let juftlarniKichigi = Math.min(...juftSonlar)
//     return juftlarniKichigi
// }
// console.log(fn())

                                    //  3-vazifa
                                    // 1-misol
// let fruits = [ 'Apple', 'Banana', 'Orange']
// let res = fruits.includes('Banana')
// console.log(res)

                                   //2-misol
// let person = [
//     {
//         name:"Qodir",
//         age: 20
//     },
//     {
//         name:"Abdulloh",
//         age: 19
//     },
//     {
//         name:"Dilshodbek",
//         age: 20
//     }

// ]
// function personFn (){
//     let needPerson = []
//    for(let i = 1; i < person.length; i++){
//     if(person[i].age === 19){
//         needPerson.push(person[i])
//        }
//    }
//     return needPerson
// }
// console.log(personFn())
 
                                        //   3-misol

let arr1 = [2, false, "Hello"]
let arr2 = [null, 5, "Apple"]
let arr3 = ["Username", false, 7]

//                   //  concat bilan
// let res = arr1.concat(arr2 , arr3)



                     // yoyvorish
let natija = [...arr1, ...arr2,... arr3]
console.log(natija)

                                   