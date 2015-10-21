app.controller("MyController", function($scope)
{
    $scope.article = "Hello there! i am lerning angular js.";
});
app.controller("BookStore",function($scope){
    $scope.items = [
        {ISBN:"5674789", Name: "Asp.Net MVC", Price: 560, Quantity: 20},
        {ISBN:"4352134",Name: "AngularJS", Price: 450, Quantity: 25},
        {ISBN:"2460932",Name: "Javascript", Price: 180, Quantity: 15}
    ];
});