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
	String.prototype.split.apply(num, [''])
	.map(Number)
	.reduce(mult, 1)

export {persistence, multDigits}