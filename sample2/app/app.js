var myModule = angular.module('myAngularApplication', []);
//What the above code will do it that, it will create an angular module with the 
//name of "myAngularApplication". Most people often ask what is the significance
// of the empty array that we are passing as a second argument. 
// Remember we talked about modules being able to use other modules. 
// The second array argument is to pass the dependencies to other modules. 
// So lets say we have another module called "myAnotherApplication" 
// which would want to use the above defined module. We will have to pass the 
// myAngularApplication in the array argument as shown in the following code.
var myAnotherModule = angular.module('myAnotherApplication', ["myAngularApplication"]);
//Now here is an interesting part, if we forget to pass the second array argument, 
//it will change the meaning of our code completely. The function with 2 arguments 
//i.e. the one with second argument as an array(empty or otherwise) is a setter function. 
//It will create an angular module for us. Where as if we omit the second array argument, 
//the function is a getter function i.e. it will return the module that is created with the 
//name passed. So its important to understand this subtle but very important difference.

//Module Setter: var myModule = angular.module('myAngularApplication', []);
//Module Getter: var myModule = angular.module('myAngularApplication');