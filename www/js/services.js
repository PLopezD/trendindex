var app = angular.module('starter.services', [])

app.factory('trendService',["$http", function ($http) {
// public
    function getTrend(trendId) {
        return $http.get('js/trend.json').then(function(data){
          var trends = data.data.trends
          for (var i = 0; i < trends.length; i++) {
            if (trends[i].trend_id == parseInt(trendId)) {
           return trends[i];
        }
          }
        }
        ,errorCallback)
      }

  function getTrends(){
    return $http.get('js/trend.json').then(successCallback,errorCallback)
  };
 
//private  
  function successCallback(data) {
    // console.log(data.data.trends)
    return data.data.trends
  };

  function errorCallback(reason) {
    console.log("ERROR: Trends are unavailable because ", reason)
  };

  return {
    getTrends: getTrends,
    getTrend: getTrend
    }
}])

