'use strict';

// angular.module('projectsApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });
function addCtrl($scope){
	$scope.items = [ {value:''}];
		 
	$scope.add=function(){
    	$scope.items.push({value:$scope.addItem});
    	$scope.addItem = '';
	}

	$scope.delete = function ( item ) {
	  var index = $scope.items.indexOf(item);alert(index);
	 	if (index != -1) {
	    	$scope.items.splice(index, 1);alert($scope.items);
		}
	};
}