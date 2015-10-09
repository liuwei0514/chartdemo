angular.module('starter.controllers', ["chart.js"])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopup) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};
    $scope.loginData.username = "admin";
    $scope.loginData.password = "1";
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
        if ($scope.loginData.username == "admin" && $scope.loginData.password == "1") {
            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                $scope.closeLogin();
            }, 1000);
        } else {
            // $ionicPopup.alert({
            //     title: '用户名密码不匹配',
            //     template: '请输入正确的用户名密码'
            // });
        }
    };
})


.controller("IndexCtrl", function($scope, $timeout) {
        $timeout(function() {
            $scope.$parent.login();
        }, 1000);
    })
    .controller("NewsCtrl", function($scope) {
        $scope.news = [{
            _id:1,
            title: "工作目标",
            content: "社会综合治税的目标是通过建立完善社会综合治税网络，依靠征管方式、征管手段、征管机制的创新，提高税收收入计划的科学性和指导性，建立起适应社会主义市场经济体制需要的社会综合治税工作机制，形成政府依法管税、税务部门依法征税、相关职能部门协税护税、纳税人依法缴税、社会各界综合治税的良好局面，实现“政府领导、部门共管、财税主办、社会参与、司法保障、信息化支撑”的综合治税新格局，促进全市经济健康发展和财政收入稳定增长。"
        }, {
            _id:2,
            title: "指导原则",
            content: "依法治税原则。有关部门和单位在社会综合治税活动中依法实施监督和协助管理，向税务部门提供涉税信息，必须依法办事，不得超越有关法律法规规定行使权力。<br>    客观公正原则。综合治税工作要在客观公正的前提下，增强执法管理的透明度，维护纳税人合法权益，优化税收环境，保证税收征收管理的正常运行。<br>    监督制约原则。综合治税工作必须在市综合治税领导小组的领导下，在社会各界的监督以及税务部门的业务指导下开展工作。<br>积极稳妥原则。在各级政府部门和有关单位的支持配合下，有效建立社会综合治税组织，充分发挥各部门的职能作用，积极稳妥地开展工作。"
        }, {
            _id:3,
            title: "组织领导",
            content: "为使社会综合治税工作开展更加有序、高效，决定成立十堰市社会综合治税工作领导小组，统一组织领导全市社会综合治税工作。负责建立健全全市社会综合治税工作组织网络，指导、督促社会综合治税各成员单位开展协税护税工作；定期召开社会综合治税联席会议，公布社会综合治税工作开展情况，研究解决存在的问题；负责对社会综合治税各成员单位的协税护税工作进行考核。"
        }, {
            _id:4,
            title: "建立健全工作制度",
            content: "建立社会综合治税工作例会制度。至少每季度召开一次社会综合治税领导小组会议，分析全市税收收入形势，研究解决存在的问题，部署下一阶段的工作。<br>建立奖惩制度。建立健全社会综合治税考核考评机制，制定社会综合治税考核办法，每年底由社会综合治税领导小组按照考核办法的要求对社会综合治税工作中各单位职责的履行情况进行考核，对工作成绩突出的单位和个人予以奖励；对在工作中不履行职责，导致税款流失的单位和个人，按规定严肃查处。"
        }, {
            _id:5,
            title: "工作要求",
            content: "充分认识社会综合治税工作的重要意义。税收管理工作是一项系统工程，工作面广量大，需要社会各界的关心、理解和支持。各部门要把社会综合治税工作列入重要议事日程常抓不懈。对社会综合治税工作，各部门特别是成员单位要予以高度重视和大力支持，做到主要领导亲自抓，分管领导具体抓，并指定专人负责日常的协调工作，确保社会综合治税工作顺利开展。"
        }, {
            _id:6,
            title: "信息交换范围",
            content: "涉税信息交换的范围分为两类：一是十堰市辖区内各类纳税人的基础信息；二是十堰市辖区内基础设施、重点建设工程、房地产开发等项目相关信息。"
        }, {
            _id:7,
            title: "档案管理制度",
            content: "十堰市治税办和成员单位要建立工作档案，对各单位参与综合治税的领导成员和协税信息专管员的基本情况、联络电话登记造册，对涉税信息进行分类汇总，归档保存。"
        }, {
            _id:8,
            title: "加大宣传力度",
            content: "文广、司法、财税等部门要密切配合，借助报刊、电视、广播、网络等宣传媒介，大力宣传依法治税、综合治税的重要意义，增进全民参与综合治税工作的主动性和积极性。治税办要在全市范围内选树一批依法纳税、诚信纳税的先进典型，适时曝光一批涉税违法的典型案件，进一步提高纳税人依法纳税、诚信纳税的自觉性。全市各级各部门也要结合实际，因地制宜地开展形式多样的宣传教育活动，大力营造综合治税的浓厚氛围，切实使社会综合治税工作家喻户晓、深入人心。"
        }];

    })

