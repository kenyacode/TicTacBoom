//between the view and model
//2nd new page created and saved.
//Step 3.1
boomAppCtlr = function($scope){
		//this makes the gameboard
		var game = {};
		game.board = [

				{s:"X"},{s:"X"},{s:"O"},
				{s:"X"},{s:"O"},{s:"X"},
				{s:"X"},{s:"O"},{s:"X"}

			];
$scope.game = game;
	};

angular
	.module("boomApp", [])
	.controller("boomAppCtlr", boomAppCtlr);

// Things do not change
// 2 Players, 3x3 Gameboard, 