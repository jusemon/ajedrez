'use strict';

function positionToFen(position, halfmoveClock, moveNumber) {
    var text = '';
    text += buildBoardRepresentation(position);
    text += ' ';
    text += position.turn;
    text += ' ';
    text += buildCastlingFlags(position);
    text += ' ';
    text += buildEnPassantTarget(position);
    text += ' ';
    text += halfmoveClock;
    text += ' ';
    text += moveNumber;
}

function fenToPosition(fen) {

}

function buildBoardRepresentation(position) {
    const board = position.board;
    var output = "";
    for (let i = 0; i < 64; i = i + 8) {
        let counter = 0;
        for (let j = 0; j < 8; j++) {
            if (board[i + j] == null) {
                counter += 1;
            }
            else {
                let piece = (board[i + j].side == 'B' ? board[i + j].type.toLowerCase() : board[i + j].type.toUpperCase());
                if (counter > 0) {
                    output = output + counter.toString();
                    counter = 0;
                }
                output = output + piece;
            }
        }
        if (counter > 0) {
            output = output + counter.toString();
        }
        if (i < 56) output = output + '/';
    }
    var aux = output.split('/');
    var output = aux.slice(0);
    let j = 0;
    for (let i = output.length - 1; i > -1; i--) {
        output[i] = aux[j];
        j++;
    }
    return output.join('/');
}

function buildEnPassantTarget(position) {
    var text = '';
    var lastPawnDMove = position.getLastPawnDMove();
    if (lastPawnDMove == null) {
        text.append("-");
    } else {
        var target = lastPawnDMove.add(0, position.getNextPlayerTurn() == ChessSide.WHITE ? 1 : -1);
        text.append(target.getPgnCoordinates());
    }
    return text.toString();
}

function getDict(){
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var dict = {};
    var counter = 0;
    for(let i = 1; i<9; i++){
        for(let j = 0; j<8; j++){
            dict[abc[j]+i] = counter;
            counter++; 
        }
    }
    return dict;
}

function builMoveFromSourceTarget(source, target){
    console.log(source, target, ChessHelper.dict) 
    return {
        src: ChessHelper.dict[source],
        dst: ChessHelper.dict[target] 
    }
}

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].src === obj.src && list[i].dst === obj.dst) 
            return true;
        
    }
    return false;
}

var ChessHelper = {
    toPartialFen: buildBoardRepresentation,
    toMove: builMoveFromSourceTarget,
    dict: getDict(),
    availableMove:containsObject 
}



module.exports = ChessHelper;