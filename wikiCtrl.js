angular.module('wikiApp').controller('wikiCtrl', function($scope, $http){

  $scope.test = "It's alive!!!"

  $scope.searchTermArr = [];

  $scope.headerInfo = {
    project: "AngularJS Wikipedia API",
    site: "Front End API Pojects"
  };


  $scope.randomLink = 'https://en.wikipedia.org/wiki/Special:Random';

$scope.searchWiki = function() {$http({
  url:'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + $scope.searchTerm + '&format=json&callback=JSON_CALLBACK',
  method:'jsonp'

}).success(function(response){
  //Title
  $scope.searchTermArr.push(response[1]);
  //Description
  $scope.searchTermArr.push(response[2]);
  //Article Link
  $scope.searchTermArr.push(response[3]);
});
}
});
