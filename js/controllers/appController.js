angular.module('music.controllers').controller('AppController', function($rootScope,$location) {
    var stateCurrent = $location.$$path;
    if (stateCurrent == "/app/login"){
        $rootScope.pageLogin = true;            
    }else{
        $rootScope.pageLogin = false;
    }
    console.log(stateCurrent);
});
