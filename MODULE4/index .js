function hello(){
	Names=['Ahmedabad','mumbai','jalandar','jetpur','surat','jamnagar','rajkot'];
	
	for(var i=0;i<Names.length;i++){
		var FN=Names[i].charAt(0)//.toLowerCase();
		if(FN==='j'||FN==='J'){
			console.log("goodbye "+Names[i]);
		}
		else{
			console.log("Hello "+Names[i])
		}
	}
}
hello()