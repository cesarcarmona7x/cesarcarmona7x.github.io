//Imperativa
const hola="Pedro";
const decirHola=()=>{
    console.log(`Hi, ${hola}`);
}
// decirHola();
//Funcional
// const dHi=(name)=>`Hi, ${name}`;
// console.log(dHi("José"));

const sum = (a,b) => a+b;
const sum2 = (a,b) => a-b;
const suma = (a,b,rrrr) =>rrrr(a,b);
let cachar=suma(2,2,sum2);
//console.log(cachar);

/* Funciones adicionales */
var numbers=[1,5,10,15];
var llenado=[...numbers];
var numbers2=[2,6,11,16];
var users=[
    {id:1,age:10,name:"tal"},
    {id:2,age:15,name:"tal"},
    {id:3,age:18,name:"tal"},
];
var multidim=[
    1,2,3,4,5,6,7,8,[9,10],[[[11,[12]]]]
];
/* Funciones vistas en clase */
//map mapea o
var doubles=users.map((num)=>num.age*3);
//reduce el arreglo según la condición
const reducer=(previousValue,currentValue)=>previousValue+currentValue;
var reduce=numbers.reduce(reducer,5);
let filter=numbers.filter((num)=>num>6);
let found=users.find((user)=>user.age>14);
console.log(found);
/* Funciones de tarea */
var concatenar=numbers.concat(numbers2);
var llenar=llenado.fill(5);
const todificador=(user)=>user.age<=18;
var todos=users.every(todificador);
//??? No se ve que haga nada
var aplanar=multidim.flat(0);
var incluye=numbers.includes(10);
var pop=numbers.pop();
var push=numbers2.push(20);
var copiarParte=multidim.slice(3,9);
var ordenarAlreves=numbers.sort((a,b)=>b-a);
var que=multidim.splice(7);
console.log("concat: "+concatenar);
console.log("fill: "+llenar);
console.log("every: "+todos);
console.log("flat: "+aplanar);
console.log("includes: "+incluye);
console.log("pop: "+pop);
console.log("push: "+push);
console.log("slice: "+copiarParte);
console.log("sort: "+ordenarAlreves);
console.log("splice: "+que);