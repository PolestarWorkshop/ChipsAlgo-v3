<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

</body>
</html>

<script>
  var manaDices = Math.pow(2,9);
var weapons = Math.pow(6,4);
var element = Math.pow(6,10);


var a = Math.round((manaDices * weapons - 1) * getRandom(0, 1));        
var aTrim = a / manaDices;
var aInt = aTrim - aTrim % 1;
var aDivisor = a % manaDices;
var a1 = toBase(aInt, 6, 0)
var a2 = toBase(aDivisor, 2, 0);
  
  
var b = Math.round((element - 1) * getRandom(0, 1));
var bTrim = b / manaDices;
var bInt = bTrim - bTrim % 1;
var bDivisor = b % manaDices;
var b1 = toBase(bInt, 6, 0);
var b2 = toBase(bDivisor, 2,0);



document.write(b1);

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

</script>