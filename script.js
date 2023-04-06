


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var result = confirm("Are you sure you want to delete this file?");


let x = 5;
let y = String(x);    // y is "5"


let num1 = 5;  // 101 in binary
let num2 = 3;  // 011 in binary
let num3 = num1 & num2;  // Bitwise AND: 001 (1 in binary)
let num4 = num1 | num2;  // Bitwise OR: 111 (7 in binary)
let num5 = num1 ^ num2;  // Bitwise XOR: 110 (6 in binary)
let num6 = ~num1;     // Bitwise NOT: 11111111111111111111111111111010 (-6 in decimal)
let num7 = num1 << 1; // Left shift: 1010 (10 in decimal)
let num8 = num1 >> 1; // Right shift: 10 (2 in decimal)

console.log(num3); // Output: 1
console.log(num4); // Output: 7
console.log(num5); // Output: 6
console.log(num6); // Output: -6
console.log(num7); // Output: 10
console.log(num8); // Output: 2





let numVal = 42;
let boolVal = Boolean(numVal); // boolVal is now true


let strNum = "42";
let num = parseInt(strNum); // num is now 42


let stringNumber = "42";
let number = Number(stringNumber); // number is now 42
