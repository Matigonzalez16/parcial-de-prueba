
function mostrar()
{
	// paralelogramo 


	var ladoA = document.getElementById('ladoA').value;
	var ladoB = document.getElementById('ladoB').value;
	var resultado = `Lados concatenados: ${ladoA}${ladoB}`;
	var recto = document.getElementById('angulosRectos').value;
	var resultado2;
	
	while(isNaN(ladoA) || ladoA < 0) {
		ladoA = prompt("Error. Ingrese un nùmero positivo para el lado A:");
	}

	while(isNaN(ladoB) || ladoB < 0) {
		ladoB = prompt("Error. Ingrese un nùmero positivo para el lado A:");
	}



	if (recto == "SI") {
		resultado2 = (ladoA * ladoB);
		alert(resultado + ` La superficie es ${resultado2}`) ;
	}
	else if (recto == "NO")
	{ 
		resultado2 = ((ladoA * 2) + (ladoB *2));
		alert(`${resultado}  El perimetro es ${resultado2}`); 
	}
	
	


	if (ladoA == ladoB && recto == "SI" )
	{
		resultado2 = (ladoA * ladoB);
		alert (`${resultado}  La multiplicacion de sus lados da ${resultado2}`);
	}

	else if (ladoA == ladoB && recto == "NO")
	{
		resultado2 = (ladoA * 2 ) + (ladoB * 2);
		alert(`${resultado}  La suma de sus lados da ${resultado2}`);
	} 

	
	
}

