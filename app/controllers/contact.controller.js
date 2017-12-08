/**
 * Created by Erik on 12/16/16.
 */

app.controller('contactController', function ($scope) {
    $scope.message = 'Contact Me! Use this form or send me an email.';
    $scope.pageClass = 'page-contact';

    $scope.sendEmail = function () {
        $log.info("sending email");
        var message = $scope.body + "\n\n" + $scope.name + "\n" + $scope.email + "\n" + $scope.phone;
        window.open('mailto:' + $scope.email + '?subject=' + $scope.subject + '&body=' + message);
    };
});
