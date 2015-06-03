angular.module('music.controllers', []);
angular.module('music.services', []);
angular.module('music.directives', []);
angular.module('music.filters', []);
angular.module('music', ['music.controllers','music.services','music.directives','music.filters','ngRoute','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('app', {
		url: "/app",
		abstract: true,
		templateUrl:"views/app.html",
		controller:"AppController"
	})
    .state('app.main',{
		url:'/main',
        abstract: true,
		templateUrl:"views/main.html",
		controller:"MainController"
	})
	.state('app.login',{
		url:'/login',
		templateUrl:"views/login.html",
		controller:"LoginController"
	})
    .state('app.main.home',{
		url:'/home',
		templateUrl:"views/home.html",
		controller:"HomeController"
	})
	.state('app.main.listSong',{
		url:'/listSong',
		templateUrl:"views/list-song.html",
		controller:"ListSongController"
	})
    .state('app.main.song',{
		url:'/song/{ID}',
		templateUrl:"views/song.html",
		controller:"SongController"
	})
	$urlRouterProvider.otherwise('/app/login');
});