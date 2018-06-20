(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.listOfDishes = "";
  $scope.resultMessage = "";
  $scope.resultColor = "#ccc";

  $scope.checkIfTooMuch = function () {
    var separator = ",";
    var arrayOfDishes = $scope.listOfDishes.split(separator);

    var nbNonEmptyDishes = countNumOfDishes(arrayOfDishes);
    if (nbNonEmptyDishes === 0) {
      $scope.resultMessage = "Please enter data first";
      $scope.resultColor = "red";
    }
    else if (nbNonEmptyDishes <= 3) {
      $scope.resultMessage = "Enjoy!";
      $scope.resultColor = "green";
    } else {
      $scope.resultMessage = "Too much!";
      $scope.resultColor = "green";
    }
  };

  /*
  This function considers non-empty strings and strings consisting only of whitespaces as non valid dishes.
  Example: list of dishes = "fish,, ,meat" => only 2 valid dishes: "fish,meat"
  */
  function countNumOfDishes(dishes) {
    var nbNonEmptyDishes = 0;
    for (var i = 0; i<dishes.length; i++) {
      if (dishes[i].trim() != "") {
        nbNonEmptyDishes++;
      }
    }
    return nbNonEmptyDishes;
  }
}

})();
