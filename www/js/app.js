// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

document.addEventListener("deviceready", function(){
    screen.unlockOrientation();
}, false);


angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.index', {
        url: '/index',
        views: {
            'menuContent': {
                templateUrl: 'templates/index.html',
                controller: 'IndexCtrl'
            }
        }
    })

    .state('app.report', {
        url: '/report',
        views: {
            'menuContent': {
                templateUrl: 'templates/report.html',
                controller: 'ReportCtrl'
            }
        }
    })

    .state('app.news', {
        url: '/news',
        views: {
            'menuContent': {
                templateUrl: 'templates/news.html',
                controller: 'NewsCtrl'
            }
        }
    })
    .state('app.newsitem', {
        url: '/newsitem/:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/newsitem.html',
                controller: 'NewsitemCtrl'
            }
        }
    })


    .state('app.jixiao', {
        url: '/jixiao',
        views: {
            'menuContent': {
                templateUrl: 'templates/jixiao.html',
                controller: 'JixiaoCtrl'
            }
        }
    })

    .state('app.map', {
        url: '/map',
        views: {
            'menuContent': {
                templateUrl: 'templates/map.html',
                controller: 'MapCtrl'
            }
        }
    })

    .state('app.line', {
        url: '/line',
        views: {
            'menuContent': {
                templateUrl: 'templates/line.html',
                controller: 'LineCtrl'
            }
        }
    })

    .state('app.bar', {
            url: '/bar',
            views: {
                'menuContent': {
                    templateUrl: 'templates/bar.html',
                    controller: 'BarCtrl'
                }
            }
        })
        .state('app.pie', {
            url: '/pie',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pie.html',
                    controller: 'PieCtrl'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/index');
});
