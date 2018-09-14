

function typeOfTriangle(){

	var side1= document.querySelector('#triangle-side1').value;
	console.log(side1);
	var side2= document.querySelector('#triangle-side2').value;
	console.log(side2);
	var side3= document.querySelector('#triangle-side3').value;
	console.log(side3);
	var answer=document.querySelector('#answer');

	// console.log('clickes')
	if (side1==side2 && side2==side3){
		console.log('equal')
		// window.alert('equilateral')
		answer.innerHTML = 'equilateral'
	}
	else if(side1==side2 && side2 !=side3){
		console.log('iso')
		// window.alert('Isosceles')
		answer.innerHTML = 'Isosceles'
	}
	else if(side1+side2<=side3){
		console.log('not')
		// window.alert('Not a triangle')
		answer.innerHTML = 'Not a triangle'
	}
	else {
		console.log('scal	')
		// window.alert('Scalene')
		answer.innerHTML = 'Scalene'
	}
	answer.classList.remove('d-none')
}
