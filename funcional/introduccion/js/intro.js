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
console.log(cachar);