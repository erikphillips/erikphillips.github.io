/**
 * Created by Erik on 12/16/16.
 */

app.controller('websitesController', function ($scope, $log, $window, userManagement) {
    $log.info('loading website controller');

    $scope.message = 'Here are some useful websites...';
    $scope.pageClass = 'page-websites';

    $scope.websites = [
        {name: 'CPE 315 Homepage', url: 'http://users.csc.calpoly.edu/~clupo/teaching/315/winter17/'},
        {name: 'CPE 436 Homepage', url: 'https://users.csc.calpoly.edu/~bellardo/courses/2172/436/index.php'},
        {name: 'PHIL 230 PolyLearn', url: 'https://polylearn.calpoly.edu/AY_2016-2017/course/view.php?id=9775'},
        {name: 'CPE 484 Spreadsheet', url: 'https://docs.google.com/spreadsheets/d/1ZhLmju-KrbpeLJCSfPL3AzgX9RYcIhzFsHmy_bz2jec/edit#gid=0'},
        {name: 'CPE 315 Piazza', url: 'https://piazza.com/class/ixjpp0i76oy1w9?cid=7'},
        {name: 'LaTeX Overleaf', url: 'https://www.overleaf.com/dash'},
        {name: 'Google Drive', url: 'https://drive.google.com/drive/my-drive'},
        {name: 'MyCalPoly Portal', url: 'https://myportal.calpoly.edu'},
        {name: 'FaceBook', url: 'https://facebook.com/erik.phillips.1022'},
        {name: 'LinkedIn', url: 'https://linkedin.com/in/ephill07'},
        {name: 'CPE 357 Module Page', url: 'http://users.csc.calpoly.edu/~awang24/357/index.html'},
        {name: 'CPE 357 IHS', url: 'https://softwareinventions.com/IHS/#panelsStudent'},
        {name: 'Linux Man Pages', url: 'https://linux.die.net/man/'}
        // {name: '', url: ''},
    ];

    $scope.webOptions = false;
    $scope.newName = undefined;
    $scope.newUrl = undefined;
    $scope.rmName = undefined;

    $scope.changeWebOptions = function () {
        if (!$scope.webOptions && verifyLogin(false)) {
            $scope.webOptions = true;
        } else if (!$scope.webOptions){
            alert("You must be logged in with administrator access to use advanced website options.");
        } else {
            $scope.webOptions = false;
        }
    };

    var verifyLogin = function ( showAlert ) {
        var rtn = userManagement.isLoggedIn() && userManagement.isAdmin();

        if (showAlert && !rtn) {
            alert("You must be logged in with administrator access to use advanced website options.");
        }

        return rtn;
    };

    $scope.addWebsite = function () {
        if (!verifyLogin(true)) return;

        if ($scope.newName !== undefined && $scope.newUrl !== undefined) {
            $scope.websites.push({name: $scope.newName, url: $scope.newUrl});
        }
        $scope.newName = undefined;
        $scope.newUrl = undefined;

        $window.alert("The new website has been added. However, the changes will not last. When the database is deployed, the change will stay.")
    };

    $scope.removeWebsite = function () {
        if (!verifyLogin(true)) return;

        if ($scope.rmName !== undefined) {
            var idx = -1;
            for (var i = 0; i < $scope.websites.length; i++) {
                if ($scope.websites[i].name == $scope.rmName) {
                    idx = i;
                    break;
                }
            }

            if (idx > -1) {
                $scope.websites.splice(idx, 1);
                $window.alert("The website has been removed. However, the changes will not last. When the database is deployed, the change will stay.")
            }

            $scope.rmName = undefined;
        }
    };
    //
    // console.log("loading json");

    // $scope.websites = [];
    // $scope.webOptions = false;
    //
    // $scope.changeWebOptions = function () {
    //     $scope.webOptions = !$scope.webOptions;
    // };
    //
    // $scope.newName = undefined;
    // $scope.newUrl = undefined;
    //
    // $scope.addWebsite = function () {
    //
    // };
    //
    // console.log('starting mongo code');
    //
    // var MongoClient = require('mongodb').MongoClient;
    // var assert = require('assert');
    // var url = 'mongodb://localhost:27017';
    //
    // MongoClient.connect(url, function(err, db) {
    //     assert.equal(null, err);
    //     console.log("Connected correctly to server");
    // });

});
