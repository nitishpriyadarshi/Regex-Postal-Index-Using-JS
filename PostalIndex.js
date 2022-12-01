console.log("Welcome to regex Postal Code")
let postalRegex =RegExp('^[0-9]{6}$');
let postalcheck =postalRegex.test("023434");
console.log(postalcheck);

let postalRegex1 =RegExp('^[A-Z]{1}[0-9]{6}$');
let postalcheck1 =postalRegex1.test("A023434");
console.log(postalcheck1);

let postalRegex3 =RegExp('^[0-9]{6}[A-Z]{1}$');
let postalcheck2 =postalRegex3.test("023434A");
console.log(postalcheck2);

let postalRegex4 =RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
let postalcheck3 =postalRegex4.test("023 434");
console.log(postalcheck3);

let emailRegex = RegExp('^[A-Za-z]{3,}[.]?[A-Za-z]{3,}[@]{1}[A-Za-z]*[.]{1}[a-zA-Z]*$');
let emailCheck = emailRegex.test("abc.bcs@bridgelabz.com");
console.log(emailCheck);