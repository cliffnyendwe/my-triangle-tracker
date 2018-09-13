var side1 = prompt('enter side 1:')
var side2 = prompt('enter side 2:')
var side3 = prompt('enter side 3:')

if (side1==side2 && side2==side3){
		window.alert('equilateral')
}
else if(side1==side2 && side2 !=side3){
		window.alert('Isosceles')
}
else if(side1+side2<=side3){
		window.alert('Not a triangle')
}
else {
		window.alert('Scalene')
}
