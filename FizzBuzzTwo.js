var number = prompt("Please Enter A Number Greater Than 50");
parseInt(number);
var numberCount = number;

var count = 1;
for (count = 1; count <= numberCount; count++){
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