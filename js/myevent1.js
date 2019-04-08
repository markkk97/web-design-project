var rootApp = angular.module('rootApp', ['boxApp','myValidate','routingService','countriesApp','listApp']);


var boxApp = angular.module('boxApp', []);
boxApp.controller('ngClickCtrl',  function ($scope) {
    
    $scope.IsDisplay = false;
    $scope.records = [
        "topics",
        "Facts",
        "Discover"
      ]
    $scope.clickMe = function (clicked) {
        //alert(clicked);
        $scope.IsDisplay = clicked == true ? false : true;
    };
});

var myValidate = angular.module('myValidate', []);
myValidate.controller('validateController', function($scope) {

    $scope.submitForm = function() {
        if ($scope.userForm.$valid) {
            alert('form is correct');
        }

    };

});

var routingService = angular.module('routingService',['ngRoute']);

routingService.config( function($routeProvider){
    
    $routeProvider
    .when("/",{
        templateUrl : "js/routing/main.html" 
    })
    .when("/countries",{
        templateUrl : "js/routing/countries.html"
        
    })
    .when("/contact",{
        templateUrl : "js/routing/contact.html"
       
    });
});

var countriesApp = angular.module('countriesApp', []);
countriesApp.controller('countryCtrl',  function ($scope) {
    $scope.country3 = [{
        name: "India",
        message: "Around 70% of women in India are victims of domestic violence violence",
        img:"img/india.png"
      }, {
        name: "Afghanistan",
        message: "An estimated 87 per cent of Afghan women have experienced at least one form of physical, sexual or psychological violence or forced marriage",
        img:"img/afg.png"
      }, {
        name: "Siria",
        message: "Sexual and gender-based violence against women, girls, men, and boys has been a persistent issue in Syria since the uprising in 2011",
        img:"img/sy.png"
    }];

    $scope.country6 =[{
        name: "Somalia",
        message: "About 97.9% of Somalia's women and girls underwent female genital mutilation in a 2005 study. This was at the time the world's highest prevalence rate of the procedure",
        img:"img/som.png"
      }, {
        name: "Saudi Arabia",
        message: "Girls and women are forbidden from traveling, conducting official business, or undergoing certain medical procedures without permission from their male guardians.",
        img:"img/sa.png"
      }, {
        name: "Pakistan",
        message: "An estimated 5000 women are killed per year from domestic violence, with thousands of others maimed or disabled.",
        img:"img/pk.png"
    }];
        
   
});

var listapp = angular.module('listApp', [])

listapp.controller('listCtrl', function($scope) {
    $scope.list = [
        {name:'Global Fund for Women',
         description:'The Global Fund for Women plays a leading role in advancing women’s rights by making grants that support and strengthen women’s groups around the world....',
         category: "domestic violence"
        },
         
         

        {name:'UN Women',
         description:'The Global Fund for Women plays a leading role in advancing women’s rights by making grants that support and strengthen women’s groups around the world....',
         category: "sexual violence"
        },
         
         

        {name:'V-Day',
         description:'The Global Fund for Women plays a leading role in advancing women’s rights by making grants that support and strengthen women’s groups around the world....',
         category: "domestic violence"
        },
         
         

        {name:'International Rescue Committee (IRC)',
         description:'The Global Fund for Women plays a leading role in advancing women’s rights by making grants that support and strengthen women’s groups around the world....',
         category: "sexualv"
        },
         
         

        {name:'Center for Womens Global Leadership',
         description:'The Global Fund for Women plays a leading role in advancing women’s rights by making grants that support and strengthen women’s groups around the world....',
         category: "domestic violence"
        },
         
         

        {name:'ICRW (International Center for Research on Women)',
         description:'The Global Fund for Women plays a leading role in advancing women’s rights by making grants that support and strengthen women’s groups around the world....',
         category: "child marriage "
        },
         
         

        {name:'Promundo',
         description:'The Global Fund for Women plays a leading role in advancing women’s rights by making grants that support and strengthen women’s groups around the world....',
         category: "child marriage"
        },
         
         

        {name:'Womens Refugee Commission',
         description:'The Global Fund for Women plays a leading role in advancing women’s rights by making grants that support and strengthen women’s groups around the world....',
         category: "child marriage"
        },
         
         

        {name:'Equality Now',
         description:'The Global Fund for Women plays a leading role in advancing women’s rights by making grants that support and strengthen women’s groups around the world....',
          category: "child marriage"
         }
        ];

       
    $scope.order = function(ord) {
        $scope.Order = ord;
    }
});

//var animate = angular.module('animate', ['ngAnimate']);