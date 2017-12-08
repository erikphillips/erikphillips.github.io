/**
 * Created by Erik on 12/16/16.
 */

app.controller('projectsController', function ($scope, $log) {
    $log.info('loading projects controller');

    $scope.message = 'Here are some of my projects...';
    $scope.pageClass = 'page-projects';
});
