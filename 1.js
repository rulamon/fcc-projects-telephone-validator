function telephoneCheck(str) {
	// define regex for all possibilities 
	let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]*\d{3}[-\s]*\d{4}$/;
	// return ternary operator, testing str against regex
	return regex.test(str) ? true : false;
}

console.log(telephoneCheck("4567654323"));