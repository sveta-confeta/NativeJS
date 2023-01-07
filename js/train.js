const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];
// const addFriends=(students)=>{
//     const name=students.map(m=>m.name);
//     return students.map(m=>({...m,friemds:name.filter(f=> f!==m.name)}))
// }
// console.log(addFriends(students))

function User(name) {
    this.name = name
}

const alex = new User('Alex')
const hanna = new User('Hanna')


const userMetods = {
    showName() {
        console.log(this.name)
    }
}

const user = {name: 'Alex'}

user.__proto__ = userMetods
user.showName()


// let i,j;
//
//
// met1:
// for(i=0;i<4;i++){
//     met2:
//         for(j=0;j<4;j++){
//     if(i==j){
//         continue met1;
//
//     }
//         console.log(`${i} '.' ${j}`)
//     }
// }
//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()


// function repeatString(str,num,arg ){
// // return str.repeat(num)
//     return new Array(num).fill(str).join(arg);
// }
// console.log(repeatString('lo',3, ', ' ))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

// function checkStart(str, p){
//     return str.startsWith(p)
// }
// console.log(checkStart('incubator' ,'f'))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
// function truncateString(str,num){
//     return str.substring(0,num) +'...'
// }
//
// console.log(truncateString
// ("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

// function truncateString(str) {
//
//     const orderedArray = str.split(" ").sort((a, b) => a.length > b.length ? 1 : -1)
//      if(str){
//          return orderedArray[0]
//      }else {
//         return null
//      }
//
// }
//
// console.log(truncateString(''))

// 5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

//Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если всем
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false

// function test(a,b) {
// let x=[];
//    for(let i=a;a<=b;a++){
//        if(a>b){
//            x.push(i++)
//        }
//
//    }
//    let d=x.join(" ")
//    return d;
//  }
//
// console.log(test(3,8))
//cумма массива циклом и редьюсом
function sumNum(...nums) {
    let sum = 0
    for (el of nums) {
        sum = sum + el
    }
    return sum
}

console.log(sumNum(5, 8, 9, 11))

function sumNum2(...nums) {
    let sum = nums.reduce((acc, el) => {
        return acc + el
    })
    return sum
}

console.log(sumNum2(5, 8, 9, 11))


// // 3. Функция getSum принимает параметром целое число и возвращает
// // сумму цифр этого числа
//
// function getSum(number) {
//     let arr = String(number).split("")
//     let sum = 0;
//     for (el of arr) {
//         sum = sum + (+el)
//     }
//     return sum
// }

//console.log(getSum(872))
// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

//  function isEvenIndexSumGreater(arr) {
//    let even1 = arr.map((n,i)=> (i%2===0) ? n :0 ).reduce((ac,el)=>ac+el);
//      let noeven=arr.map((n,i)=>i%2===1 ? n :0).reduce((ac,el)=>ac+el);
//      // let sumEven=0;
//      // let sumNoEven=0;
//      //
//      // for(el of even1){
//      //     sumEven=sumEven+el
//      // }
//      // for(el of noeven){
//      //     sumNoEven=sumNoEven+el
//      // }
//      return even1>noeven
//  }
//
// console.log(isEvenIndexSumGreater([3,4,7,10]))

// function Ner(num){
//     let sum=0;
//     if(num<10 || num >99){
//         alert("num<10 && num >99")
//         return
//     } else{
//         let arr=String(num).split('')
//        // for(let i=0;i<arr.length; i++){
//        //     sum=sum+arr[i];
//        //
//        // }
//        sum=arr.reduce((ac,el)=>{
//            ac+el
//        })
//
//     }
//
//     if(sum<=9){
//         alert("<=9")
//     }else{
//         alert("00")
//     }
//
// }
//
// console.log(Ner(98))

// function Number(num) {
//     let n = num;
//     for ( ; n > 10;) {
//
//         n /= 2;
//
//     }
//     return n
// }
// console.log(Number(50))

// function Number() {
//
//     for ( let i=1; i <= 3;i++) {
//     for ( let j=1; j <= 3;j++){
//       document.write(`${i}${j} `)
//     }
//
//     }
//     return res
// }
// console.log(Number())

// let arr=[1,3,7,1,1,10,10,7,8,8,8,8];
// let count={};
// for ( let el in arr) {
//     count[el]++
//
//
// }
// console.log(count)count

// let arr=[[1,2],[3,4],[5,6]];
// let sum=0;
// for(let el of arr){
//     let res=0
//     for(let e of el){
//         res=res+e
//     }
//     sum=sum+res
//
// }
//
// console.log(sum)

// let a=10 //
//
//
// function f(arg){
//     function inner(){
//         a=a+c+arg ;
//         console.log(a)
//
//     }
//     let g=50;
//     a=a+g; //60
//
//
//     return inner
// }
//
// var c=500
//
// let func=f(100)
//
// func();
// func()

// const pow=(num)=>{
//     if(num===1){
//         return num;
//     }
//
//     return num+pow(num-1)
// }
//
// console.log(pow(10))

// let arrow=[[1,3,7,1],[1,10,10],[7,8,8,8,8]];
// let sum=0;
//
// for (let element of arrow){
//     for(let el of element){
//        sum=sum+el
//     }
// }
// document.write(sum)

// let arr=[]
// for (let i=0; i<=2; i++){
// arr[i]=[]
//     for (let j=0; j<=1; j++) {
//         arr[i][j] = []
//         for (let k = 0; k <= 4; k++) {
//             arr[i][j][k] = k + 1
//         }
//     }
// }
// console.log(arr)
// let obj = [
//     {1: ['ab', 'hj', 'data3'], 2: ['ab', 'hj', 'data3']},
//     {1: ['ab', 'hj', 'data3'], 2: ['ab', 'hj', 'data3'], 3: ['ab', 'hj', 'data3']},
//     {1: ['ab', 'hj', 'data3'], 2: ['ab', 'hj', 'data3'], 3: ['ab', 'hj', 'data3']},
// ]
//
// for (let element of obj) { //element {}
//     for (let el in element) {//el 1
//         // console.log(element[el]) //[]
//         for (let i of element[el]) {
//             console.log(i+' ')
//         }
//     }
// }

// function Test (num){
//     let obj={}
//     let sum=Math.sqrt(num)
//     obj['floor']=Math.floor(sum)
//     obj['ceil']=Math.ceil(sum)
//     return obj
//
// }

// console.log(Test(587))
// function makeWorker() {
//     let name = "Pete";
//
//     return function() {
//         alert(name);
//     };
// }
//
// let name = "John";
//
// // create a function
// let work = makeWorker();
//
// // call it
// work();call


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
// function sum(num){
//     return function (num2){
//         return num + num2
//     }
// }
//console.log(sum(3)(6))
// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
function makeCounter(){
    let num=0
    return function() {
        return ++num//
    };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter()); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
//export default () => {};
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0