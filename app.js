var app = angular.module('testApp', []);
app.controller('myCtrl', function($scope) {
	$scope.string = "hello world";
	$scope.phamFam = [{first: "Anna" , last : "Pham"},
						{first: "Neeral", last:"Desai"},
						{first: "Raina", last: "Jasuja"},
						{first: "Emily", last: "Ladue"}];
}
);