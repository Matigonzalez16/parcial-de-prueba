function mostrar()
{
var pais;
var habitantes;
var temperaturaMin;
var promedio;
var acumuladorTempMin = 0;
var tempImpar = 0;



pais = prompt("Ingrese nombre del pais");

habitantes = prompt("Ingrese numero de habitantes");
habitantes = parseInt(habitantes);
while ( habitantes < 1000000  || habitantes > 270000000) {
	habitantes = prompt("ERROR. Ingrese numero de habitantes correcto entre 1 y 270 millones");
}

temperaturaMin = prompt("Ingrese temperatura minima");
temperaturaMin = parseInt(temperaturaMin);
while (temperaturaMin > -50 || temperaturaMin > 50) {
	temperaturaMin = prompt("ERROR, Ingrese una temperatura valida (entre -50º y 50º");
}

if (temperaturaMin % 2 != 0){
	acumuladorTempMin += temperaturaMin;
	tempImpar ++;
}



}
