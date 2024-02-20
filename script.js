var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

var currentPlayer = 'X';

var cells = document.querySelectorAll('td');

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
        var row = this.parentNode.rowIndex;
        var col = this.cellIndex;

        if (board[row][col] === '') {
            this.textContent = currentPlayer;
            board[row][col] = currentPlayer;

            if (checkWin(currentPlayer)) {
                setTimeout(function() {
                    alert('Player ' + currentPlayer + ' wins!');
                    resetGame();
                }, 100);
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
}

function checkWin(player) {
    for (var i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
    }

    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }

    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }

    return false;
}

function resetGame() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }

    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    currentPlayer = 'X';
}