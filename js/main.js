/*How equality converts its operands

So what we know is that when you compare two values that have different types,
JavaScript will convert one type into another in order to compare them.

*/

/* Case 1

Comparing a number and a string

if you’re comparing a string and a number the same thing happens every time:
the string is converted into a number, and the two numbers are then compared.
This doesn’t always go well, because not all strings can be converted to numbers.
Let’s see what happens in that case:

*/

99 == "vanilla" //we're comparing a number and a string but when we try to convert string into a number it fails99
99 == NaN //false

/* Case 2

 Comparing a boolean with any other type.

 In this case, we convert the boolean to a number, and compare.
 This might seem a little strange, but it’s easier to digest if you just remember that true converts to 1 and false converts to 0.
 You also need to understand that sometimes this case requires doing more than one type conversion.
 Let’s look at a few examples:

*/

1 == true //we're comparing a number to a boolean. The true value is converted into the number 1
1 == 1//true


/*Here’s another case; this time a boolean is compared to a string. Notice how more
steps are needed.
*/

"1" == true//we're comparing a number to a boolean. The true value is converted into the number 1
"1" == 1 //and then we compare the string '1' to 1
 1 == 1//Now we use the rule from case one and the string is converted to a numbers
true //And now we can finally compare a number to a number


/* Case 3

Comparing null and undefined.

Comparing these values evalutates to true.
That might seem odd as well, but it’s the rule.
For some insight, these values both essentially represent “no value”
(that is, a variable with no value, or an object with no value), so they are considered to be equal.

*/

undefined = null //undefined and null are always equal


/* Case 4

Oh, actually there is no case #4.

That’s it. You can pretty much determine the value of any equality with these rules.
 That said, there are a few edge cases and caveats.
 One caveat is that we still need to talk about comparing objects,
 which we’ll talk about in a bit. The other is around conversions that might catch you off guard.
 Here’s one example:

*/

1 == ""//We're comparing a number and a string. Use case 1
1 == 0//the empty string is converted to the number 0
false
