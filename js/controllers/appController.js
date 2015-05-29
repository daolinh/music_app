angular.module('music.controllers').controller('AppController', function($scope,$location) {

        //console.log($scope.currentState);
        var stateCurrent = $location.$$path;
        if (stateCurrent == "/app/login"){
            $scope.pageLogin = true;            
        }else{
            $scope.pageLogin = false;
        }
    
        
//		if ($scope.currentState == ('app.login' || 'app.signup')){
//			$rootScope.isAdminPage = false;
//		}else{
//            $rootScope.isAdminPage = true;
//        }
});
