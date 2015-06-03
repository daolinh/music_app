angular.module('music.controllers').controller('HomeController', function($scope, ListSongService) {
     $scope.orbitSong = ListSongService.getListSong();
});
