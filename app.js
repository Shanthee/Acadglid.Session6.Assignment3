// function def for finding sum using for loop
function for_loop(num) {
	sum = 0;
	for(i=1;i<=num;i++) {
		sum += i;
	}
	return sum;
}
// function def for finding sum using while loop
function while_loop(num) {
	sum = 0;
	i = 1;
	while(i<=num) {
		sum = sum += i;
		i++;
	}
	return sum;
}
//to print on the console
var sum = for_loop(1000);
console.log("For loop: " +sum);
sum = while_loop(1000);
console.log("While loop: " +sum);
