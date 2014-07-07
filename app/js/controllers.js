var MatchTreeControllers = angular.module('MatchTreeControllers', []);


MatchTreeControllers.controller("MainController", function($scope) {
	console.log('Registering controller MainController');
	
	//move general stuff here and restrict the treecontroller to the treenode directive
	$scope.rootNode = {
			name: "Node",
			type: "MatchAll",
			nodes: [],
	};
	$scope.tree = [$scope.rootNode];

	var nodeTypes = ['MatchAll','MatchAny','MatchLocation','MatchField'];
	var contigs = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','X','Y']; 

	$scope.mainData = {
			tree: $scope.tree,
			rootNode: $scope.rootNode,
			activeNode: $scope.rootNode,
			nodeTypes: nodeTypes,
			contigs: contigs
	};
	
	$scope.node = $scope.rootNode;

});

MatchTreeControllers.controller("TreeController", function($scope) {
	console.log('Registering controller TreeController');
	
	$scope["delete"] = function(node) {
		node.nodes = [];
	};

	$scope.add = function(node) {
		var newName, newNode, post;
		post = node.nodes.length + 1;
		newName = node.name + '-' + post;
		node.nodes.push(newNode = {
				name: newName,
				type: "MatchAll",
				nodes: [],
		});
		return newNode;
	};

	$scope.setActive = function(node) {
		$scope.mainData.activeNode = node;
	};

	$scope.isActive = function(node) {
		return (node === $scope.mainData.activeNode);
	};

	$scope.canHaveChildren = function(node) {
		switch (node.type) {
		case 'MatchAll':
		case 'MatchAny':
			return true;
		default:
			return false;
		}
	};

	$scope.toggleActive = function(node) {
		if (isActive(node)) {
			setActive({});
		} else {
			setActive(node);
		}
	};

});
