var app = angular.module('myApp', ['ionic', 'firebase', 'ngCordova', 'uiGmapgoogle-maps', 'myControllers', 'myServices']);

app.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.boliches', {
      url: "/home",
      views: {
        'boliches-tab': {
          templateUrl: "templates/boliches-list.html",
          controller: 'ListCtrl'
        }
      }
    })
    .state('tabs.boliche-detail', {
      url: "/boliches-list/:id",
      views: {
        'boliches-tab': {
          templateUrl: "templates/boliches-detail.html",
          controller: 'DetailCtrl'
        }
      }
    })
    .state('tabs.boliche-detail-location', {
      url: "/boliches-detail-location/:id",
      views: {
        'boliches-tab': {
          templateUrl: "templates/boliche-detail-location.html",
          controller: 'DetailLocationCtrl'
        }
      }
    })
    .state('tabs.bares', {
      url: "/bares-list",
      views: {
        'bares-tab': {
          templateUrl: "templates/bares-list.html"
        }
      }
    })
    .state('tabs.geolocation', {
      url: "/geolocation",
      views: {
        'geolocation-tab': {
          templateUrl: "templates/geolocation.html"
        }
      }
    });
/*    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })*/

/*    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })*/


   $urlRouterProvider.otherwise("/tab/home");

});

app.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}]);