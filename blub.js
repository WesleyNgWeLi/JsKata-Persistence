import { ECONNRESET } from "constants";

let curDrag = 
		name =>
			size =>
				element => 
					name + " is a " + size + " sized dragon that breathes " + element 

var persistence = (input, count = 0) =>{
	if (input.toString().length == 1){
		return count
	}
	else{
		count++
		var result = multDigits(input)
		return persistence(result, count)
	}
}

const mult = (a, b) => a*b

const multDigits = (num) => 
	num.toString()
	.split('')
	.map(Number)
	.reduce(mult, 1)


export {curDrag, persistence, multDigits}