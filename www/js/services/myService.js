/*var app = angular.module('myServices', ['firebase']);

app.service('bolichesService', ['$firebaseArray', function ($firebaseArray) {
  var ref = new Firebase("https://crackling-fire-3312.firebaseio.com/");
  var list = $firebaseArray(ref);
  console.log(list);
}]);*/


var app = angular.module('myServices', ['firebase']);

app.service('bolichesService', ['$firebase', function ($firebase) {
  var ref = new Firebase("https://crackling-fire-3312.firebaseio.com/");
  var sync = $firebase(ref);

  return {
    all: function() {
      return sync.$asArray();
    }
  }
}]);
