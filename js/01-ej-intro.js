/* 1) Realizá un programa que permita al usuario ingresar su nombre. 
La computadora debe emitir una salida con un mensaje de bienvenida que incluya el nombre ingresado.

let miNombre
miNombre = "Daniela" // Hardcodear 
console.log("¡Bienvenida " + miNombre + "!");

PARA QUE SE VEA MOVER EL COMENTARIO
*/

/* 2) Realizá un programa que permita al usuario ingresar un número entero. 
La computadora debe informar el número opuesto1 y el número inverso2 del ingresado.

let numeroEntero
numeroEntero = "7"
console.log(numeroEntero * -1) // numero opuesto - numero multiplicado por -1
console.log(1 / numeroEntero) // numero inverso - 1 dividido el numero

*/

/* 3) Realizá un programa que permita al usuario ingresar 3 notas pertenecientes a tres trimestres
distintos para cierto alumno. La computadora debe mostrar la nota promedio. (Ver ejemplo)

let nombreAlumno
let trimestre1
let trimestre2
let trimestre3
let promedioTrimestre

nombreAlumno = prompt("¿Cuál es el nombre del alumno?");
trimestre1 = parseInt(prompt("Ingrese la nota del primer trimestre"));
trimestre2 = parseInt(prompt("Ingrese la nota del segundo trimestre"));
trimestre3 = parseInt(prompt("Ingrese la nota del tercer trimestre"));

promedioTrimestre = (trimestre1 + trimestre2 + trimestre3 ) / 3

console.log("El promedio de " + nombreAlumno + " es de " + promedioTrimestre);

*/

/*
4) Realizá un programa que permita al usuario ingresar el valor salarial de una hora de trabajo y la
cantidad de horas trabajadas por día. La computadora debe mostrar el valor del salario semanal,
asumiendo que trabaja todos los días hábiles y media jornada los sábados. (Ver ejemplo) 

let montoHoraTrabajo
let horasTrabajadasPorDia
let salarioSemanal

montoHoraTrabajo = parseInt(prompt("Ingrese el valor monetario por hora de trabajo"))
horasTrabajadasPorDia = parseInt(prompt("Ingrese cuantas horas al día trabaja"))

salarioSemanal = (horasTrabajadasPorDia * 5.5) * montoHoraTrabajo

console.log("El sueldo semanal es de $" + salarioSemanal)
*/

/*
5) Realizá un programa que permita al usuario ingresar valores del mismo tipo para las variables a
y b. Una vez cargadas, la computadora debe mostrar ambas variables por pantalla, intercambiar
entre sí sus valores (que lo cargado en a quede en b, y viceversa), y volver a mostrarlas.

let valorA
let valorB

valorA = parseInt(prompt("Ingrese un número"));
valorB = parseInt(prompt("Ingrese un número distinto al ingresado"));

console.log("El valor A es: " + valorA);
console.log("El valor B es: " + valorB);
console.log("Se muestran los valores intercambiados: " + valorB + " y " + valorA)

*/

/*
6) Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la
cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000
más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el sueldo
mensual del vendedor y mostrarlo.

let valorArticulo
let cantArticuloVendido
let sueldoMensual

valorArticulo = parseInt(prompt("¿Cuánto vale la unidad el articulo?"));
cantArticuloVendido = parseInt(prompt("¿Cuántos artículos se vendieron en el mes?"));

sueldoMensual = ((cantArticuloVendido * valorArticulo)*(16/100));

console.log("El sueldo mensual es de $ " + (sueldoMensual + 14000));

*/

/* INCOMPLETO
7) Realizá un programa que permita al usuario ingresar el ancho y el largo de un terreno en metros
y el valor del metro cuadrado de tierra. 
La computadora debe mostrar el valor total del terreno y la
cantidad de metros de alambre que serían necesarios para cercarlo completamente en tres pasadas.  

let anchoTerreno
let largoTerreno
let valorMetroCuadradoTerreno
let valorTotalTerreno
let metrosAlambre

anchoTerreno = parseInt(prompt("Ingresa el ancho del terreno"));
largoTerreno = parseInt(prompt("Ingresa el  largo del terreno"));
valorMetroCuadradoTerreno = parseInt(prompt("¿Cuánto vale el metro cuadrado del terreno?"));

valorTotalTerreno = (((anchoTerreno + largoTerreno)*2)* valorMetroCuadradoTerreno);

console.log("valor terreno " + valorTotalTerreno);

*/
/*
8) Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe
mostrar los resultados de las 4 operaciones matemáticas básicas con tales números.

let num1
let num2

num1= parseInt(prompt("Ingresa un numero del 1 al 10"));
num2= parseInt(prompt("Ingresa un numero del 1 al 10"));

console.log(num1 + num2); //suma
console.log(num1 - num2); //resta
console.log(num1 * num2); //multiplicacion
console.log(num1 / num2); //division

*/

/*9) Realizá un programa que permita al usuario ingresar dos números enteros, que representan las
medidas en grados de dos ángulos interiores de cierto triángulo. La computadora debe mostrar el
valor en grados del ángulo restante.

let anguloInt1
let anguloInt2
let anguloInt3

anguloInt1 = parseInt(prompt("Ingresá el valor del ángulo interior 1"));
anguloInt2 = parseInt(prompt("Ingresá el valor del ángulo interior 2"));

anguloInt3 = (180 - anguloInt1 - anguloInt2);

console.log("Ángulo 1 " + anguloInt1 + "°");
console.log("Ángulo 2 " + anguloInt2 + "°");
console.log("El valor del ángulo 3 es de " + anguloInt3 + "°.");

*/
/*
10) Realizá un programa que permita al usuario ingresar los nombres de tres inversores junto al
capital invertido por cada uno. La computadora debe informar qué porcentaje del total aportó cada
uno y cuál es el monto del total aportado entre los tres.

let inversor1
let inversor2
let inversor3
let capitalInversor1
let capitalInversor2
let capitalInversor3

let porcentajeInversor1
let porcentajeInversor2
let porcentajeInversor3

let montoTotalAportado

inversor1 = prompt("Ingresa el nombre del primer inversor");
capitalInversor1 = parseInt(prompt("¿Cuánto capital aportó?"));
inversor2 = prompt("Ingresa el nombre del segundo inversor");
capitalInversor2 = parseInt(prompt("¿Cuánto capital aportó?"));
inversor3 = prompt("Ingresa el nombre del tercer inversor");
capitalInversor3 = parseInt(prompt("¿Cuánto capital aportó?"));

console.log("Inversor " + inversor1 + " aportó $" + capitalInversor1);
console.log("Inversor " + inversor2 + " aportó $" + capitalInversor2);
console.log("Inversor " + inversor3 + " aportó $" + capitalInversor3);

montoTotalAportado = (capitalInversor1 + capitalInversor2+ capitalInversor3);

console.log(inversor1 + " aportó el " + (100*capitalInversor1/montoTotalAportado) + "% del capital total.");
console.log(inversor2 + " aportó el " + (100*capitalInversor2/montoTotalAportado) + "% del capital total.");
console.log(inversor3 + " aportó el " + (100*capitalInversor3/montoTotalAportado) + "% del capital total.");

console.log("El total aportado por los inversores es de $" + montoTotalAportado);
*/