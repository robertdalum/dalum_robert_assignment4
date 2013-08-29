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
}