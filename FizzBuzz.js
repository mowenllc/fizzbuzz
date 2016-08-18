var count = 1;
for (count = 1; count <= 100; count++){
	var index1 = count % 3;
	var index2 = count % 5;
	if(index1 === 0 && index2 === 0){
		console.log("fizzbuzz");
		document.write("<p>fixxbuzz</p>");
	}
	else if(index1 === 0){
		console.log("fizz");
		document.write("<p>fizz</p>");
	}
	else if(index2 === 0){
		console.log("buzz");
		document.write("<p>buzz</p>");
	}
	else{
		console.log(count);
		document.write("<p>" + count + "</p>");
	}
}