/**
 * Created by Erik on 12/16/16.
 */

app.controller('mainController', function($scope, $log, $rootScope) {
    $log.info('loading main controller');

    $scope.message = 'Welcome to my  Homepage!';
    $scope.pageClass = 'page-home';

    $rootScope.versionNumber = 1.9;
});
