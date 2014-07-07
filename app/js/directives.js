var MatchTreeDirectives = angular.module('MatchTreeDirectives', []);

MatchTreeDirectives.directive('greaterThan', [ function() {

	var link = function($scope, $element, $attrs, ctrl) {

		var validate = function(viewValue) {
			var comparisonModel = $attrs.lowerThan;

			if (!viewValue || !comparisonModel) {
				// It's valid because we have nothing to compare against
				ctrl.$setValidity('greaterThan', true);
			}

			// It's valid if model is greater than the model we're comparing against
			ctrl.$setValidity('greaterThan',
					parseInt(viewValue, 10) > parseInt(comparisonModel, 10));
			return viewValue;
		};

		ctrl.$parsers.unshift(validate);
		ctrl.$formatters.push(validate);

		$attrs.$observe('greaterThan', function(comparisonModel) {
			// Whenever the comparison model changes we'll re-validate
			return validate(ctrl.$viewValue);
		});

	};

	return {
		require : 'ngModel',
		link : link
	};

}]);


MatchTreeDirectives.directive('boinqTreeNode', function() {
	console.log('Registering directive boinqTreeNode');
	return {
		restrict: "AE",
		templateUrl: 'partial/tree_node.html',
	};
});