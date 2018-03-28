/**
 * Created by Erik on 12/16/16.
 */

app.controller('aboutController', function ($scope, $log) {
    $log.info('loading about controller');

    $scope.message = 'Information and links about me!';
    $scope.pageClass = 'page-about';
});