.controller("ReportCtrl", function($scope, $ionicModal, $cordovaCamera) {

    $scope.latitude = 32.635042;
    $scope.longitude = 110.80454;

    $ionicModal.fromTemplateUrl('templates/changeLocation.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.changeLocationModal = modal;
    });
    $scope.closeChangeLocationModal = function() {
        $scope.changeLocationModal.hide();
    };

    $scope.changeLocation = function(e) {
        $scope.changeLocationModal.show();
    };

    $scope.dochangeLocation = function() {
        $scope.address = "定位中";
    };
    $scope.btnchangeLocation = function() {
        console.log(map);
        console.log(marker.getPosition());
        var location = marker.getPosition();

        $scope.latitude = location.lat;
        $scope.longitude = location.lng;
        console.log($scope.latitude);
        console.log($scope.longitude);
        AMap.service('AMap.Geocoder', function() { //回调函数
            //实例化Geocoder
            geocoder = new AMap.Geocoder({
                city: "330100" //城市，默认：“全国”
            });
            var lnglatXY = [$scope.longitude, $scope.latitude];
            geocoder.getAddress(lnglatXY, function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    //即，result.regeocode.formattedAddress
                    $scope.address = result.regeocode.formattedAddress;
                    $scope.changeLocationModal.hide();
                } else {
                    //获取地址失败
                }
            });
        })

    };

    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    var map;
    var marker ;
    $scope.$on('modal.shown', function() {
        if ($scope.changeLocationModal.isShown()) {
            map = new AMap.Map("mapContainer", {
                resizeEnable: true,
                center: [$scope.longitude, $scope.latitude],
                zoom: 13
            });

            map.plugin(["AMap.ToolBar"], function() {
                toolBar = new AMap.ToolBar();
                map.addControl(toolBar);
            });

            marker = new AMap.Marker({
                position: map.getCenter(),
                draggable: true,
                cursor: 'move',
                raiseOnDrag: true
            });

            marker.setMap(map);
        }
    });

    $scope.attachImg = function() {
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // error
        });
    };



    $scope.address = "定位中";
    // AMap.service('AMap.Geocoder', function() { //回调函数
    //     //实例化Geocoder
    //     geocoder = new AMap.Geocoder({
    //         city: "330100" //城市，默认：“全国”
    //     });

    //     var lnglatXY = [116.396574, 39.992706];
    //     geocoder.getAddress(lnglatXY, function(status, result) {
    //         if (status === 'complete' && result.info === 'OK') {
    //             //即，result.regeocode.formattedAddress
    //             $scope.address = result.regeocode.formattedAddress;
    //         } else {
    //             //获取地址失败
    //         }
    //     });
    // })

    // if (!window.cordova) {
    //     cordova = {};
    // }

    if (cordova.platformId == "android") {
        var options = {
            enableHighAccuracy: true, // 是否使用 GPS
            maximumAge: 30000, // 缓存时间
            timeout: 27000 // 超时时间
        }
        navigator.geolocation.getCurrentPosition(function(geoposition) {
            console.log(geoposition);
            $scope.latitude = geoposition.coords.latitude;
            $scope.longitude = geoposition.coords.longitude;
            AMap.service('AMap.Geocoder', function() { //回调函数
                //实例化Geocoder
                geocoder = new AMap.Geocoder({
                    city: "330100" //城市，默认：“全国”
                });
                var lnglatXY = [$scope.longitude, $scope.latitude];
                geocoder.getAddress(lnglatXY, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        //即，result.regeocode.formattedAddress
                        $scope.address = result.regeocode.formattedAddress;
                    } else {
                        //获取地址失败
                    }
                });
            })
        }, function(message) {
            console.log(message);
        }, options);
    }
    if (cordova.platformId == "ios") {
        var posOptions = {
            timeout: 10000,
            enableHighAccuracy: false
        };
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {

            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            AMap.service('AMap.Geocoder', function() { //回调函数
                //实例化Geocoder
                geocoder = new AMap.Geocoder({
                    city: "330100" //城市，默认：“全国”
                });
                var lnglatXY = [$scope.longitude, $scope.latitude];
                geocoder.getAddress(lnglatXY, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        //即，result.regeocode.formattedAddress
                        $scope.address = result.regeocode.formattedAddress;
                    } else {
                        //获取地址失败
                    }
                });
            })
        }, function(err) {
            // error
        });
    }

})

.controller("MapCtrl", function($scope, $cordovaGeolocation) {

})

