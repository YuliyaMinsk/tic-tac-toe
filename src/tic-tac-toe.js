class TicTacToe {    
    constructor() {
        this.currentPlayer = 'x';
        this.gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.gameField[rowIndex][columnIndex]) {
            this.gameField[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        if (this.isDraw() || this.getWinner()) return true;
        else return false;
    }

    getWinner() {
        const previousPlayer = this.currentPlayer == 'x' ? 'o' : 'x'; 

        if ((this.gameField[0][0] == previousPlayer) &&
            (this.gameField[0][1] == previousPlayer) &&
            (this.gameField[0][2] == previousPlayer)) return previousPlayer;

        if ((this.gameField[1][0] == previousPlayer) &&
            (this.gameField[1][1] == previousPlayer) &&
            (this.gameField[1][2] == previousPlayer)) return previousPlayer;

        if ((this.gameField[2][0] == previousPlayer) &&
            (this.gameField[2][1] == previousPlayer) &&
            (this.gameField[2][2] == previousPlayer)) return previousPlayer;

        if ((this.gameField[0][0] == previousPlayer) &&
            (this.gameField[1][0] == previousPlayer) &&
            (this.gameField[2][0] == previousPlayer)) return previousPlayer;

        if ((this.gameField[0][1] == previousPlayer) &&
            (this.gameField[1][1] == previousPlayer) &&
            (this.gameField[2][1] == previousPlayer)) return previousPlayer;

        if ((this.gameField[0][2] == previousPlayer) &&
            (this.gameField[1][2] == previousPlayer) &&
            (this.gameField[2][2] == previousPlayer)) return previousPlayer;

        if ((this.gameField[0][0] == previousPlayer) &&
            (this.gameField[1][1] == previousPlayer) &&
            (this.gameField[2][2] == previousPlayer)) return previousPlayer;

        if ((this.gameField[0][2] == previousPlayer) &&
            (this.gameField[1][1] == previousPlayer) &&
            (this.gameField[2][0] == previousPlayer)) return previousPlayer;

        return null;
    }

    noMoreTurns() {
        let emptyCell = false;
        for(let i = 0; i < this.gameField.length; i++ ) {
            if (this.gameField[i].findIndex(value => value == null) != -1) emptyCell = true;
        }
        if (emptyCell) return false;
        else return true;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) return true;
        else return false;
    }

    getFieldValue(rowIndex, columnIndex) {
        return this.gameField[rowIndex][columnIndex];
    }
}

module.exports = TicTacToe;
