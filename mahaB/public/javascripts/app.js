var mahaB = angular.module("mahaB", ['ngRoute']);

mahaB.controller("RealTimeCtrl", function ($scope) {
	console.log($scope);
	$scope.test = "MF is working";
});


mahaB.config(function ($routeProvider) {
	$routeProvider.
		when('/realtime', {
			templateUrl: 'partials/realtime.html',
			controller: 'RealTimeCtrl'
		}).
		otherwise({
			redirectTo: '/realtime'
		});
});


