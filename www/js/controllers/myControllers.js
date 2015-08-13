var app = angular.module('myControllers', ['myServices']);

app.controller('ListCtrl', function ($scope, bolichesService, $stateParams)
  {

    $scope.boliches = bolichesService.all();

//Search Bar
    $scope.myVar = true;
    $scope.showme = function(){
      $scope.q = "";
      $scope.myVar = !$scope.myVar;
    }

//Ion-List
    $scope.getItemHeight = function(item, index) {
      return 100;
    };


  });

app.controller('DetailCtrl', function ($scope, bolichesService, $stateParams)
  {

    $scope.boliches = bolichesService.all();

    $scope.boliche = $scope.boliches.filter(function(boliche){
        return boliche.id == $stateParams.id;
      })[0];

  });

app.controller('DetailLocationCtrl', function ($scope, bolichesService, $stateParams, $cordovaGeolocation)
  {

    $scope.boliches = bolichesService.all();

    $scope.boliche = $scope.boliches.filter(function(boliche){
        return boliche.id == $stateParams.id;
      })[0];

    var posOptions = {timeout: 20000, enableHighAccuracy: true}

    $scope.where = function(){
      $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function(position){
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            $scope.map = {
              center: {
                      latitude: lat,
                      longitude: long
              },
              zoom: 12
            };

             $scope.marker = {
              coords: {
                      latitude: lat,
                      longitude: long
              }
            };

            $scope.marker2 = {
              coords: {
                      latitude: $scope.boliche.latitude,
                      longitude: $scope.boliche.longitude
              },
              nombre: $scope.boliche.nombre, 
              id: $scope.boliche.id
            };
        });
  };
  $scope.where();

});


app.controller('GeolocationCtrl', function ($scope, bolichesService, $cordovaGeolocation) 
{

  $scope.boliches = bolichesService.all();

  var posOptions = {timeout: 20000, enableHighAccuracy: true}

  $scope.where = function(){
      $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function(position){
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            $scope.map = {
              center: {
                      latitude: lat,
                      longitude: long
              },
              zoom: 15
            };

             $scope.marker = {
              coords: {
                      latitude: lat,
                      longitude: long
              }
            };

/*          $scope.marker.options = {
            draggable: true,
            labelContent: marker.nombre,
            labelAnchor: "12 60",
            labelClass: "marker-labels"
          };*/

        });

  };

  $scope.where();

});

