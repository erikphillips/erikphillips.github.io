/**
 * Created by Erik on 12/18/16.
 */

app.controller('loginController', ['$scope', '$rootScope', '$log', '$location', 'userManagement', function ($scope, $rootScope, $log, $location, userManagement) {
    $log.info('login controller loading');

    $scope.message = 'Please login or create a new account ';
    $scope.pageClass = 'page-login';

    $scope.credentials = {
        username: '',
        password: '',
        remember: false
    };

    if (userManagement.cachedLogin()) {
        $location.path("/");
    }

    $scope.login = function () {
        if ($scope.credentials.username != '' &&
            $scope.credentials.password != '') {

            userManagement.login(
                $scope.credentials.username,
                $scope.credentials.password,
                $scope.credentials.remember
            );
        } else {
            userManagement.cachedLogin();
        }

        if (userManagement.isLoggedIn()) {
            $location.path("/");
        }
    };

    $rootScope.logout = function () {
        userManagement.logout();
    };

    $rootScope.isLoggedIn = function () {
        return userManagement.isLoggedIn();
    };
}]);
