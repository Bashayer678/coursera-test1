
(function(){
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject=['$scope'];

    function LunchCheckController($scope){
        $scope.CheckIfTooMuch=function(){
            $scope.name=document.getElementById("lunch-menu").value;
            $scope.message="";

            if($scope.name.length==0){
                return $scope.myObj={
                    "message":$scope.message="Plaease enter data first",
                    "color":"red"
                };
            }
            
           else if($scope.name.split(",").length<=3){
            return $scope.myObj={
                "message":$scope.message="Enjoy.",
                "color":"green"

            };
           }
           else{
            return $scope.myObj={
                "message":$scope.message="Too much",
                "color":"red"
            };
           }
        }
    }
})()
