angular.module('starter.controllers', ["chart.js"])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [{
        title: 'Reggae',
        id: 1
    }, {
        title: 'Chill',
        id: 2
    }, {
        title: 'Dubstep',
        id: 3
    }, {
        title: 'Indie',
        id: 4
    }, {
        title: 'Rap',
        id: 5
    }, {
        title: 'Cowbell',
        id: 6
    }];
})

.controller("LineCtrl", function($scope) {

        $scope.labels = ["1月", "2月", "3月", "4月", "5月", "6月", "7月","8月","9月","10月","11月","12月"];
        $scope.series = ['2014年', '2013年'];
        $scope.data = [
            [46000,32000,42800,50000,57000,51200,48000,29000,61000,49000,30000,54500],
            [43000,30000,40000,49000,55000,48700,45000,31000,54000,47000,29000,51400]
        ];
        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };
    })
    .controller("BarCtrl", function($scope) {
        $scope.labels = ['2008', '2009', '2010', '2011', '2012','2013', '2014'];
        $scope.series = ['财政总收入', '公共预算收入'];

        $scope.data = [
            [200000,220000, 250000,265000, 280000,300000,330000],
            [110000, 120000, 145000, 155000, 160000, 187000, 210000]
        ];
    })
    .controller("PieCtrl", function($scope) {
        $scope.labels = ["增值税","营改增","消费税","企业所得税","其他"];
        $scope.data = [150000, 145000, 138000,128000,139800];
        $scope.labels2 = ["东城区","西城区","开发区","宝塔区","青山乡","其他"];
        $scope.data2 = [110000, 80000, 70000,90000,40000,28000];
    });
