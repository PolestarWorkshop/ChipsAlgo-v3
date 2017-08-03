var manaDices = Math.pow(2,9);
var weapons = Math.pow(6,4);
var element = Math.pow(6,10);


var a = Math.round((manaDices * weapons - 1) * getRandom(0, 1));               
var b = Math.round((element - 1) * getRandom(0, 1));

var aTrim = a / manaDices;

var aInt = aTrim - aTrim % 1;
var aDivisor = a % manaDices

var a1 = toBase(aInt, 6, 0)
var a2 = toBase(aDivisor, 2, 0);

document.write(a);

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
