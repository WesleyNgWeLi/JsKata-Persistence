const persistence = (input, count = 0) =>{
	if (input.toString().length != 1){
		count++
		const result = multDigits(input)
		return persistence(result, count)}
	return count
}

const mult = (a, b) => a*b

const multDigits = (num) => 
	String.prototype.split.apply(num, [''])
	.map(Number)
	.reduce(mult, 1)

export {persistence, multDigits}