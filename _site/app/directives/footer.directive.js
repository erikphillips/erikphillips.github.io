/**
 * Created by Erik on 4/1/17.
 */

app.directive('myFooter', function () {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: 'app/directives/footer.template.html',
        link: function(scope, elem, attrs) {

        }
    };
});
