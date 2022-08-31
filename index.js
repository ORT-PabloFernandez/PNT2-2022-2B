import chalk from "chalk";

console.log(chalk.bgBlueBright("Hola mundo!!!!!"));
// Pruebas con Spread

// Ejemplo 1
const BETPA = ["Pedro", "Maria", "Jose"];
const BEPNT2 = ["Julian", "Mario", "Clara"];

const UNIFICADO = [...BETPA, ...BEPNT2];
console.log(UNIFICADO);

let cadena = "SPREADssdfsdf";
let outputHTML = [...cadena].forEach((c) => console.log(c));

const inventors = ["Eistein", "Newton", "Galileo"];
const newInventors = ["Musk", "Jobs"];

inventors.push(...newInventors);

console.log(inventors);

function sayHello(nombre, apellido1, apellido2) {
  console.log(`Hola ${nombre} ${apellido1} ${apellido2}`);
}

const fullName = ["Juan", "Perez", "Gonzales"];

sayHello(...fullName);

function convert(rate, ...amounts) {}

convert(295.6, 123, 123, 345);

// SPREAD con Objetos
function ejemplo7() {
  const person = {
    name: "Albert",
    last1: "Einstein",
  };

  const newPerson = {
    ...person,
    last: "Pepe",
    age: 28,
  };

  console.log(newPerson);
}

ejemplo7();
