alert("JavaScript works!");

//Robert Dalum
//Project 4 August 29, 2013
// SDI 

//1. Does a string follow a 123-456-7890 pattern like a phone number?
var stringTest = function () {
	var phoneNum = function (strng) {
		var check = /\d{3}-\d{3}-\d{4}/;
		return check.test(strng);
	};

//2. Does a string follow an aaa@bbb.ccc pattern like an email address?
var emailAddress = function (strng) {
	var check = /^\w+@[\w.\-]+\.[A-Za-z]{2,3}$/;
	return check.test(strng);
	};
	
//3. Is the string a URL (Does it start with http:// or https://)?
var urlCheck = function (strng) {
	var check = /^(?:http|https):/;
	return check.test(strng);
	};
	
//4. Title-case a string (split into words, then uppercase the first letter of each word).
var stringUpper = function (strng) {
	var split = strng.split(" ");
	var result = "";
	for (var i = 0, j = split.length; i < j; i++) {
		var newSplit = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase()));
		result = result.concat(newSplit + " ");
		};
	return result;
	};
	return{
		"phoneNum": phoneNum,
		"emailAddress": emailAddress,
		"urlCheck" : urlCheck,
		"stringUpper" : stringUpper
	};
};

//5. Format a number to use a specific number of decimal places as for money: 2.1 --> 2.10.

var NumberTest = function () {
	var decimalSpot = function (number, spotDecimal) {
		return Number (number.toFixed(spotDecimal));
	};
	
//6. Find the number of hours or days difference between two dates.
var twoDates = function (D1, D2) {
	var results = [];
	var conclude = (D1 > D2) ? D1.getTime() - D2.getTime() : D2.getTime() - D1.getTime();
	results[3] = conclude / 1000;
	results[2] = results[3] / 60;
	results[1] = results[2] / 60;
	results[0] = results[1] / 24;
	return results;
	};
	return{
		"decimalSpot" : decimalSpot,
		"twoDates" : twoDates
	};
};

