function comprobar(){
	var mail = document.getElementById("mail").value;
	var pass = document.getElementById("pass").value;
	var fecha = document.getElementById("fecha").value;
	
	var f3 = new Date();
	var f1 = new Date().getTime();
	var f2 = new Date(fecha).getTime();
	
	console.log(f3);
	console.log(" fecha 1 "+f1+"   fecha 2  "+f2);
	
	if(pass.length>=6){
		console.log("Dentro if")
		document.getElementById("ppass").innerHTML="BIIIIIIIEEEEN"
	}else{
		console.log("Dentro else")
		document.getElementById("ppass").innerHTML="MAAAAAAAAAAAAAL"
	}
	
	if(f1<f2){
		console.log("Dentro if")
		document.getElementById("pfecha").innerHTML="BIIIIIIIEEEEN"
	}else{
		console.log("Dentro else")
		document.getElementById("pfecha").innerHTML="MAAAAAAAAAAAAAAAL"
	}
	console.log(mail, pass, fecha)
}