//between the view and model
//2nd new page created and saved.
//Step 3.1
boomAppCtlr = function($scope){
		//this makes the gameboard
		var game = {};
		game.board = [
			{ box : 1, owner : " "},
			{ box : 2, owner : " "},
			{ box : 3, owner : " "},
			{ box : 4, owner : " "},
			{ box : 5, owner : " "},
			{ box : 6, owner : " "},
			{ box : 7, owner : " "},
			{ box : 8, owner : " "},
			{ box : 9, owner : " "},
		];
$scope.game = game;
	};

angular
	.module("boomApp", [])
	.controller("boomAppCtlr", boomAppCtlr);

// Things do not change
// 2 Players, 3x3 Gameboard, 