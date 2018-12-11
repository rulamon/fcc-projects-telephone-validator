function telephoneCheck(str) {
	let regex = /^1?[-\s(]*\d{3}[-\s)]*\d{3}[-\s]*\d{4}$/;
	let regexBrackets = /\((?!.*\))|(?<!\(.*)\)/;
	if (regexBrackets.test(str)) {
		return false;
	} else {
		return regex.test(str)
	}
}

console.log(telephoneCheck("1 555-555-5555"));