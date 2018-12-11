function telephoneCheck(str) {
	// define regex for all possibilities 
	let regex = /^1?[-\s(]*\d{3}[-\s)]*\d{3}[-\s]*\d{4}$/;
	// define seperate regex for non-closing parentheses
	let regexBrackets = /\((?!.*\))|(?<!\(.*)\)/;
	// return ternary operator, testing str against both regexes (regexBrackets must be inverted, will return true if not conform)
	return !regexBrackets.test(str) && regex.test(str) ? true : false;
}

console.log(telephoneCheck("555-5555"));