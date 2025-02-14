//JSON.stringify
console.log("hola");

//crear persona
const persona={
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30
};

//IMPORTANT: JSON.stringify convierte un objeto a un string--------------------------------
//convertir objeto a string
const personaString=JSON.stringify(persona);
console.log(personaString);

//convertir string a objeto
const personaObjeto=JSON.parse(personaString);
console.log(personaObjeto);

/*Que es LocalStorage
Es una API que permite almacenar datos en el navegador de forma persistente.
---------localStorage.setItem("nombre", "valor");--------------
*/
//guardar en local storage

localStorage.setItem("persona",personaString);

//otro ejemplo con variable color blanco---------

const colorBlanco="white";
localStorage.setItem("colorBlanco",colorBlanco);

//ahora vamos a borrar la variable color
localStorage.removeItem("colorBlanco");

//vamos a capturar a la persona de nuevo
const personaLocalStorage=localStorage.getItem("persona");
console.log(personaLocalStorage); //esto es un string

//convertir string a objeto
const personaObjetoLocalStorage=JSON.parse(personaLocalStorage);
console.log(personaObjetoLocalStorage); //esto es un objeto

//vamos a modificar el nombre de la persona por Alberto
personaObjetoLocalStorage.nombre="Alberto";
//almacenar en local storage
localStorage.setItem("persona",JSON.stringify(personaObjetoLocalStorage));


console.log(personaObjeto)
console.log(personaObjetoLocalStorage)