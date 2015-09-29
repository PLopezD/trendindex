var app = angular.module('starter.controllers', [])

app.controller('BookmarkCtrl', function($scope) {

  console.log("msg")
})

.controller('TrendsCtrl', ["$scope","trendService", function($scope, trendService) {
   trendService.getTrends().then(function (data) {
     $scope.trends = data
   }) 
}])

.controller('TrendDetailCtrl', ["$scope","$stateParams","trendService", function($scope, $stateParams, trendService) {
  trendService.getTrend($stateParams.trendId).then(function(payload){
    $scope.trend = payload
  });
}])

.controller('InfoCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
