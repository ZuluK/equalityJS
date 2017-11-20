/*Now you might think that dealing with NaN is a rare event, but if you’re working with any kind of code that uses numbers, you’d be surprised how often it
shows up. The most common thing you’ll need to do is test for NaN, and given everything you’ve learned about JavaScript, how to do this might seem obvious:
*/

if (myNum == NaN){
  myNum = 0; //they aren't equal
}


/* Any sensible person would assume that’s how you test to see if a variable holds a NaN value, but it doesn’t work.
Why? Well, NaN isn’t equal to anything, not even itself, so, any kind of test for equality with NaN is off the table.
Instead you need to use a special function: isNaN. Like this:
*/
if (isNaN(myNum)){
  myNum = 0;//Use the isNaN function, which returns true if the value passed is not a  number
}

/*So, let’s think through this a bit more. If NaN stands for “Not a Number”, what is it?
Wouldn’t it be easier if it were named for what it is rather than what it isn’t?
What do you think it is? We can check its type for a hint:
*/

var test11 = 0/0;
console.log(typeof test11); //returns 'number'


/*What on earth? NaN is of type number? How can something that’s not a number have the type number?
Okay, deep breath. Think of NaN as just a poorly named value.
*/

/*Try adding the code below
to the <script> element in a basic web page and see what you get in the console when you load up the page.
You won’t get why yet, but see if you can take a guess about what might be going on.
*/

if (99 == "99") {
console.log("A number equals a string!");
} else {
console.log("No way a number equals a string"); }  //returns 'A number equals a string'


if (99 === "99") {
console.log("A number equals a string!");
} else {
console.log("No way a number equals a string"); } //returns 'No way a number equals a string'
