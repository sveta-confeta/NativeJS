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

function User(name){
    this.name=name
}
const alex=new User('Alex')
const hanna=new User('Hanna')


const userMetods={
    showName(){
        console.log(this.name)
    }
}

const user={ name:'Alex'}

user.__proto__=userMetods
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


function repeatString(str,num,arg ){
// return str.repeat(num)
    return new Array(num).fill(str).join(arg);
}
console.log(repeatString('lo',3, ', ' ))
