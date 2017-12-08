/**
 * Created by Erik on 3/18/17.
 */

app.controller('operateAppController', function ($scope, $log) {
    $log.info('loading operate app controller');

    $scope.message = 'A scheduling tool for Resident Advisors...';
    $scope.pageClass = 'page-operate-app';
});
