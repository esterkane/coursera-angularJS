(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.message = "";
  $scope.state = "";


  $scope.checkLunch = function () {

   if ($scope.items == "") {
		  $scope.message = "Please enter data first";
	  }
	  else {
      $scope.items = $scope.items.split(/[ ,]+/);

      console.log($scope.items);
      var itemCount = $scope.items.length;
	      if (itemCount > 3) {
	      $scope.message = "Too much!"  + " " +  $scope.items;
        $scope.state="negative";
	    }
	    else {
		      $scope.message = "Enjoy!" + " " +  $scope.items;;
          $scope.state="positive";
	    }
	  }
    $scope.items="";
  };
}
})();
