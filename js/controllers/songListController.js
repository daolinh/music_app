angular.module('music.controllers').controller('ListSongController', function($scope,$state,ListSongService){
    $scope.listSong = ListSongService.getListSong();
    console.log($scope.listSong);
    
    $scope.viewSong = function(){
        $state.go("app.main.song");
    }
})