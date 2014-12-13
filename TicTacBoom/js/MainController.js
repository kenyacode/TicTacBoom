//between the view and model
//2nd new page created and saved.
//Step 3.1


boomAppCtlr = function($scope){
		//this makes the gameboard
		var game = {};
		var player1 = new Player();
		var computer = new Computer();
		var currentPlayer = player1;

		$scope.greeting = "what up my man";		
		$scope.joshua = "Joshua Mwangi Munene";
		game.board = [

				{s:""},{s:""},{s:""},
				{s:""},{s:""},{s:""},
				{s:""},{s:""},{s:""}

			];

	$scope.fillBox = function(obj){
      var dataValue = obj.srcElement.attributes.data.value;
      var boxToChange = document.getElementById(dataValue);
      boxToChange.style.backgroundColor = currentPlayer.color

	}
	$scope.cellClick = function(i) {
		game.board[i].s = "x";
		function cellClick() {
			changeColor();
		}

		cellClick();
	};

	$scope.game = game;
	
	function changeColor() {
			if (player1) {
				return ".selected-x"
			}
			if (computer)	{
				return ".selected-o"
			}
		switchPlayer();
	};

	function switchPlayer(){
      if (currentPlayer == player1){
        currentPlayer = computer;
      }else{
        currentPlayer = player1;
      }
      	// console.log(switchPlayer());
	};


      currentPlayer = new Player();
      switchPlayer();

};

angular
	.module("boomApp", [])
	.controller("boomAppCtlr", boomAppCtlr);


    

  