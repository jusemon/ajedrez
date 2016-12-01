'use strict';

function buildBoardRepresentation(position) {
    var board = position.board;
    var output = "";
    for (var i = 0; i < 64; i = i + 8) {
        var counter = 0;
        for (var j = 0; j < 8; j++) {
            if (board[i + j] == null) {
                counter += 1;
            }
            else {
                var piece = (board[i + j].side == 'B' ? board[i + j].type.toLowerCase() : board[i + j].type.toUpperCase());
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
    var j = 0;
    for (var i = output.length - 1; i > -1; i--) {
        output[i] = aux[j];
        j++;
    }
    return output.join('/');
}

function getDict(){
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], dict ={}, counter = 0;
    for(var i = 1; i<9; i++){
        for(var j = 0; j<8; j++){
            dict[abc[j]+i] = counter;
            counter++; 
        }
    }
    return dict;
}

function buildMoveFromSourceTarget(source, target){
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
    toMove: buildMoveFromSourceTarget,
    dict: getDict(),
    availableMove:containsObject 
}

module.exports = ChessHelper;

