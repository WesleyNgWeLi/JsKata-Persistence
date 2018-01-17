let curDrag = 
		name =>
			size =>
				element => 
					name + " is a " + size + " sized dragon that breathes " + element 


var persistence = (input) =>{
	var count = 0;

	// while(input.length != 1)
	// {
	// 	count++
	// }

	return count
}

var mult = (a, b) => a*b

var multDigits = (num) => 
	num.toString()
	.split('')
	.map(Number)
	.reduce(mult(a, b), 0)
export {curDrag, persistence, multDigits}