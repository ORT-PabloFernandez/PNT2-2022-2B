// DESTRUCTURING

function ejemplo1() {
  const persona = {
    nombre: "Pedro",
    apellido: "Navarro",
    pais: "Argentina",
    ciudad: "Buenos Aires",
  };

  const { nombre, apellido } = persona;

  console.log(`Nombre completo: ${nombre} ${apellido}`);
}

const usuario = {
  nombre: "Juan",
  apellido: "Peres",
  links: {
    social: {
      twitter: "https://twitter.com/juanp",
      facebook: "https://facebook.com/juan.perez",
    },
    web: {
      blog: "https://juanperes.com",
    },
  },
};

const { twitter, facebook } = usuario.links.social;

ejemplo1();

// Destructurin con Arrays

const details = ["Juan Perez", 123, "juanp.com"];
const [name, id, website] = details;
console.log(name, id, website);

// Swapping
let a = 5;
let b = 6;

[a, b] = [b, a];
