angular.module('music.controllers').controller('ListSongController', function($scope, ListSongService){
    $scope.listSong = ListSongService.getListSong();
    console.log($scope.listSong);
})