function mostrar()
{
  var persona;
  var nombre ;
  var edad;
  var genero;
  var peso; 
  var acumuladorEdades = 0;
  var cantidadMayorA25 = 0;
  var promedio = 0;
  var mensaje = " ";
  var personaMenosPesada;
  var pesoMinimo;
  var esPrimeraIteracion = true;
  var cantidadPersonas = 0;



for (persona = 0; persona <5; persona ++)
{ 
  	nombre = prompt("Ingrese nombre: ");
  	
  	genero = prompt("Ingrese el genero : (masculino/femenino/otros").toLowerCase;
  	while (genero != "femenino" && genero != "masculino" && genero != "otro") {
  		genero = prompt(" ERROR. Ingrese el genero : (masculino/femenino/otros").toLowerCase;
  	}

  	edad = prompt("Ingrese edad: ");
  	edad = parseInt(edad);
  	while (edad < 18 || edad > 100 ) {
  	edad = prompt("ERROR,Ingrese una edad valida: ");
  	}
  	
	
	peso = prompt("Ingrese peso (Mayor a 1");
	peso = parseInt(peso);
	while (isNaN(peso) ||  peso <= 1) {
	peso = prompt("ERROR, ingrese peso mayor a 1");
	}
							
	if (edad >= 25) {
		acumuladorEdades += edad;
		cantidadMayorA25++;
	}


// proceso los datos

if (cantidadMayorA25 >0) {
	promedio = acumuladorEdades / cantidadMayorA25;
	mensaje += "El promedio de edades mayores a 25 es" + promedio;
}
else 
{
	mensaje += "No se ingresaron edades mayores a 25";

}
if (esPrimeraIteracion || peso < pesoMinimo){
	pesoMinimo = peso;
	personaMenosPesada = nombre;
}
//entiendo que el 80 no esta incluido
if (genero != "masculino" ||peso > 80)
{
	cantidad de personas 
}

esPrimeraIteracion = false;
}


//  flags/banderas
// var tieneCorreo;   tiene o no tiene (true o false)
// 



