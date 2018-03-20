function ejercicio1(){
	var confirmacion = confirm('Eres mayor de edad?')
	
	document.oncontextmenu = function(){return false}
	
	if(confirmacion == true){
		window.alert("Entras")
	}else{
		location.href="http://www.marca.com/"
	}
}
