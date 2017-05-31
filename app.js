/* Add function closure which keep increament counter content*/
var add = (function () {
    var counter = 1; 									/* static variable decleared  */
    return function () { 								/* Function */
		console.log("Current value is: " + counter);    /* Console print the varibale content*/
	return counter += 1;								/* return the variable content by adding 1 to it*/
	}
})();													/* closure function*/
/* declare myFunction*/
function myFunction(){
	/* display the return closure add function on console */
   console.log("Return value is: " + add());
}