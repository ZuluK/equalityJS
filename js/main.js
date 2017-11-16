//First create a function named init and put your previous code in the function
function init (){
var planet = document.getElementById('greenplanet');
planet.innerHTML = "Red Alert: hit by phaser fire";
}

window.onload = init;//Assigns the function init to the window.onload property. DO NOT
                      //use parenthese after the function name. We aren't called the function
                      //we are just assigning the function value to the window.onload property.



//How to set an attribute with setAttribute
planet.setAttribute('class',"redtext");//the method takes two arguments, the name of the attribute you want to set or change.


//How to GET attributes
var scoop = document.getElementById('raspberry');
var altText = scoop.getAttribute('alt');
console.log('I can"t see the image in the console');
console.log('but I"m told it looks like' + altText);
