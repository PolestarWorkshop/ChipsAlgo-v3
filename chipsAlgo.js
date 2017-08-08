  var manaDices = Math.pow(2,9);
var weapons = Math.pow(6,4);
var element = Math.pow(6,10);


var A = Math.ceil((manaDices * weapons) * getRandom(0.1, 1));  
var _a = Math.ceil(A / manaDices);
var _aMod = A % manaDices;
var _a1 = convertFromBaseToBase(_a, 10, 6);

document.write("RND: " + A + "<br/ >");
document.write("FULL: " + _a+ "<br/ >");
document.write("MOD: " + _aMod+ "<br/ >");
document.write("A1: " + _a1+ "<br/ >");

var a = aRnd / manaDices;
var aInt = a - a % 1;

var aDivisor = a % manaDices;
var a1 = toBase(aInt, 6, 0)
var a2 = toBase(aDivisor, 2, 0);
  
  
var b = Math.round(element * getRandom(0.1, 1));
var bTrim = b / manaDices;
var bInt = bTrim - bTrim % 1;
var bDivisor = b % manaDices;
var b1 = toBase(bInt, 6, 0);
var b2 = toBase(bDivisor, 2,0);



function convertFromBaseToBase(str, fromBase, toBase){
	var num = parseInt(str, fromBase);
    return num.toString(toBase);
}

function toBase(number, radix, digits) {
    if (digits && digits.length >= radix)
        return number.toString(radix).replace(/./g, function(d) {
            return digits[ parseInt(d, radix) ];
        });
    else
        return number.toString(radix);
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}