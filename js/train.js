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

const carProtorype={
    count:4,
    showMark(){
        console.log(this.mark)
    }
}

const ford ={
    mark:'Ford'
}
const bmv={
    mark:'Bmv'
}

ford.f=carProtorype.showMark
bmv.f=carProtorype.showMark

ford.f()
bmv.f()









