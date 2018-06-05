
//Funcion para buscar un elemento en un array

const search = (array, element) => {
  for ( let i = 0; i < array.length; i++ ){
    if (array[i] === element){ 
      return i;
    }
  }
}
  console.log(search([1,2,3,4,5,6,7],4)); //si pongo el número 4, me devuelve la posicion 3. (0,1,2,3)
