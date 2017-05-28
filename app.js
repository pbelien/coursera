(function(){
  'use strict';
  angular.module('LunchCheck',[])

  .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];
  function LunchController($scope){
    $scope.name="";

    $scope.ValidateInput = function(){ //validate if input is give
      var list = $scope.name
      if (list== ""){
        $scope.message = "Please enter data first"
      } else {
        EvaluateList(list);
      };
    }
    var ParseInput = function(input){ //returns list lenght
      console.log(input);
      return input.split(",").length;
    };

    var EvaluateList = function(list){ //evaluate and set message
      var listLenght = ParseInput(list);
      console.log(listLenght);
      if (listLenght <= 3) {
        $scope.message = 'Enjoy!'
      } else{
        $scope.message = 'Too much!'
      };
    };
  };
})();
