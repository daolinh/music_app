angular.module('music.controllers').controller('LoginController', function(LoginService, $scope, $state) {
    $scope.username = "admin";
    $scope.password = "1111";
	$scope.login = function(){
		var result = LoginService.checkLogin($scope.username,$scope.password);
		if (result){
			alert("login success");
            $state.go('app.main.home');
            
		}else{
			alert("login fail");
		}
	}
	
})