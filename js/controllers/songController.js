angular.module('music.controllers').controller('SongController', function($scope,$stateParams,ListSongService){
    $scope.songID = $stateParams.ID;
    $scope.song = ListSongService.getSongbyID($scope.songID);
    console.log($scope.song);
})