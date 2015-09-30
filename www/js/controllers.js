var app = angular.module('starter.controllers', [])

app.controller('BookmarkCtrl',["$scope","bookmarkService", function($scope,bookmarkService) {
  $scope.trends = bookmarkService.bookmarks
}])

.controller('TrendsCtrl', ["$scope","trendService", "bookmarkService", function($scope, trendService, bookmarkService) {
  $scope.filter = function(val){
    if ($scope.tag == val){
      $scope.tag = ''
    } else {
      $scope.tag = val
    }
  }
    
   trendService.getTrends().then(function (data) {
     $scope.trends = data
   }) 
   $scope.bookmarkTrend = function(trend){
    bookmarkService.bookmarks.push(trend)
    console.log(bookmarkService.bookmarks)
   }
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
