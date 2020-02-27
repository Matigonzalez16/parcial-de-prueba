function mostrar()
{
  var persona;
  var nombre ;
  var edad;
  var genero;
  var peso; 

for (persona = 0; persona <5; persona ++)
{ 
  	nombre = prompt("Ingrese nombre: ");
  	
  	genero = prompt("Ingrese el genero : (masculino/femenino/otros");
  	while (genero != "femenino" && genero != "masculino" && genero != "otro") {
  		genero = prompt(" ERROR. Ingrese el genero : (masculino/femenino/otros");
  	}

  	edad = prompt("Ingrese edad: ");
  	edad = parseInt(edad);
  	while (edad < 18 || edad > 100 ) {
  	alert("Ingrese una edad valida");
  	edad = prompt("Ingrese una edad: ");
  	}
  	
	
	peso = prompt("Ingrese peso");
	peso = parseInt(peso);
	while (peso < 1) {
		alert("Ingrese un peso valido");
	peso = prompt("ingrese pepesoo");
	}
										}
}
