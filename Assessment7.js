// ** Using a recursion by returning the fibonnaci sequence 
// Fn = Fn-1 + Fn-2
// implementing a for loop to print out sequence

function fib(num){
	if(num <= 2){
		return 1;
	}
	else{
		for(var i = 0; i < num; i++){
			console.log(fib(i));
		}
		return fib(num-1) + fib(num-2);
	}
}

console.log(fib(10));

