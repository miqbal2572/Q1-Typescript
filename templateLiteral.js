//template literal is Best way to use strings heandling provided by Es6 version
var myAge = 25;
var myname = "Muhammad Iqbal";
var myCnic = 3420145722749;
var myCity = "Gujrat";
var myAdress = "My name is ".concat(myname, " CNIC number ").concat(myCnic, " and my age is ").concat(myAge, ". I,m living in ").concat(myCity);
console.log(myAdress);
var fullAdress = "My name is Muhammad iqbal CNIC number 3420145722749 and my age is 25. I,m living in Gujrat.";
console.log(fullAdress);

//-------------------------------------------------------------------------//
//Check the datatype
var a = 12;
console.log(typeof a);
console.log(a, typeof a);

var _a = "12";
console.log(typeof _a);
console.log(_a, typeof _a);
var a1 = 12.0;
console.log(typeof a1);
console.log(a1, typeof a1);
var $a = true;
console.log($a);
console.log($a, typeof $a);
