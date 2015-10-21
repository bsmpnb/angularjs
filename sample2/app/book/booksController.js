/*var booksController = function ($scope) {
    $scope.message = "Hello from booksController";
    this.greeting = "This is a greeting message using controller as syntax";
}

myModule.controller('booksController', booksController);
 */
/*
So far we have been using the free code to create our angular module. 
The main reason for this was that we wanted our code to get executed as soon as the file 
is loaded. We are also putting our created module in a global variable which is 
also not a good idea. So lets see how we can fix these issues by the help of IIFEs
(Immediately Invoked Function Expression).
First lets move our free code into a function and then call this function. 
This will effectively be same as our current code.
 */
/*var myModule = null;
function CreateModule(){
     myModule = angular.module('myAngularApplication', []);
}
CreateModule();*/
//Next instead of explicitly calling this function why not call the function at its definition itself. 
//This can be done in the following manner.
/*var myModule = null;

(function CreateModule(){
    myModule = angular.module('myAngularApplication', []);
}());*/
//Now since no one else will be calling this function as we are calling it at the definition itself, 
//we can do away with the function name too. 
//The resulting code will look like following.
/*var myModule = null;

(function(){
    myModule = angular.module('myAngularApplication', []);
}());*/
//This expression above is known as Immediately invoked function expression(IIFE). 
//Since the function definition will immediately invoke itself whenever the .js file is loaded.
//The main reason the IIFE is effective is that we can have all the code immediately executing 
//without needing to have global variables and functions. 
//We still have the myModule variable declared as global so lets do away with it too.
/*(function(){
    myModule = angular.module('myAngularApplication', []);
}());*/
//Now when we do this, our controller creation will fail as we were using the global 
//variable to create controller with the module. To circumvent this problem lets use 
//the getter function angular.module to associate the controller with the module. 
//And while we are at it, why not put the controller in an IIFE too.

/*(function () {

    var booksController = function ($scope) {
        $scope.message = "Hello from booksController";
    }

    angular.module('myAngularApplication').controller('booksController', booksController);

}());*/


/*Making our controllers minification safe

Now our controller and module are looking good and we are not using any global variables. 
Now when we are ready to push this code into production, we will first minify the code 
and then send it to production(for various optimization and other reasons). 
What minification will do is that it will change shorten the variable names. 
Which would mean that the $scope that we are passing to the booksController 
will no longer be $scope but some short variable name.

The problem here is that the angular is still expecting a $scope variable to wire up 
the controller to view data passing. But the $scope variable is not present in the 
minified file and thus resulting in the errors. 
Same problem will come with all the parameters that are being injected into controller function. 
So we need some way to indicate the angular that the variable that is being passed to the 
controller is in fact a $scope so that it can be used after minification too.

To do this, we need to write our controller creation code a little differently. 
What we need to do is to pass the second argument as array where we can put the controller 
arguments as string literals. The resulting controller code will look like following.

*/
//angular.module('myAngularApplication').controller('booksController', ["$scope", booksController]);
//On the same lines, we can pass all the controller parameters as string literals in this function call 
//and the angular will know that even after minification how these parameters should be treated.

/*(function () {

    var booksController = function ($scope) {
        $scope.message = "Hello from booksController";

        this.greeting = "This is a greeting message using controller as syntax";
    }

    angular.module('myAngularApplication').controller('booksController', ["$scope", booksController]);

}());
*/
(function () {

    var booksController = function ($scope) {
        $scope.message = "Hello from booksController";

        this.greeting = "This is a greeting message using controller as syntax";

        $scope.books = [];

        $scope.fetchBooks = function () {
            $scope.books = [
                { ID: 1, BookName: "Test Books 1", AuthorName: "Test Author 1", ISBN: "TEST1" },
                { ID: 2, BookName: "Test Books 2", AuthorName: "Test Author 2", ISBN: "TEST2"},
                { ID: 3, BookName: "Test Books 3", AuthorName: "Test Author 3", ISBN: "TEST3"},
                { ID: 4, BookName: "Test Books 4", AuthorName: "Test Author 4", ISBN: "TEST4"},
                { ID: 5, BookName: "Test Books 5", AuthorName: "Test Author 5", ISBN: "TEST5"}
            ];
        }
    }

    angular.module('myAngularApplication').controller('booksController', ["$scope", booksController]);

}());