angular.module('moduleOne',[])
angular.module('moduleOne')
	.controller('controllerOne',['$scope', function($scope){
		$scope.appear = false
		
		$scope.showMetric = function(event) {
			$scope.appear = true
			$scope.hide = false
			console.log(event)
		}

		$scope.hideMetric = function () {
			$scope.appear = false
			$scope.hide = false
		}
	
	}])

	// ng-mousemove/click/keyupdown and every other directive on the body
	// ng-model all of those actions and catch them in variable in js
	// use the caught data to populate the <p> tags in the metrick box
	// use the initial click function to pause the modeling and the second 
	// click function to resume the model using a boolean