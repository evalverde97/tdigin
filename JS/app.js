// CALCULADOR DE PESO VOLUMÉTRICO

function calcular()
{
	var num1=parseInt(document.getElementById('num1').value);
	var num2=parseInt(document.getElementById('num2').value);
    var num3=parseInt(document.getElementById('num3').value);
	var volumetric = (num1*num2*num3) /5000;
	document.getElementById('result').innerHTML = Math.round(volumetric*1000)/1000;}

document.getElementById('calcular').onclick= function calculo(){
if(document.getElementById('num1').value && document.getElementById('num2').value && document.getElementById('num3').value != ''){
	calcular()} else {
		alert('Faltan datos');
	} ;
}
