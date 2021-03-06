<html ng-app="MyApp">
    <head>
        <title>angular JS</title>
        <script src="angular.min.js"></script>
        <link rel="stylesheet" type="text/css" href="main.css" />
        <script src="app.js" type="text/javascript"></script>
        <script src="mycontroller.js" type="text/javascript"></script>
    </head>
    <body>
        <div ng-controller="BookStore">
            <table class="mytable">
                <tr>
                    <td>
                        <span>Below output is produced from AngularJS's <strong>{{}}</strong> directive.</span>
                    </td>
                </tr>
                </tr>
                <tr ng-repeat="item in items">
                   <td>
                      <p> <b>{{item.Name}}</b> is in our stock.</p>
                   </td>
                </tr>
            </table>
            <table class="mytable">
                <tr>
                    <td>
                        <span>Below output is produced from AngularJS's <strong>ng-bind</strong> directive.</span>
                    </td>
                </tr>
                <tr ng-repeat="item in items">
                    <td>
                       <p> <b><span ng-bind="item.Name"></span></b> is in our stock.</p>
                    </td>
                </tr>
            </table>
            <table class="mytable">
                <tr>
                   <td>
                      <span>Below output is produced from AngularJS's <strong>ng-non-bindable</strong> directive.</span>
                   </td>
                </tr>
                <tr ng-repeat="item in items">
                   <td>
                      <div ng-non-bindable>
                         <p> <b>{{item.Name}}</b> is in our stock.</p>
                      </div>
                   </td>
                </tr>
             </table>
        </div>
    </body>
</html>