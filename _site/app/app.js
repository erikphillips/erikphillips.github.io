/**
    Created by Erik Phillips, 2016-2017
 */

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/page-home.html',
                controller : 'mainController'
            })

            .when('/about', {
                templateUrl : 'pages/page-about.html',
                controller : 'aboutController'
            })

            .when('/contact', {
                templateUrl : 'pages/page-contact.html',
                controller : 'contactController'
            })

            .when('/projects', {
                templateUrl : 'pages/page-projects.html',
                controller : 'projectsController'
            })

            .when('/operate-app', {
                templateUrl : 'pages/page-operate-app.html',
                controller : 'operateAppController'
            })

            .when('/login', {
                templateUrl : 'pages/page-login.html',
                controller : 'loginController'
            })

            .when('/websites', {
                templateUrl : 'pages/page-websites.html',
                controller : 'websitesController'
            });
    });
