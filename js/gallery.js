var app = angular.module('ngGallery', ['ngAnimate']);
app.controller('animCtrl', ["$scope", function ($scope) {
    
  $scope.var = "small";
  $scope.x = 0;
  $scope.index = "index";
  $scope.foto = [{
      src : "img/m1.jpg",
      src2 : "img/m2.jpg"
  },
  {
      src : "img/m3.jpg",
      src2 : "img/m4.jpg"
  },
  {
      src : "img/m5.jpg",
      src2 : "img/m6.jpg"
  },
  {
    src : "img/m7.jpg",
    src2 : "img/m8.jpg"
},
{
    src : "img/m9.jpg",
    src2: "img/m10.jpg"
},
{
    src : "img/m11.jpg",
    src2 : "img/m12.jpg"
},
];
 
  $scope.setMe = function () {
    $scope.x= Math.floor(Math.random() * 10) + 1;

    if($scope.x <= 2)
      return $scope.var;
    else 
      return "";
  };
  
  $scope.indexMe = function () {
    $scope.x= Math.floor(Math.random() * 10) + 1;

    if($scope.x <= 5)
      return $scope.index;
    else 
      return  "";
  };

    }]);