<html>
    <head>
        <title>angular JS</title>
        <script src="angular.min.js"></script>
        <script src="app.js" type="text/javascript"></script>
        <script src="mycontroller.js" type="text/javascript"></script>
    </head>
    <body>
        <div id="content" ng-app="MyApp" ng-controller="MyController">
            <h1>{{article}}!</h1>
        </div>
    </body>
</html>