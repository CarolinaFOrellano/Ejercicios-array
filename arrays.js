//Ejercicios Básicos
//1- Ejercicio de push y pop:
//a-Crea un array vacío llamado "frutas".
//b-Utiliza el método push para agregar las siguientes frutas al array: "manzana", "banana" y "naranja".
//c-Utiliza el método pop para eliminar la última fruta del array.
//d-Imprime el array resultante.
//a
let frutas= []
//b
frutas.push("manzana", "banana", "naranja");
console.log(frutas); 
//c-
frutas.pop(); 
//d
console.log(frutas);

//2- Ejercicio de join y split:
//a-Crea un array llamado "nombres" con los siguientes elementos: "Juan", "María", "Pedro".
//b-Utiliza el método join para unir todos los nombres en una cadena separada por comas.
//c-Guarda el resultado en una variable llamada "nombresCompletos".
//d-Utiliza el método split para convertir la cadena "nombresCompletos" nuevamente en un array.
//e-Imprime el array resultante
//a- 
let nombres= ["Juan", "Maria", "Pedro"];
console.log(nombres);
//b-
let nombresString=nombres.join(",");
console.log(nombresString);
//c- 
let nombresCompletos= nombresString;
console.log(nombresCompletos);
//d-
let arrayNombresCompletos= nombresCompletos.split(",");
//e- 
console.log(arrayNombresCompletos);

//3- Ejercicio de slice y splice:
//a- Crea un array llamado "numeros" con los números del 1 al 5.
//b- Utiliza el método slice para crear un nuevo array llamado "subArray" que contenga los elementos 
//desde el índice 2 hasta el final.
//c-Utiliza el método splice para eliminar los dos últimos elementos del array "numeros".
//d-Imprime tanto el array "subArray" como el array "numeros" resultantes.
//a-
let numeros1=[1, 2, 3, 4, 5];
//b-
let subArray= numeros1.slice(3, 5);
//c-
let numeros2= numeros1.splice(3, 4);
//d-
console.log(subArray);
console.log(numeros2);
//4- 4. Ejercicio de map:
//a-Crea un array llamado "numeros" con los números del 1 al 5.
//b-Utiliza el método map para multiplicar cada número por 2.
//c-Guarda el resultado en un nuevo array llamado "dobles".
//d-Imprime el array "dobles".
//a-
let Numeros=[1, 2, 3, 4, 5];
//b- y c-
let dobles= Numeros.map(function(Numero){
    return Numero*2});
//d- 
console.log(dobles);
//5. Ejercicio de filter:
//a-Crea un array llamado "edades" con los siguientes elementos: 18, 25, 12, 30, 15.
//b-Utiliza el método filter para obtener un nuevo array llamado "mayoresDeEdad" que contenga solo 
//las edades mayores o iguales a 18.
//c-Imprime el array "mayoresDeEdad".
//a-
let edades=[18, 25, 12, 30, 15];
//b-
let mayoresDeEdad=edades.filter(function(edad){return edad >= 18});
//c-
console.log(mayoresDeEdad);

//1- Ejercicio de length:
//a-Crea un array llamado "colores" con los siguientes elementos: "rojo", "verde", "azul".
//b-Imprime la longitud del array utilizando la propiedad length.
//a-
let colores=["rojo", "verde", "azul"];
//b-
console.log(colores.length);

//2-Ejercicio de indexOf y lastIndexOf:
//a-Crea un array llamado "numeros" con los siguientes elementos: 1, 3, 5, 3, 7, 3.
//b-Utiliza el método indexOf para encontrar la primera aparición del número 3 en el array.
//c-Utiliza el método lastIndexOf para encontrar la última aparición del número 3 en el array.
//d-Imprime ambos resultados.
//a-
let numeros=[1, 3, 5, 3, 7, 3];
//b-
let index= numeros.indexOf(3);
//c-
let indexUltimo= numeros.lastIndexOf(3);
//d-
console.log(index);
console.log(indexUltimo);

//3-Ejercicio de includes:
//a-Crea un array llamado "frutas" con los siguientes elementos: "manzana", "banana", "naranja".
//b-Utiliza el método includes para verificar si el array contiene la fruta "pera".
//c-Imprime el resultado.
//a-
let frutas1=["manzana", "banana", "naranja"];
//b- y c-
console.log(frutas1.includes("pera"));

//4-Ejercicio de reverse:
//a-Crea un array llamado "letras" con los siguientes elementos: "a", "b", "c", "d".
//b-Utiliza el método reverse para invertir el orden de los elementos en el array.
//c-Imprime el array resultante.
//a-
let letras=["a", "b", "c", "d"];
//b-
letras.reverse();
//c-
console.log(letras);

//5-Ejercicio de sort:
//a-Crea un array llamado "numeros" con los siguientes elementos: 5, 2, 9, 1, 7.
//b-Utiliza el método sort para ordenar los números de forma ascendente.
//c-Imprime el array resultante.
//a-
let numeros3=[5, 2, 9, 1, 7];
//b-
numeros3.sort();
//c-
console.log(numeros3);

//6-Ejercicio de concat:
//a-Crea dos arrays: "nombres1" con los elementos "Juan", "María" y "nombres2" con los elementos "Pedro", "Laura".
//b-Utiliza el método concat para unir los dos arrays en uno nuevo llamado "nombresCompletos".
//c-Imprime el array "nombresCompletos".
//a-
let nombres1=["Juan", "Maria"];
let nombres2=["Pedro", "Laura"];
//b-
let NombresCompletos= nombres1.concat(nombres2);
//c-
console.log(NombresCompletos);
//7-Ejercicio de every:
//a-Crea un array llamado "edades" con los siguientes elementos: 22, 35, 28, 42.
//b-Utiliza el método every para verificar si todas las edades son mayores de 18.
//c-Imprime el resultado.
//a-
let edades1=[22, 35, 28, 42];
//b-
let edadesMayor18 = edades1.every(function (edades1) {
return edades1 >= 18;
});
//c- 
console.log(edadesMayor18);

//8-Ejercicio de some:
//a-Crea un array llamado "notas" con los siguientes elementos: 7, 5, 9, 3.
//bUtiliza el método some para verificar si alguna nota es mayor o igual a 8.
//c-Imprime el resultado.
//a-
let notas=[7, 5, 9, 3];
//b-
let notaMayor8= notas.some(function(nota) {
return nota > 8;
});
//c-
console.log(notaMayor8);
//9-Ejercicio de reduce:
//a-Crea un array llamado "numeros" con los siguientes elementos: 1, 2, 3, 4, 5.
//b-Utiliza el método reduce para obtener la suma de todos los números en el array.
//c-Imprime el resultado.
//a-
let numeroS=[1, 2, 3, 4, 5];
//b-
let res= numeroS.reduce(function(total, numeroS){return total+numeroS}, 0);
//c-
console.log(res);





