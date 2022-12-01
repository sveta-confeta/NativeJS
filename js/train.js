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
    for(el of nums){
        sum=sum+el
    }
    return sum
}

console.log(sumNum(5,8,9,11))

function sumNum2(...nums) {
   let sum=nums.reduce((acc,el)=>{
      return  acc+el
   })
    return sum
}

console.log(sumNum2(5,8,9,11))