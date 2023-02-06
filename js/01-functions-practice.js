//STEP 1
function halfNumber(a) {
  document.write(" Half of  "+ a + " is " + a/2 + "." );
}
halfNumber(5);

//STEP 2
function squareNumber(a) {
  document.write("<br>"+" The result of squaring number of " + a + " is " + a*a);
}
squareNumber(3);


//STEP 3
function percentOf(a,b) {
  document.write("<br>"+ a + " is " + (a/b)*100 + "% of " + b );
}
percentOf(2,4);

//STEP 4
function findModulus(a,b) {
  document.write("<br>"+ (b%a)  + " is the modulus of " + a + " and " + b );
}
findModulus(4,10);


//STEP 5
var n1;
var n2;
var n3;

function sum(numbers) {
    var base = Number(numbers), i;
    for (i = 1; i < arguments.length; i += 1) {
        base += Number(arguments[i]);
    }
    window.document.write("<br>" + "The sum of " + n1 + " , " + n2 + " , " + n3 + " is " + base + ".");
}

n1 = parseFloat(window.prompt("Enter first number:"));
n2 = parseFloat(window.prompt("Enter second number:"));
n3 = parseFloat(window.prompt("Enter third number:"));
sum(n1,n2,n3);