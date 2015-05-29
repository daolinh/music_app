angular.module('music.directives').directive('CompareDirective', function(){
	return {
		require: 'ngModel',
		restrict: 'A',
		scope:{
			compare: '='
		},
		link: function(scope,elem,attrs,ctrl){
			scope.$watch(function(){
				return (crtl.$pristine && angular.isUndefined(ctrl.$modelValue)) || scope.compare ===ctrl.$modelValue;
			}, function(currentValue){
				ctrl.$setValidity('compare', currentValue);
			});
		}
	}
})