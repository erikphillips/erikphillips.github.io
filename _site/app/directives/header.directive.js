/**
 * Created by Erik on 4/1/17.
 */

app.directive('myHeader', function () {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: 'app/directives/header.template.html',
        link: function(scope, elem, attrs) {

        }
    };
});