.controller("NewsitemCtrl", function($scope, $stateParams) {
    var id = $stateParams.id; 
    $scope.news = [{
        _id:1,
        title: "工作目标",
        content: "社会综合治税的目标是通过建立完善社会综合治税网络，依靠征管方式、征管手段、征管机制的创新，提高税收收入计划的科学性和指导性，建立起适应社会主义市场经济体制需要的社会综合治税工作机制，形成政府依法管税、税务部门依法征税、相关职能部门协税护税、纳税人依法缴税、社会各界综合治税的良好局面，实现“政府领导、部门共管、财税主办、社会参与、司法保障、信息化支撑”的综合治税新格局，促进全市经济健康发展和财政收入稳定增长。"
    }, {
        _id:2,
        title: "指导原则",
        content: "依法治税原则。有关部门和单位在社会综合治税活动中依法实施监督和协助管理，向税务部门提供涉税信息，必须依法办事，不得超越有关法律法规规定行使权力。<br>    客观公正原则。综合治税工作要在客观公正的前提下，增强执法管理的透明度，维护纳税人合法权益，优化税收环境，保证税收征收管理的正常运行。<br>    监督制约原则。综合治税工作必须在市综合治税领导小组的领导下，在社会各界的监督以及税务部门的业务指导下开展工作。<br>积极稳妥原则。在各级政府部门和有关单位的支持配合下，有效建立社会综合治税组织，充分发挥各部门的职能作用，积极稳妥地开展工作。"
    }, {
        _id:3,
        title: "组织领导",
        content: "为使社会综合治税工作开展更加有序、高效，决定成立十堰市社会综合治税工作领导小组，统一组织领导全市社会综合治税工作。负责建立健全全市社会综合治税工作组织网络，指导、督促社会综合治税各成员单位开展协税护税工作；定期召开社会综合治税联席会议，公布社会综合治税工作开展情况，研究解决存在的问题；负责对社会综合治税各成员单位的协税护税工作进行考核。"
    }, {
        _id:4,
        title: "建立健全工作制度",
        content: "建立社会综合治税工作例会制度。至少每季度召开一次社会综合治税领导小组会议，分析全市税收收入形势，研究解决存在的问题，部署下一阶段的工作。<br>建立奖惩制度。建立健全社会综合治税考核考评机制，制定社会综合治税考核办法，每年底由社会综合治税领导小组按照考核办法的要求对社会综合治税工作中各单位职责的履行情况进行考核，对工作成绩突出的单位和个人予以奖励；对在工作中不履行职责，导致税款流失的单位和个人，按规定严肃查处。"
    }, {
        _id:5,
        title: "工作要求",
        content: "充分认识社会综合治税工作的重要意义。税收管理工作是一项系统工程，工作面广量大，需要社会各界的关心、理解和支持。各部门要把社会综合治税工作列入重要议事日程常抓不懈。对社会综合治税工作，各部门特别是成员单位要予以高度重视和大力支持，做到主要领导亲自抓，分管领导具体抓，并指定专人负责日常的协调工作，确保社会综合治税工作顺利开展。"
    }, {
        _id:6,
        title: "信息交换范围",
        content: "涉税信息交换的范围分为两类：一是十堰市辖区内各类纳税人的基础信息；二是十堰市辖区内基础设施、重点建设工程、房地产开发等项目相关信息。"
    }, {
        _id:7,
        title: "档案管理制度",
        content: "十堰市治税办和成员单位要建立工作档案，对各单位参与综合治税的领导成员和协税信息专管员的基本情况、联络电话登记造册，对涉税信息进行分类汇总，归档保存。"
    }, {
        _id:8,
        title: "加大宣传力度",
        content: "文广、司法、财税等部门要密切配合，借助报刊、电视、广播、网络等宣传媒介，大力宣传依法治税、综合治税的重要意义，增进全民参与综合治税工作的主动性和积极性。治税办要在全市范围内选树一批依法纳税、诚信纳税的先进典型，适时曝光一批涉税违法的典型案件，进一步提高纳税人依法纳税、诚信纳税的自觉性。全市各级各部门也要结合实际，因地制宜地开展形式多样的宣传教育活动，大力营造综合治税的浓厚氛围，切实使社会综合治税工作家喻户晓、深入人心。"
    }];
    var newsItem = {};
    for (var i = $scope.news.length - 1; i >= 0; i--) {
        if($scope.news[i]._id==id){
            newsItem = $scope.news[i];
        }
    };
    $scope.title = newsItem.title;
    $scope.html = newsItem.content;
})

.controller("JixiaoCtrl", function($scope) {
    
})
.controller("LineCtrl", function($scope) {
        $scope.labels = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
        $scope.series = ['2014年(亿元)', '2013年(亿元)'];
        $scope.data = [
            [4.6, 3.2, 4.28, 5, 5.7, 5.12, 4.8, 2.9, 6.1, 4.9, 3, 5.45],
            [4.3, 3, 4, 4.9, 5.5, 4.87, 4.5, 3.1, 5.4, 4.7, 2.9, 5.14]
        ];
        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };
    })
    .controller("BarCtrl", function($scope) {
        $scope.labels = ['2008', '2009', '2010', '2011', '2012', '2013', '2014'];
        $scope.series = ['财政总收入(亿元)', '公共预算收入(亿元)'];

        $scope.data = [
            [20, 22, 25, 26.5, 28, 30, 33],
            [11, 12, 14.5, 15.5, 16, 18.7, 21]
        ];
    })
    .controller("PieCtrl", function($scope) {
        $scope.labels = ["增值税(亿元)", "营改增(亿元)", "消费税(亿元)", "企业所得税(亿元)", "其他(亿元)"];
        $scope.data = [15, 14.5, 13.8, 12.8, 13.98];
        $scope.labels2 = ["东城区(亿元)", "西城区(亿元)", "开发区(亿元)", "宝塔区(亿元)", "青山乡(亿元)", "其他(亿元)"];
        $scope.data2 = [11, 8, 7, 9, 4, 2.8];
    });
