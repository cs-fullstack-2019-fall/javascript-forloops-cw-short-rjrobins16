
// Exercise 1:
//Use a for loop to print numbers -3 through 8.


for(var i = -3; i <=8; i=i+1)
{
    console.log(i);
}

//Use a for loop to print from 0 to 50.
// Once it gets to 10, print "TEN!!!" instead of the number.

for(var x = 0; x<=50; x++)
{
    if (x===10){
        console.log("TEN")
    }
    else{console.log(x);}
}


//Prompt the user to enter a number. Prompt the user to enter another number.
// Create a for loop that counts from the first number to the second number.


var number = prompt("Enter a number.");
var numberInt= parseInt(number);
var number2 = prompt("Enter another number.");
var number2Int = parseInt(number2);

for (y=numberInt; y <= number2Int; y= y+1)
{
    console.log(y)
}