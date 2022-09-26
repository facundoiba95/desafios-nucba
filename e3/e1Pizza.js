let Pizzas = [
    {id:1,
     nombre:"simple",
     ingredientes: ['queso','tomate','oregano'],
     precio: 500,
    },
  
    {id:2,
      nombre:"completa",
      ingredientes: ['queso','jamon','anchoas','salsa','aceitunas','oregano'],
      precio: 1000,
    },
  
    {id:3,
     nombre:"especial",
     ingredientes: ['muza','salsa','morron','jamon','aceitunas','oregano'],
     precio: 1300,
    },
  
    {id:4,
      nombre:"rucula",
      ingredientes: ['queso','salsa','jamon','rucula'],
      precio: 1400,
    },
  
    {id:5,
      nombre:"palmitos",
      ingredientes: ['queso','salsa','morron','jamon','palmitos'],
      precio: 1300,
    },
  
    {id:6,
      nombre:"muza",
      ingredientes: ['muza','salsa','morron','oregano'],
      precio: 800,
    },
  ]

//   Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso.
  
//   * EJERCICIO A */
  Pizzas.forEach(numero => {
    if(numero.id % 2 != 0)
       console.log(`Las pizzas impares son: ${numero.nombre}`);
  });
  
  /* EJERCICIO B*/
  let menores = Pizzas.filter(pizza => pizza.precio < 600);
  let menoresFriendly = menores.forEach(nombre => {
    console.log(`Las pizzas menores a $600 son : ${nombre.nombre}`)
  });


/* EJERCICIO C */
Pizzas.forEach(nombres => {console.log(`Variedad de pizza : ${nombres.nombre}`)});

/* EJERCICIO D y E*/
Pizzas.forEach(precios => {console.log(`La variedad de pizza "${precios.nombre}" tiene un precio de $${precios.precio}`)});