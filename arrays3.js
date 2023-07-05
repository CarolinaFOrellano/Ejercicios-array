//1- Doblar números:
//Crea una función que tome un array de números y devuelva un nuevo array donde 
//cada número sea el doble del original.
 function numeroDoble(numeros) {
    let dobles= numeros.map(
            function(numero){
                return numero * 2
            }
        );  
    return dobles
 }
let Numeros=[1, 3, 5, 6]
console.log(numeroDoble(Numeros))

// 2- 
//Nombre a mayúsculas:
//Crea una función que tome un array de nombres y los transforme todos a mayúsculas.
function mayuscula(nombres){
    let pasarMayuscula= nombres.map(
            function(nombre){
              return nombre.toUpperCase()
            }
        );
    
    return pasarMayuscula
}
let nombres=["Pedro", "Ana", "Juan"];
console.log(mayuscula(nombres));



//3- Cuadrado de números:
//Crea una función que tome un array de números y devuelva un nuevo array donde cada número sea el 
//cuadrado del original.
function cuadradoNumeros(numeros){
    let cuadrado= numeros.map(
        function(numero) {
            return numero*numero
        }
    );
    return cuadrado
}
let numeros=[1, 2, 3, 4];
console.log(cuadradoNumeros(numeros));

// 3-Primera letra de cada palabra:
//Dado un array de palabras, crea una función que devuelva un nuevo array donde cada elemento sea la 
//primera letra de cada palabra.
function primeraLetra(palabras){
    let letras= palabras.map(
        function(palabra) {
            return palabra[0]
        }
    );
    return letras
}
let palabras=['Hola', 'mundo', 'desde', 'JavaScript'];
console.log(primeraLetra(palabras))

// 4-Filtrar números pares:
//Crea una función que tome un array de números y devuelva un nuevo array que contenga 
//sólo los números pares.
function numerosPares(numeros1){
   let pares= numeros1.filter(
        function(numero) {
            return (numero%2)==0
        }
   ) ;
   return pares
}

let numeros1=[1, 2, 3, 4, 5, 6];
console.log(numerosPares(numeros1))

//5- Filtrar palabras largas:
//Crea una función que tome un array de palabras y devuelva un nuevo array que contenga sólo las 
//palabras que tienen más de 4 letras. //filter
function palabrasLargas(palabras1){
    let largas= palabras1.filter(
        function(palabra) {
            return palabra.length > 4
        }
    );
    return largas
}
let palabras1=['Hola', 'yo', 'soy', 'JavaScript'];
console.log(palabrasLargas(palabras1))

//6- Filtrar palabras que empiezan con una letra específica:
//Crea una función que tome un array de palabras y una letra. La función debería devolver un nuevo
//array que contenga sólo las palabras que comienzan con esa letra //filter.
function palabrasConM(palabras2, letra){
    let conM= palabras2.filter(
        function(palabra) {
            return palabra.charAt(0) === letra
        }
    )
    return conM
}
let palabras2=['manzana', 'banana', 'mango', 'naranja'];
let letra= "m"
let res= palabrasConM(palabras2, letra);
console.log(res);

//8- Concatenar cadenas: COMO SACO LAS COMAS??
//Crea una función que tome un array de palabras y las combine todas en una sola cadena. 
function concatenarPalabras(palabras) {
    return palabras.join("  ");
  }
  
  let palabras3 = ["Hola", "mundo", "desde", "JavaScript"];
  let resul= concatenarPalabras(palabras3);
  console.log(palabras3);
//Producto de números:
//Crea una función que tome un array de números y devuelva el producto de todos los números en el
// array.
function productoNumeros(numeros4) {
  let producto= numeros4.reduce(
    function(total, numeros4) {
        return total * numeros4 
    }, 1
  );
  return producto

}
let numeros4=[1, 2, 3, 4]; 
console.log(productoNumeros(numeros4));

//Contar ocurrencias de una letra:
//Crea una función que tome una cadena de texto y una letra, y devuelva el número de veces que 
//aparece esa letra en la cadena.
function contarLetras(cadenaAdividir,letras) {
    return cadenaAdividir.split(letras).length -1;
    }
  let cadenaAdividir = "hola mundo desde javascript";
  let letras = "o";
  let resultado1 = contarLetras(cadenaAdividir,letras);
  console.log(resultado1);



















