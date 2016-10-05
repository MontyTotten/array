var people = [
	{
		firstName: 'Amanda',
		lastName: 'Harris',
		age: 42,
		gender: 'f',
		children: [
			{
				firstName: 'Ben',
				age: 18,
				gender: 'm'
			},
			{
				firstName: 'Lisa',
				age: 15,
				gender: 'f'
			}
		]
	},
	{
		firstName: 'Brian',
		lastName: 'Hall',
		age: 36,
		gender: 'm',
		children: [
			{
				firstName: 'Erica',
				age: 11,
				gender: 'f'
			},
			{
				firstName: 'Jenny',
				age: 8,
				gender: 'f'
			}
		]	
	},
	{
		firstName: 'Terrence',
		lastName: 'Smith',
		age: 49,
		gender: 'm',
		children: [
			{
				firstName: 'David',
				age: 17,
				gender: 'm'
			},
			{
				firstName: 'Alex',
				age: 23,
				gender: 'f'
			},
			{
				firstName: 'Joe',
				age: 25,
				gender: 'm'
			}
		]
	},
	{
		firstName: 'Alyssa',
		lastName: 'Ingram',
		age: 28,
		gender: 'f',
		children: [
			{
				firstName: 'Jamie',
				age: 3,
				gender: 'f'
			},
			{
				firstName: 'Lori',
				age: 2,
				gender: 'f'
			}
		]
	}	
]
// number 1:

var arr = [];

for (var i = 0; i < people.length; i++) {
	people[i].children.push({ firstName: 'Moses', age: 900, gender: 'm' });
}


console.log(people[1]);


//number 2:

for (var i = 0; i < people.length; i++) {
	if (people[i].gender === 'm') {
		people[i].age = people[i].age + 5;
	}
}
console.log(people)

//number 3:

var i = 0;
var sum = 0;

while (i < people.length) {
	sum = sum + people[i].age;
	i++; 
} 
var avg = sum / people.length;

console.log(avg)


// number 4:

for (var i = 0; i < people.length; i++) {
	for (var j = 0; j < people[i].children.length; j++) {
		console.log(people[i].children[j].firstName + ' (' + people[i].children[j].age + ', ' + people[i].children[j].gender + ')');
	}
}



// number 5

var maleSum =0;
var maleCount =0;
var femaleSum =0;
var femaleCount =0;



for (var i = 0; i < people.length; i++) {
	for (var j = 0; j < people[i].children.length; j++) {
		if (people[i].children[j].gender === 'm') {
			maleSum = maleSum + people[i].children[j].age;
			maleCount++;
		} else if (people[i].children[j].age < 12) {
			femaleSum = femaleSum + people[i].children[j].age;
			femaleCount++;
		}
	} 
}

avg = maleSum / maleCount;
console.log('Avg. male age: ' + avg);

avg = femaleSum / femaleCount;
console.log('Avg. female age below 12: ' + avg);


