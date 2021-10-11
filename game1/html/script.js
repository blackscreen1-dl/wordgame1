var board = [
	[1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 2]
];
var coords = [
	[0, 0],
	[4, 4]
]
var turn = 1;
function updateBoard() {
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			sq = document.getElementById("square-" + i + "-" + j);
			sq.innerHTML = "";
			if (board[i][j] === 0) {
			}
			else if (board[i][j] === 1) {
				var red_c = document.createElement("div");
				red_c.id = "red-circle";
				sq.appendChild(red_c);
			}
			else if (board[i][j] === 2) {
				var blue_c = document.createElement("div");
				blue_c.id = "blue-circle"
				sq.appendChild(blue_c);
			}
			else {
				sq.innerHTML = "";
				sq.style.backgroundColor = "#777777";
			}
		}
	}
}
onload = function () {
	document.getElementById("intro").innerHTML = "Player A's turn"
	for (var c = 0; c < 5; c++) {
		var row = document.createElement("div");
		row.className = "row";
		for (var _c = 0; _c < 5; _c++) {
			var square = document.createElement("div")
			square.id = "square-" + c + "-" + _c;
			square.className = "square";
			if ((c + _c) % 2 === 0) {
				square.style.backgroundColor = "black";
			} else {
				square.style.backgroundColor = "white";
			}
			if (c === 0 && _c === 0) {
				var red_c = document.createElement("div");
				red_c.id = "red-circle";
				square.appendChild(red_c);
			} else if (c === 4 && _c === 4) {
				var blue_c = document.createElement("div");
				blue_c.id = "blue-circle"
				square.appendChild(blue_c);
			}
			row.appendChild(square);
		}
		document.getElementById("board").appendChild(row);
	}
}

onkeydown = function () {
	var aval = []
	var x = turn - 1;
	if (coords[x][0] != 0 && board[coords[x][0] - 1][coords[x][1]] === 0) {
		aval.push(38)
	}
	if (coords[x][1] != 4 && board[coords[x][0]][coords[x][1] + 1] === 0) {
		aval.push(39)
	}
	if (coords[x][0] != 4 && board[coords[x][0] + 1][coords[x][1]] === 0) {
		aval.push(40)
	}
	if (coords[x][1] != 0 && board[coords[x][0]][coords[x][1] - 1] === 0) {
		aval.push(37)
	}
	if (aval.includes(event.keyCode)) {
		board[coords[x][0]][coords[x][1]] = 3
		if (event.keyCode === 37) {
			coords[x][1]--;
		} else if (event.keyCode === 38) {
			coords[x][0]--;
		} else if (event.keyCode === 39) {
			coords[x][1]++;
		} else if (event.keyCode === 40) {
			coords[x][0]++;
		}
		board[coords[x][0]][coords[x][1]] = turn;
		if (turn === 1) { turn = 2; document.getElementById("intro").innerHTML = "Player B's turn"; }
		else { turn = 1; document.getElementById("intro").innerHTML = "Player A's turn"; }
		updateBoard();
		var aval = []
		var x = turn - 1;
		if (coords[x][0] != 0 && board[coords[x][0] - 1][coords[x][1]] === 0) {
			aval.push(38)
		}
		if (coords[x][1] != 4 && board[coords[x][0]][coords[x][1] + 1] === 0) {
			aval.push(39)
		}
		if (coords[x][0] != 4 && board[coords[x][0] + 1][coords[x][1]] === 0) {
			aval.push(40)
		}
		if (coords[x][1] != 0 && board[coords[x][0]][coords[x][1] - 1] === 0) {
			aval.push(37)
		}
		if (aval.length === 0) {
			if (turn === 1) {
				document.getElementById("intro").innerHTML = "Player B wins";
				for (var i = 0; i < 5; i++) {
					for (var j = 0; j < 5; j++) {
						document.getElementById("square-" + i + "-" + j).style.backgroundColor = "#9cd9ff";
					}
				}
        document.getElementById("red-circle").remove();
			}
			else {
				document.getElementById("intro").innerHTML = "Player A wins"
        for (var i = 0; i < 5; i++) {
					for (var j = 0; j < 5; j++) {
						document.getElementById("square-" + i + "-" + j).style.backgroundColor = "#a50000";
					}
				}
        document.getElementById("blue-circle").remove();
			}
		}
	}
}
