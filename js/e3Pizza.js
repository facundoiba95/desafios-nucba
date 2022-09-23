
let Pizzas = [
    {id:1,
     nombre:"Simple",
     ingredientes: ['queso','tomate','oregano'],
     precio: 500,
     imagen: './js/pizza-simple.jpg'
    },
  
    { id:2,
      nombre:"Completa",
      ingredientes: ['queso','jamon','anchoas','salsa','aceitunas','oregano'],
      precio: 1000,
      imagen: './js/pizza-completa.jpg'
    },
  
    {id:3,
     nombre:"Especial",
     ingredientes: ['muza','salsa','morron','jamon','aceitunas','oregano'],
     precio: 1300,
     imagen: './js/pizza-especial.jpg'
    },
  
    {id:4,
      nombre:"Rucula",
      ingredientes: ['queso','salsa','jamon','rucula'],
      precio: 1400,
      imagen: './js/pizza-rucula.avif'
    },
  
    {id:5,
      nombre:"Palmitos",
      ingredientes: ['queso','salsa','morron','jamon','palmitos'],
      precio: 1300,
      imagen: './js/pizza-palmitos.jpg'
    },
  
    { id:6,
      nombre:"Muzzarella",
      ingredientes: ['muza','salsa','morron','oregano'],
      precio: 800,
      imagen: './js/pizza-mozzarella.jfif'
    },
  ]



  const infoPizza = document.querySelector('.info-pizza')
  const input = document.querySelector('.seleccionar');
  const seleccionarBtn = document.querySelector('.seleccionar-btn');
  const errorMessage = document.querySelector('.error-message')

  //nuevo array donde se guardan las pizzas filtradas en pizzaId
  let nuevoPizzas = []

  //guardar array original en localStorage
  localStorage.setItem('pizzas',JSON.stringify(Pizzas));



  const pizzaId = () => {

    const filterId = input.value;

    if(!filterId.length){
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = createHtmlErrorNoneText();
        errorMessage.style.animation = 'headShake 1s reverse infinite '
        nuevoPizzas = [];
        input.value = '';
        renderPizza(nuevoPizzas);
        return;

      } else if(filterId < 1 || filterId > 6){
        errorMessage.style.visibility = 'visible';
        errorMessage.style.animation = 'headShake 1s reverse infinite '
        errorMessage.innerHTML = createHtmlErrorOptions()
        nuevoPizzas = [];
        input.value = '';
        renderPizza(nuevoPizzas);
        return;

      } else if(
        nuevoPizzas = Pizzas.filter(pizza => pizza.id === parseInt(filterId))
      ){
        errorMessage.style.visibility = 'hidden';
      }

      renderPizza(nuevoPizzas);
     
    }
      
      
   //se crea el html, recibe el array de pizzas original como parametro.
   const createHtmlPizza = pizzas => {
      return `<img src="${pizzas.imagen}" class="imagenes" >
              <h2 class="title"><p>Variedad: </p>${pizzas.nombre}</h2>
              <h4 class="precio"><p>Precio: </p>$${pizzas.precio}</h4>
            
              
              `
    }

    const createHtmlErrorNoneText = () => {
        return `<h3 class="message">Por favor, elegi una opcion !</h3>`
    }

    const createHtmlErrorOptions = () => {
        return `<h3 class="message">Por favor, elíge opciones de 1 a 6 !</h3>`
    }

  const renderPizza = pizza => infoPizza.innerHTML = pizza.map(pizzita => createHtmlPizza(pizzita))
     


  const init = () => {
    seleccionarBtn.addEventListener('click', pizzaId)
    errorMessage.style.visibility = 'hidden';
    
    }


  init();



