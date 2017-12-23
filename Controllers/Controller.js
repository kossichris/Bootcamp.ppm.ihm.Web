	var app = angular.module('mainApp', ['ngRoute']);
	app.config(function($routeProvider){
	$routeProvider
	.when('/',{
	templateUrl:'success.html'

	})
	.when('/success',{
	templateUrl:'success.html'
	})
	.when('/en')
	.otherwise({
	redirectTo:'/'
	});


	});
app.controller('loginCtrl', function($scope){
$scope.submit = function(){
var mail = $scope.email;
var password = $scope.password;
if($scope.email == '' && $scope.password == ''){
$location.path('/success');
}



};


})

